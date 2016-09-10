/**
 * Created by Nicholas Perrin on 9/10/2016.
 */
colorBlinder.directive('cbSignUpForm', function() {
    return {
        restrict: 'AEC',
        templateUrl: 'javascripts/angular/unverifiedHeader/signUpForm/signUpForm.html',
        controller: 'signUpFormController'
    };
});