import {
    Translation,
    TRANSLOCO_CONFIG,
    TRANSLOCO_LOADER,
    translocoConfig,
    TranslocoModule,
    TranslocoService,
    getBrowserLang,
    TRANSLOCO_MISSING_HANDLER
} from '@ngneat/transloco';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { TranslocoHttpLoader } from 'app/core/transloco/transloco.http-loader';
import {GenericService} from '../../shared/generic.service';
import {UtilService} from '../../shared/util.service';
import {TranslocoCustomMissingHandler} from './transloco-custom-missing-handler';

@NgModule({
    exports  : [
        TranslocoModule
    ],
    providers: [
        {
            // Provide the default Transloco configuration
            provide : TRANSLOCO_CONFIG,
            useValue: translocoConfig({
                defaultLang         : localStorage.getItem('lang') ? localStorage.getItem('lang') : getBrowserLang(),
                fallbackLang        : 'en',
                reRenderOnLangChange: true,
                prodMode            : true
            })
        },
        {
            // Provide the default Transloco loader
            provide : TRANSLOCO_LOADER,
            useClass: TranslocoHttpLoader
        },
        {
            // Provide the default Transloco missing handler
            provide : TRANSLOCO_MISSING_HANDLER,
            deps      : [GenericService],
            useClass: TranslocoCustomMissingHandler
        },
        {
            // Preload the default language before the app starts to prevent empty/jumping content
            provide   : APP_INITIALIZER,
            deps      : [TranslocoService, GenericService],
            useFactory: (translocoService: TranslocoService, genericService: GenericService): any => (): Promise<Translation> => {
                const languagesService = genericService.instance('languages');

                let loadOptions = UtilService.setPage({});
                loadOptions.select = ['lang', 'country', 'title'];
                return languagesService.findAll(loadOptions).then((result: any) => {
                    let languages = [];
                    result.items.forEach(item => {
                        languages.push({
                            id: item.lang,
                            label: item.title,
                            country: item.country
                        })
                    })
                    translocoService.setAvailableLangs(languages);
                    const defaultLang = translocoService.getDefaultLang();
                    translocoService.setActiveLang(defaultLang);
                    return translocoService.load(defaultLang).subscribe();
                })
            },
            multi     : true
        }
    ]
})
export class TranslocoCoreModule
{
}
