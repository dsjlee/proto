/// <reference path="../scripts/typings/signalr/signalr.d.ts" />
/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
"use strict";
angular.module('app', [])
    .controller('appController', AppSpace.AppController)
    .controller('panelController', AppSpace.PanelController)
    .service('hubProxyService', AppSpace.HubProxyService);
//# sourceMappingURL=app.js.map