(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);


UserService.$inject = ['$http', 'ApiPath'];
function UserService($http, ApiPath) {
  var service = this;
  service.user = {};

  service.saveUser = function (user) {
    service.user = angular.copy(user);
  };

  service.getUser = function () {
    return service.user;
  };

}



})();
