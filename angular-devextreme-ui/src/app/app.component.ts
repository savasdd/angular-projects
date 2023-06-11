import {Component, OnInit} from '@angular/core';
import DataGrid from 'devextreme/ui/data_grid';
import TreeList from 'devextreme/ui/tree_list';
import {Subscription} from 'rxjs';
import { Router, NavigationStart } from '@angular/router';
import {ThemeService} from './shared/theme.service';
import { filter } from 'rxjs/operators';
import {locale, loadMessages} from 'devextreme/localization';
import {getBrowserLang, TranslocoService} from '@ngneat/transloco';
import deMessages from 'devextreme/localization/messages/de.json';
import enMessages from 'devextreme/localization/messages/en.json';

declare var require: any;
@Component({
    selector   : 'app-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss']
})
export class AppComponent implements OnInit
{
    private _router: Subscription;
    /**
     * Constructor
     */
    constructor(private router: Router,
                private themeService: ThemeService,
                private _translocoService: TranslocoService
    )
    {
        this.devextremeGlobalOptions();
        this.translateApp();
        _translocoService.langChanges$.subscribe(lang => {
            localStorage.setItem('lang', lang);
            locale(lang);
            document.documentElement.lang = lang;
        });
    }

    ngOnInit(): void {
        this._router = this.router.events.pipe(filter(event => event instanceof NavigationStart)).subscribe((event: NavigationStart) => {
            this.themeService.applyTheme();
        });
    }

    devextremeGlobalOptions() {
        DataGrid.defaultOptions({
            options: {
                searchPanel: {
                    searchVisibleColumnsOnly: true
                },
                showRowLines: true,
                rowAlternationEnabled: true,
                bindingOptions: {},
                onRowUpdating: (e: any) => {
                    if (e.oldData.xmin) {
                        e.newData.xmin = e.oldData.xmin;
                    }
                },
                onEditorPreparing(e: any) {
                    if (e.editorName === 'dxDateBox') {
                        e.editorOptions.openOnFieldClick = true;
                    }
                },
                onInitialized(e) {
                    e.component.option('syncLookupFilterValues', false);
                },
                onOptionChanged(e): void {
                    // if (e.name === 'paging') {
                    //     UtilService.scrollTop();
                    // }
                },
                onToolbarPreparing(e: any) {
                    e.toolbarOptions.items.unshift(
                        {
                            location: 'after',
                            widget: 'dxButton',
                            options: {
                                icon: 'refresh',
                                onClick: () => {
                                    e.component.getDataSource().reload();
                                }
                            }
                        });
                },
            }
        });
        TreeList.defaultOptions({
            options: {
                onInitialized(e) {
                    e.component.option('syncLookupFilterValues', false);
                },
                onToolbarPreparing(e: any) {
                    e.toolbarOptions.items.unshift(
                        {
                            location: 'after',
                            widget: 'dxButton',
                            options: {
                                icon: 'refresh',
                                onClick: () => {
                                    e.component.getDataSource().reload();
                                }
                            }
                        });
                },
            },
        });
    }

    translateApp() {
        const trMessages = require('../assets/i18n/devextreme/tr.json');
//      const language = localStorage.getItem('lang') ? localStorage.getItem('lang') : navigator.language.split(/-|_/)[0],
        const language = localStorage.getItem('lang') ? localStorage.getItem('lang') : getBrowserLang();
        loadMessages(enMessages);
        loadMessages(trMessages);
        loadMessages(deMessages);
        locale(language);
    }
}
