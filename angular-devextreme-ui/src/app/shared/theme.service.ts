import {Injectable} from '@angular/core';
import {refreshTheme} from 'devextreme/viz/themes';
import themes from 'devextreme/ui/themes';

declare const $: any;

@Injectable({
    providedIn: 'root'
})
export class ThemeService {

    applyTheme(theme?: string) {
        const themeMarker = 'dx.';
        theme = theme || 'material.blue.light';
        this.loadExternalStyles(theme).then(w => {
            // tslint:disable-next-line:forin
            for (const index in document.styleSheets) {
                const styleSheet = document.styleSheets[index];
                const href = styleSheet.href;
                if (href) {
                    const themeMarkerPosition = href.indexOf(themeMarker);
                    if (themeMarkerPosition >= 0) {
                        const startPosition = themeMarkerPosition + themeMarker.length;
                        const endPosition = href.indexOf('.css', startPosition);
                        const fileNamePart = href.substring(startPosition, endPosition);
                        styleSheet.disabled = fileNamePart !== theme;
                    }
                }
            }
            themes.current(theme);
            refreshTheme();
        }).catch((ex) => {
            // console.error('load script error', ex);
        });
    }

    public loadExternalStyles(styleUrl: string) {
        return new Promise((resolve, reject) => {
            const themeMarker = 'dx.';
            const theme = themeMarker + styleUrl + '.css';
            const html = 'link[rel=stylesheet][href~="' + theme + '"]';
            if ($(html).length !== 0) {
                return resolve('load');
            }
            const styleElement = document.createElement('link');
            styleElement.rel = 'stylesheet';
            styleElement.href = theme;
            styleElement.onload = resolve;
            document.head.appendChild(styleElement);
        });
    }

    constructor() {
    }
}
