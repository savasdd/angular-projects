import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';
declare const $: any;

const misc: any = {
    navbar_menu_visible: 0,
    active_collapse: true,
    disabled_collapse_init: 0,
};

@Injectable({
    providedIn: 'root'
})
export class UtilService {
    constructor(private snackBar: MatSnackBar) {
    }

    static scrollTop() {
        const elemMainPanel = <HTMLElement>document.querySelector('.main-panel');

        if (elemMainPanel) {
            elemMainPanel.scrollTop = 0;
        }
    }

    b64toFile(dataURI): File {
        // convert the data URL to a byte string
        const byteString = atob(dataURI.split(',')[1]);

        // pull out the mime type from the data URL
        const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

        // Convert to byte array
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }

        // Create a blob that looks like a file.
        const blob = new Blob([ab], {type: mimeString});
        blob['lastModifiedDate'] = (new Date()).toISOString();
        blob['name'] = 'file';

        // Figure out what extension the file should have
        switch (blob.type) {
            case 'image/jpeg':
                blob['name'] += '.jpg';
                break;
            case 'image/png':
                blob['name'] += '.png';
                break;
        }
        // cast to a File
        return <File>blob;
    }

    decimal2hex(d) {
        return (+d).toString(16).toUpperCase();
    }

    hex2decimal(hexString) {
        return parseInt(hexString, 16);
    }

    string2Byte(valueString) {
        const bytes = [];
        for (let i = 0; i < valueString.length; ++i) {
            bytes.push(valueString.charCodeAt(i));
        }
        return bytes;
    }

    minimizeSidebar() {
        const body = document.getElementsByTagName('body')[0];

        if (misc.sidebar_mini_active === true) {
            body.classList.remove('sidebar-mini');
            misc.sidebar_mini_active = false;

        } else {
            setTimeout(() => {
                body.classList.add('sidebar-mini');

                misc.sidebar_mini_active = true;
            }, 300);
        }

        // we simulate the window Resize so the charts will get updated in realtime.
        const simulateWindowResize = setInterval(() => {
            window.dispatchEvent(new Event('resize'));
        }, 180);

        // we stop the simulation of Window Resize after the animations are completed
        setTimeout(() => {
            clearInterval(simulateWindowResize);
        }, 1000);
    }
    static mergeEquallyLabeledTypes(item, parents) {
        if (item.name) {
            parents.push(item.name);
        }

        if (item.parent) {
            this.mergeEquallyLabeledTypes(item.parent, parents);
        }
        return parents.join(' / ');
    }

    getImageDimension(image): Observable<any> {
        return new Observable(observer => {
            const img = new Image();
            img.onload = (event) => {
                const loadedImage: any = event.currentTarget;
                image.width = loadedImage.width;
                image.height = loadedImage.height;
                observer.next(image);
                observer.complete();
            };
            img.src = image.url;
        });
    }

    timeDiffCalc(dateFuture, dateNow): string {
        let diffInMilliSeconds = Math.abs(dateFuture - dateNow) / 1000;

        // calculate days
        const days = Math.floor(diffInMilliSeconds / 86400);
        diffInMilliSeconds -= days * 86400;
        // console.log('calculated days', days);

        // calculate hours
        const hours = Math.floor(diffInMilliSeconds / 3600) % 24;
        diffInMilliSeconds -= hours * 3600;
        // console.log('calculated hours', hours);

        // calculate minutes
        const minutes = Math.floor(diffInMilliSeconds / 60) % 60;
        diffInMilliSeconds -= minutes * 60;
        // console.log('minutes', minutes);

        let difference = '';
        if (days > 0) {
            difference += (days === 1) ? `${days} day, ` : `${days} gün, `;
        }
        if (hours > 0) {
            difference += (hours === 0 || hours === 1) ? `${hours} hour, ` : `${hours} saat, `;
        }
        if (minutes > 0) {
            difference += (minutes === 0 || hours === 1) ? `${minutes} minutes` : `${minutes} dakika`;
        }
        if (difference === '') {
            difference = `${Math.round(diffInMilliSeconds)} saniye`;
        }

        return difference;
    }

    showNotification(fromValue: any, alignValue: any, messageText: string, typeValue: string) {
        let classValue = 'red-snackbar';
        switch (typeValue) {
            case 'success':
                classValue = 'green-snackbar';
                break;
            case 'danger':
                classValue = 'red-snackbar';
                break;
        }

        this.snackBar.open(messageText, 'Kapat', {
            duration: 3000,
            verticalPosition: alignValue,
            panelClass: [classValue]
        });
    }

    uniqueByKey(array, key) {
        array = array.filter(f => f !== undefined && f !== null);
        return [...new Map(array.map((x) => [x[key], x])).values()];
        // const uniqueCount = [...new Set(this.animalData.map(item => item.holding.id))];
    }

    static setPage(loadOptions: any) {
        if (!loadOptions.skip) {
            loadOptions.skip = 0;
        }
        if (!loadOptions.take) {
            loadOptions.take = 2147483647;
        }
        if (!loadOptions.requireTotalCount) {
            loadOptions.requireTotalCount = true;
        }
        return loadOptions;
    }

    static showNotification(from: any, align: any, message: string, type: string, timer: number) {
        $.notify({
            icon: 'notifications',
            message
        }, {
            type,
            timer,
            placement: {
                from,
                align
            }
        });
    }

    static getBaseURL(): string {
        return window.location.hostname;
    }
    static getFlagEmoji(countryCode) {
        const values = countryCode.split(/-|_/);
        countryCode = values.length > 1 ? values[1] : countryCode;
        return countryCode.toUpperCase().replace(/./g, char =>
            String.fromCodePoint(127397 + char.charCodeAt())
        );
    }

    static onInsertedUpdated(value: any, data: any): void {
        if (!data.value) {
            data.value = [value.data];
        }
        data.setValue(data.value);
    }

    static isJson(str) {
        if (!str) {
            return false;
        }
        let value = typeof str !== "string" ? JSON.stringify(str) : str;
        try {
            const result = JSON.parse(value);
            return (typeof result) === 'object';
        } catch (e) {
            return false;
        }
    }

}
