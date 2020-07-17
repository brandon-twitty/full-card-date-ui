"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var core_2 = require("@aws-amplify/core");
var AuthService = /** @class */ (function () {
    function AuthService() {
        var _this = this;
        this._authState = new rxjs_1.Subject();
        this.authState = this._authState.asObservable();
        core_2.Hub.listen('auth', function (data) {
            var channel = data.channel, payload = data.payload;
            if (channel === 'auth') {
                _this._authState.next(payload.event);
            }
        });
    }
    AuthService.SIGN_IN = 'signIn';
    AuthService.SIGN_OUT = 'signOut';
    AuthService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map