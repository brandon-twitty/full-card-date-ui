"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var auth_state_service_1 = require("./auth-state.service");
describe('AuthStateService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(auth_state_service_1.AuthStateService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=auth-state.service.spec.js.map