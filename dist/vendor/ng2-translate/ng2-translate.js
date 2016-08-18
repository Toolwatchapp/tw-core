"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var translate_pipe_1 = require("./src/translate.pipe");
var translate_service_1 = require("./src/translate.service");
__export(require("./src/translate.pipe"));
__export(require("./src/translate.service"));
__export(require("./src/translate.parser"));
/**
 * Deprecated, import the new TranslateModule in your NgModule instead
 * @deprecated
 */
exports.TRANSLATE_PROVIDERS = [
    {
        provide: translate_service_1.TranslateLoader,
        useFactory: function (http) { return new translate_service_1.TranslateStaticLoader(http); },
        deps: [http_1.Http]
    },
    translate_service_1.TranslateService
];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    pipes: [translate_pipe_1.TranslatePipe],
    providers: [translate_service_1.TranslateService]
};
/**
 * This module doesn't provide a Translate Loader, you will have to provide one for yourself
 */
var TranslateModule = (function () {
    function TranslateModule() {
    }
    TranslateModule.forRoot = function (providedLoader) {
        if (providedLoader === void 0) { providedLoader = {
            provide: translate_service_1.TranslateLoader,
            useFactory: function (http) { return new translate_service_1.TranslateStaticLoader(http); },
            deps: [http_1.Http]
        }; }
        return {
            ngModule: TranslateModule,
            providers: [providedLoader, translate_service_1.TranslateService]
        };
    };
    TranslateModule = __decorate([
        core_1.NgModule({
            imports: [],
            declarations: [
                translate_pipe_1.TranslatePipe
            ],
            exports: [
                translate_pipe_1.TranslatePipe
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], TranslateModule);
    return TranslateModule;
}());
exports.TranslateModule = TranslateModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLXRyYW5zbGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nMi10cmFuc2xhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHFCQUE0QyxlQUFlLENBQUMsQ0FBQTtBQUM1RCxxQkFBK0IsZUFBZSxDQUFDLENBQUE7QUFDL0MsK0JBQTRCLHNCQUFzQixDQUFDLENBQUE7QUFDbkQsa0NBQXVFLHlCQUF5QixDQUFDLENBQUE7QUFFakcsaUJBQWMsc0JBQXNCLENBQUMsRUFBQTtBQUNyQyxpQkFBYyx5QkFBeUIsQ0FBQyxFQUFBO0FBQ3hDLGlCQUFjLHdCQUF3QixDQUFDLEVBQUE7QUFFdkM7OztHQUdHO0FBQ1UsMkJBQW1CLEdBQVE7SUFDcEM7UUFDSSxPQUFPLEVBQUUsbUNBQWU7UUFDeEIsVUFBVSxFQUFFLFVBQUMsSUFBVSxJQUFLLE9BQUEsSUFBSSx5Q0FBcUIsQ0FBQyxJQUFJLENBQUMsRUFBL0IsQ0FBK0I7UUFDM0QsSUFBSSxFQUFFLENBQUMsV0FBSSxDQUFDO0tBQ2Y7SUFDRCxvQ0FBZ0I7Q0FDbkIsQ0FBQztBQUdGO2tCQUFlO0lBQ1gsS0FBSyxFQUFFLENBQUMsOEJBQWEsQ0FBQztJQUN0QixTQUFTLEVBQUUsQ0FBQyxvQ0FBZ0IsQ0FBQztDQUNoQyxDQUFDO0FBRUY7O0dBRUc7QUFVSDtJQUFBO0lBV0EsQ0FBQztJQVZVLHVCQUFPLEdBQWQsVUFBZSxjQUlkO1FBSmMsOEJBSWQsR0FKYztZQUNYLE9BQU8sRUFBRSxtQ0FBZTtZQUN4QixVQUFVLEVBQUUsVUFBQyxJQUFVLElBQUssT0FBQSxJQUFJLHlDQUFxQixDQUFDLElBQUksQ0FBQyxFQUEvQixDQUErQjtZQUMzRCxJQUFJLEVBQUUsQ0FBQyxXQUFJLENBQUM7U0FDZjtRQUNHLE1BQU0sQ0FBQztZQUNILFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFNBQVMsRUFBRSxDQUFDLGNBQWMsRUFBRSxvQ0FBZ0IsQ0FBQztTQUNoRCxDQUFDO0lBQ04sQ0FBQztJQW5CTDtRQUFDLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxFQUFFO1lBQ1gsWUFBWSxFQUFFO2dCQUNWLDhCQUFhO2FBQ2hCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLDhCQUFhO2FBQ2hCO1NBQ0osQ0FBQzs7dUJBQUE7SUFZRixzQkFBQztBQUFELENBQUMsQUFYRCxJQVdDO0FBWFksdUJBQWUsa0JBVzNCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtIdHRwLCBIdHRwTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHtUcmFuc2xhdGVQaXBlfSBmcm9tIFwiLi9zcmMvdHJhbnNsYXRlLnBpcGVcIjtcbmltcG9ydCB7VHJhbnNsYXRlU2VydmljZSwgVHJhbnNsYXRlTG9hZGVyLCBUcmFuc2xhdGVTdGF0aWNMb2FkZXJ9IGZyb20gXCIuL3NyYy90cmFuc2xhdGUuc2VydmljZVwiO1xuXG5leHBvcnQgKiBmcm9tIFwiLi9zcmMvdHJhbnNsYXRlLnBpcGVcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3NyYy90cmFuc2xhdGUuc2VydmljZVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vc3JjL3RyYW5zbGF0ZS5wYXJzZXJcIjtcblxuLyoqXG4gKiBEZXByZWNhdGVkLCBpbXBvcnQgdGhlIG5ldyBUcmFuc2xhdGVNb2R1bGUgaW4geW91ciBOZ01vZHVsZSBpbnN0ZWFkXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY29uc3QgVFJBTlNMQVRFX1BST1ZJREVSUzogYW55ID0gW1xuICAgIHtcbiAgICAgICAgcHJvdmlkZTogVHJhbnNsYXRlTG9hZGVyLFxuICAgICAgICB1c2VGYWN0b3J5OiAoaHR0cDogSHR0cCkgPT4gbmV3IFRyYW5zbGF0ZVN0YXRpY0xvYWRlcihodHRwKSxcbiAgICAgICAgZGVwczogW0h0dHBdXG4gICAgfSxcbiAgICBUcmFuc2xhdGVTZXJ2aWNlXG5dO1xuXG4vLyBmb3IgYW5ndWxhci1jbGlcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwaXBlczogW1RyYW5zbGF0ZVBpcGVdLFxuICAgIHByb3ZpZGVyczogW1RyYW5zbGF0ZVNlcnZpY2VdXG59O1xuXG4vKipcbiAqIFRoaXMgbW9kdWxlIGRvZXNuJ3QgcHJvdmlkZSBhIFRyYW5zbGF0ZSBMb2FkZXIsIHlvdSB3aWxsIGhhdmUgdG8gcHJvdmlkZSBvbmUgZm9yIHlvdXJzZWxmXG4gKi9cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW10sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFRyYW5zbGF0ZVBpcGVcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgVHJhbnNsYXRlUGlwZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRlTW9kdWxlIHtcbiAgICBzdGF0aWMgZm9yUm9vdChwcm92aWRlZExvYWRlcjogYW55ID0ge1xuICAgICAgICBwcm92aWRlOiBUcmFuc2xhdGVMb2FkZXIsXG4gICAgICAgIHVzZUZhY3Rvcnk6IChodHRwOiBIdHRwKSA9PiBuZXcgVHJhbnNsYXRlU3RhdGljTG9hZGVyKGh0dHApLFxuICAgICAgICBkZXBzOiBbSHR0cF1cbiAgICB9KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZ01vZHVsZTogVHJhbnNsYXRlTW9kdWxlLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbcHJvdmlkZWRMb2FkZXIsIFRyYW5zbGF0ZVNlcnZpY2VdXG4gICAgICAgIH07XG4gICAgfVxufSJdfQ==