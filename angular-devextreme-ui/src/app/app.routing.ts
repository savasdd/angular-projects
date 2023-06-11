import {Route} from '@angular/router';
import {LayoutComponent} from 'app/layout/layout.component';
import {InitialDataResolver} from 'app/app.resolvers';

export const appRoutes: Route[] = [

    // Redirect empty path to '/example'
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: 'signed-in-redirect', pathMatch: 'full', redirectTo: 'home'},

    // Auth routes for guests
    {
        path: '',
        // canMatch: [NoAuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            // {path: 'confirmation-required', loadChildren: () => import('app/modules/auth/confirmation-required/confirmation-required.module').then(m => m.AuthConfirmationRequiredModule)},
            // {path: 'sign-in', loadChildren: () => import('app/modules/auth/sign-in/sign-in.module').then(m => m.AuthSignInModule)},
            // {path: 'department-list', loadChildren: () => import('app/modules/auth/department-list/department-list.module').then(m => m.DepartmentListModule)},
        ]
    },

    // Auth routes for authenticated users
    {
        path: '',
        // canMatch: [AuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            // {path: 'sign-out', loadChildren: () => import('app/modules/auth/sign-out/sign-out.module').then(m => m.AuthSignOutModule)},
            // {path: 'unlock-session', loadChildren: () => import('app/modules/auth/unlock-session/unlock-session.module').then(m => m.AuthUnlockSessionModule)},
        ]
    },
    // Admin routes
    {
        path: '',
        // canMatch: [AuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'hr'
        },
        resolve: {
            initialData: InitialDataResolver,
        },
        children: [
            {path: 'home', loadChildren: () => import('app/modules/admin/app/home/home.module').then(m => m.HomeModule)},
            {path: '', loadChildren: () => import('app/modules/admin/share/department/department.module').then(m => m.DepartmentModule)},
            // {path: '', loadChildren: () => import('app/modules/admin/share/auth/auth.module').then(m => m.AuthModule)},
            // {path: '', loadChildren: () => import('app/modules/admin/share/announcement/announcement.module').then(m => m.AnnouncementModule)},
            // {path: '', loadChildren: () => import('app/modules/admin/share/document/document.module').then(m => m.DocumentModule)},
            // {path: '', loadChildren: () => import('app/modules/admin/share/general-settings/general-settings.module').then(m => m.GeneralSettingsModule)},
            {path: '', loadChildren: () => import('app/modules/admin/share/profile/profile.module').then(m => m.ProfileModule)},
            // {path: '', loadChildren: () => import('app/modules/admin/share/help-desk/help-desk.module').then(m => m.HelpDeskModule)},
            // {path: '', loadChildren: () => import('app/modules/admin/share/data/report/report.module').then(m => m.ReportModule)},
            {path: '', loadChildren: () => import('app/modules/admin/share/data/dashboard/dashboard.module').then(m => m.DashboardModule)},
            // {path: '', loadChildren: () => import('app/modules/admin/share/languages/languages.module').then(m => m.LanguagesModule)},
            {path: '',  loadChildren: () => import('app/modules/admin/app/worker/worker.module').then(m => m.WorkerModule)},
        ]
    }
];
