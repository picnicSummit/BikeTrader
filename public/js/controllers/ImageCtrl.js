angular.module('ImageCtrl', ['angular-filepicker'])

  // controller for custom directive that allows 
  // filepicker widget to work with angular
  .directive('uploadImage', [function () {
    return {

      transclude: true,
      restrict: 'E',
      template: '<input type="filepicker">',
      replace: 'true',
      link: function(scope, element) {
        console.log('element', element[0]);
        filepicker.constructWidget(element[0]);
      }

    };

  }]);
