define([
    './sidebar/sidebar.module',
    './commons/commons.module',
    './timesheets/timesheets.module',
    './my-projects/my-projects.module',
    './my-skills/my-skills.module',
    './apo-resourcer/apo-resourcer.module',
    './free-time/free-time.module',
    './team-leader/team-leader.module',
    './hr-manager/hr-manager.module',
    './bookkeeper/bookkeeper.module',
    './projects/projects.module'

], function () {
    
    let moduleName = 'apsello';
    
    var app = angular.module(moduleName,
        ['i18n.translateProvider',
            'ngRoute',
            // ...
            "sidebar",
            "timesheets",
            "freeTime",
            'myProjects',
            'mySkills',
            'projects',
            'apoResourcer',
            "teamLeader",
            "hrManager",
            'bookkeeper'
        ]);

    // ...

    angular.bootstrap(document.getElementsByTagName("html")[0], [moduleName]);

    return moduleName;
});
