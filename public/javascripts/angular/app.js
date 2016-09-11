//noinspection JSCheckFunctionSignatures
var colorBlinder = angular.module('colorBlinder', ['ui.router']);

colorBlinder.config(uiRouting);
colorBlinder.config(changeInterpolation);
colorBlinder.config(enableHTML5);