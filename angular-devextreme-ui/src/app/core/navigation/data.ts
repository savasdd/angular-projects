/* eslint-disable */
import {FuseNavigationItem} from '@fuse/components/navigation';

export const compactNavigation: FuseNavigationItem[] = [
    {
        id: 'dashboard',
        title: 'dashboard',
        tooltip: 'dashboard',
        type: 'basic',
        icon: 'dashboard',
        link: '/dashboard/worker',
        auth: ['ROLE_dashboardSave', ''],
    },
    {
        id: 'worker-list',
        title: 'workers',
        tooltip: 'workers',
        type: 'basic',
        icon: 'supervisor_account',
        link: '/worker/list',
        auth: ['ROLE_workerSave', 'ROLE_workerFindAll'],
    },
    {
        id: 'profile-list',
        title: 'profiles',
        tooltip: 'profiles',
        type: 'basic',
        icon: 'inventory',
        link: '/profile/list',
        auth: ['ROLE_profileSave'],
    },
    {
        id: 'activity-list',
        title: 'activity',
        tooltip: 'activity',
        type: 'basic',
        icon: 'local_activity',
        link: '/workeractivity/list',
        auth: ['ROLE_workerActivitySave'],
    },
    {
        id: 'ticket',
        title: 'helpdesk',
        tooltip: 'helpdesk',
        type: 'basic',
        icon: 'help',
        link: '/help-desk/ticket',
        auth: ['ROLE_ticketsSave']
    },
    {
        id: 'announcement',
        title: 'announcement',
        tooltip: 'announcement',
        type: 'basic',
        icon: 'campaign',
        link: '/announcement/list',
        auth: ['ROLE_announcementSave']
    },
    {
        id: 'document',
        title: 'document',
        tooltip: 'document',
        type: 'basic',
        icon: 'filter_none',
        link: '/document/list',
        auth: ['ROLE_documentSave']
    },
    {
        id: 'divider-1',
        type: 'divider'
    },
    {
        id: 'auth',
        title: 'auth',
        tooltip: 'auth',
        type: 'aside',
        icon: 'security',
        auth: ['ROLE_userSave', 'ROLE_roleSave'],
        children: [
            {
                id: 'user-list',
                title: 'user',
                type: 'basic',
                icon: 'heroicons_outline:clipboard-list',
                link: '/auth/user',
                auth: ['ROLE_userSave'],
            },
            {
                id: 'role-list',
                title: 'role',
                type: 'basic',
                icon: 'heroicons_outline:clipboard-list',
                link: '/auth/role',
                auth: ['ROLE_roleSave'],
            },
        ]
    },

    {
        id: 'content-management',
        title: 'content.management',
        tooltip: 'content.management',
        type: 'aside',
        icon: 'mat_outline:manage_search',
        auth: ['ROLE_locationSave'],
        // badge: {
        //     title  : '27',
        //     classes: 'px-2 bg-pink-600 text-white rounded-full'
        // },
        children: [
            {
                id: 'person',
                title: 'person',
                tooltip: 'person',
                type: 'collapsable',
                icon: 'heroicons_outline:user',
                auth: ['ROLE_personSave'],
                children: [
                    {
                        id: 'person-list',
                        title: 'real.person',
                        type: 'basic',
                        icon: 'heroicons_outline:clipboard-list',
                        link: '/person/list',
                        auth: ['ROLE_personSave'],
                    },
                    {
                        id: 'legal-entity-list',
                        title: 'legal.entity',
                        type: 'basic',
                        icon: 'heroicons_outline:clipboard-list',
                        link: '/legal-entity/list',
                        auth: ['ROLE_personSave'],
                    },
                ]
            },
            {
                id: 'location',
                title: 'location',
                tooltip: 'location',
                type: 'collapsable',
                icon: 'heroicons_outline:location-marker',
                auth: ['ROLE_locationSave', 'ROLE_locationTypeSave'],
                children: [
                    {
                        id: 'location-list',
                        title: 'location',
                        type: 'basic',
                        icon: 'heroicons_outline:clipboard-list',
                        link: '/location/list',
                        auth: ['ROLE_locationSave'],
                    },
                    {
                        id: 'location-type',
                        title: 'location.type',
                        type: 'basic',
                        icon: 'heroicons_outline:clipboard-list',
                        link: '/location/type',
                        auth: ['ROLE_locationTypeSave'],
                    }
                ]
            },
            {
                id: 'department',
                title: 'department',
                tooltip: 'department',
                type: 'collapsable',
                icon: 'heroicons_outline:office-building',
                auth: ['ROLE_departmentSave', 'ROLE_departmentTypeSave'],
                children: [
                    {
                        id: 'department-list',
                        title: 'department',
                        type: 'basic',
                        icon: 'heroicons_outline:clipboard-list',
                        link: '/department/list',
                        auth: ['ROLE_departmentSave'],
                    },
                    {
                        id: 'department-type',
                        title: 'department.type',
                        type: 'basic',
                        icon: 'heroicons_outline:clipboard-list',
                        link: '/department/type',
                        auth: ['ROLE_departmentTypeSave'],
                    }
                ]
            },
            {
                id: 'help-desk',
                title: 'helpdesk.management',
                tooltip: 'helpdesk.management',
                type: 'collapsable',
                icon: 'help',
                auth: ['ROLE_ticketsSave'],
                children: [
                    {
                        id: 'categories',
                        title: 'categories',
                        type: 'basic',
                        icon: 'heroicons_outline:clipboard-list',
                        link: '/help-desk/categories',
                        auth: ['ROLE_categoriesSave'],
                    },
                    {
                        id: 'priorities',
                        title: 'priorities',
                        type: 'basic',
                        icon: 'heroicons_outline:clipboard-list',
                        link: '/help-desk/priorities',
                        auth: ['ROLE_prioritiesSave'],
                    },
                    {
                        id: 'statuses',
                        title: 'statuses',
                        type: 'basic',
                        icon: 'heroicons_outline:clipboard-list',
                        link: '/help-desk/statuses',
                        auth: ['ROLE_statusesSave'],
                    },
                    {
                        id: 'groups',
                        title: 'groups',
                        type: 'basic',
                        icon: 'heroicons_outline:clipboard-list',
                        link: '/help-desk/groups',
                        auth: ['ROLE_groupsSave'],
                    }
                ]
            },
            {
                id: 'language',
                title: 'language',
                tooltip: 'language',
                type: 'collapsable',
                icon: 'language',
                auth: ['ROLE_languagesSave', 'ROLE_languageMessagesFindAll'],
                children: [
                    {
                        id: 'language-list',
                        title: 'language',
                        type: 'basic',
                        icon: 'heroicons_outline:clipboard-list',
                        link: '/language/list',
                        auth: ['ROLE_languagesSave'],
                    },
                    {
                        id: 'language-message-list',
                        title: 'language.messages',
                        type: 'basic',
                        icon: 'heroicons_outline:clipboard-list',
                        link: '/language/message',
                        auth: ['ROLE_languageMessagesFindAll'],
                    },

                ]
            },
            {
                id: 'parameter',
                title: 'parameters',
                tooltip: 'parameters',
                type: 'collapsable',
                icon: 'list',
                auth: ['ROLE_deviceSave'],
                children: [
                    {
                        id: 'parameter-list',
                        title: 'parameter.list',
                        type: 'basic',
                        icon: 'heroicons_outline:clipboard-list',
                        link: '/parameter/list',
                        auth: ['ROLE_parameterSave'],
                    },
                    {
                        id: 'break-list',
                        title: 'break.list',
                        type: 'basic',
                        icon: 'heroicons_outline:clipboard-list',
                        link: '/break/list',
                        auth: ['ROLE_breakTypeSave'],
                    },
                    {
                        id: 'device-list',
                        title: 'device.list',
                        type: 'basic',
                        icon: 'heroicons_outline:clipboard-list',
                        link: '/device/list',
                        auth: ['ROLE_deviceSave'],
                    },
                ]
            },
        ]
    },
    {
        id: 'data',
        title: 'data',
        tooltip: 'data',
        type: 'aside',
        icon: 'heroicons_outline:database',
        auth: ['ROLE_reportSave'],
        children: [
            {
                id: 'report',
                title: 'report',
                tooltip: 'report',
                type: 'collapsable',
                icon: 'assessment',
                auth: ['ROLE_reportSave'],
                children: [
                    {
                        id: 'report-manager',
                        title: 'report.manager',
                        type: 'basic',
                        icon: 'heroicons_outline:clipboard-list',
                        link: '/report/manager',
                        auth: ['ROLE_reportSave'],
                    },
                    {
                        id: 'report-viewer',
                        title: 'report.viewer', // report.viewer
                        type: 'basic',
                        icon: 'heroicons_outline:clipboard-list',
                        link: '/report/viewer',
                        auth: ['ROLE_reportSave'],
                    },
                    {
                        id: 'report-designer',
                        title: 'report.designer',
                        type: 'basic',
                        icon: 'heroicons_outline:clipboard-list',
                        link: '/report/designer',
                        auth: ['ROLE_reportSave'],
                    },
                ]
            },
            {
                id: 'dashboard',
                title: 'dashboard',
                tooltip: 'dashboard',
                type: 'collapsable',
                icon: 'dashboard',
                auth: ['ROLE_reportSave'],
                children: [
                    {
                        id: 'dashboard-manager',
                        title: 'dashboard.manager',
                        type: 'basic',
                        icon: 'heroicons_outline:clipboard-list',
                        link: '/dashboard/manager',
                        auth: ['ROLE_dashboardSave'],
                    },
                    {
                        id: 'dashboard-designer',
                        title: 'dashboard.designer',
                        type: 'basic',
                        icon: 'heroicons_outline:clipboard-list',
                        link: '/dashboard/designer',
                        auth: ['ROLE_dashboardSave'],
                    },

                    {
                        id: 'dashboard-viewer',
                        title: 'dashboard.viewer',
                        type: 'basic',
                        icon: 'heroicons_outline:clipboard-list',
                        link: '/dashboard/viewer',
                        auth: ['ROLE_dashboardSave'],
                    },

                ]
            },
        ]
    },
    {
        id: 'general-settings',
        title: 'general.settings',
        tooltip: 'general.settings',
        type: 'basic',
        icon: 'settings',
        link: '/settings/general',
        auth: ['ROLE_generalSettingsSave']
    }
];
