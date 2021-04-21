"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createModule = void 0;
var VuezModule = /** @class */ (function () {
    function VuezModule(action, state, stateHandler) {
        this.stateProxy = new Proxy({}, {
            get: function (_, p) {
                stateHandler[p].get(state);
            },
            set: function (_, p, value) {
                stateHandler[p].set(state, value);
                return true;
            }
        });
        this.action = new Proxy(action, {
            get: function (target, p) {
                return function () {
                    var _a;
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    (_a = target)[p].apply(_a, __spreadArray([context], args));
                };
            },
            set: function (target, p, v, r) {
                return false;
            }
        });
        var context = {
            action: this.action,
            stateProxy: this.stateProxy,
        };
    }
    return VuezModule;
}());
function createModule(action, state, stateHandler) {
    return new VuezModule(action, state, stateHandler);
}
exports.createModule = createModule;
