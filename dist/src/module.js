var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloComponent } from './components';
var ThemerollerModule = /** @class */ (function () {
    function ThemerollerModule() {
    }
    ThemerollerModule_1 = ThemerollerModule;
    ThemerollerModule.forRoot = function () {
        return {
            ngModule: ThemerollerModule_1,
            providers: []
        };
    };
    ThemerollerModule.forChild = function () {
        return {
            ngModule: ThemerollerModule_1,
            providers: []
        };
    };
    var ThemerollerModule_1;
    ThemerollerModule = ThemerollerModule_1 = __decorate([
        NgModule({
            declarations: [
                HelloComponent
            ],
            imports: [
                CommonModule
            ],
            exports: [],
            providers: [],
        }),
        Injectable()
    ], ThemerollerModule);
    return ThemerollerModule;
}());
export { ThemerollerModule };
