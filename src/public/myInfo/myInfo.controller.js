(function () {
"use strict";

angular.module('public')
.controller('MyinfoController', MyinfoController);

MyinfoController.$inject = ['user', 'ApiPath'];
function MyinfoController(user, ApiPath) {
  var $ctrl = this;
  $ctrl.notSignedUp = '';
  $ctrl.basePath = ApiPath;
  if(user.item){
    $ctrl.user = user;
    $ctrl.menuItem = user.item;
  } else {
    $ctrl.notSignedUp = 'Not Signed Up Yet. Sign up Now!';
  }
}


})();
