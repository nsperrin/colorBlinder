/**
 * Created by Nicholas Perrin on 9/9/2016.
 */
changeInterpolation = function($interpolateProvider) {
    $interpolateProvider.startSymbol('//');
    $interpolateProvider.endSymbol('//');
};