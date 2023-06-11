import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {forkJoin, Observable} from 'rxjs';
import {NavigationService} from 'app/core/navigation/navigation.service';
import {NotificationsService} from 'app/layout/common/notifications/notifications.service';
import {ShortcutsService} from 'app/layout/common/shortcuts/shortcuts.service';

@Injectable({
    providedIn: 'root'
})
export class InitialDataResolver implements Resolve<any> {
    /**
     * Constructor
     */
    constructor(
        private _navigationService: NavigationService,
        private _notificationsService: NotificationsService,
        private _shortcutsService: ShortcutsService
    ) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return forkJoin([
            this._notificationsService.getAll(),
            this._shortcutsService.getAll()
        ]);
    }
}
