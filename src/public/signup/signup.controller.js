(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['UserService', 'MenuService'];
function SignupController(UserService, MenuService) {
    var $ctrl = this;
    $ctrl.user = undefined;
    $ctrl.response = '';
    $ctrl.submit = function(){

    MenuService.getMenuItem($ctrl.user.favDish).then(function(res){
      $ctrl.user.item = res;
      UserService.saveUser($ctrl.user);
      $ctrl.response = 'Your information has been saved';
    }).catch(function(err){
      $ctrl.response = 'No such menu number exists';
    });

  };
}


})();
