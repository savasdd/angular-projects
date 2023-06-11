import {Component} from '@angular/core';
import {GenericService} from 'app/shared/generic.service';
import {GenericFileService} from '../../../../shared/generic-file.service';
import {ConstantService} from '../../../../shared/constant.service';
import {environment} from '../../../../../environments/environment';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html'
})
export class ProfileComponent {

    baseUrl: string;
    profileDataSource: any = {};
    notificationTextArea: string;
    personNotificationService: GenericService;

    profileService: GenericFileService;

    constructor(public constantService: ConstantService,
                private genericFileService: GenericFileService,
                private genericService: GenericService) {

        this.profileService = genericFileService.instance('profile');


        this.personNotificationService = genericService.instance('personNotification');
        this.baseUrl = environment.apiUrl;
        this.profileService.customGet('findOne')
            .then((response: any) => {
                this.profileDataSource = response;
            });
    }

    passwordComparison = () => {
        return this.profileDataSource.password;
    }

    updateProfile() {
        this.profileService.update(this.profileDataSource).then((response => {
                return;
            }),
            err => {
                return;
            });
    }

    testNotification() {
        this.personNotificationService.customPost('testNotification', this.notificationTextArea).then();
    }

    onPhotoValueChanged(value: any): void {
        this.profileDataSource.document = value.value[0];
    }

    turkishtoEnglish(value: string): string {
        if (value) {
            return value.trim().toLowerCase()
                .replace('Ğ', 'g')
                .replace('Ü', 'u')
                .replace('Ş', 's')
                .replace('I', 'i')
                .replace('İ', 'i')
                .replace('Ö', 'o')
                .replace('Ç', 'c')
                .replace('ğ', 'g')
                .replace('ü', 'u')
                .replace('ş', 's')
                .replace('ı', 'i')
                .replace('ö', 'o')
                .replace('ç', 'c');
        } else {
            return null;
        }
    }

}
