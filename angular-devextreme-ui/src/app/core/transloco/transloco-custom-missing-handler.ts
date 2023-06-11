import {TranslocoConfig, TranslocoMissingHandler, TranslocoService} from '@ngneat/transloco';
import {GenericService} from '../../shared/generic.service';
import {Router} from '@angular/router';
import {ThemeService} from '../../shared/theme.service';

export class TranslocoCustomMissingHandler implements TranslocoMissingHandler {
    // @ts-ignore
    constructor(private genericService: GenericService) {}
    handle(key: string, config: TranslocoConfig) {
        const c: any = config;
        const languagesService = this.genericService.instance('languageMessages');
        const body = {
            languages: {
                lang: c.activeLang,
            },
            key: key,
            content: key,
        };
        // console.log(`lng: ${c.activeLang}, key: ${key}`);
        languagesService.save(body).then();
        return key;
    }
}
