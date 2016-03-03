angular.module('kuzzle.indexes')

  .config(['$stateProvider', 'USER_ROLES', function ($stateProvider, USER_ROLES) {

    $stateProvider
      .state('indexes', {
        parent: 'logged',
        url: '/indexes',
        views: {
          'bodyView': { templateUrl: '/javascripts/indexes/index.template.html' }
        }
      })
      .state('indexes.browse', {
        url: '/browse',
        views: {
          'mainView': { templateUrl: '/javascripts/indexes/browse.template.html' }
        }
      })
      .state('indexes.create', {
        url: '/add',
        views: {
          'mainView': { templateUrl: '/javascripts/indexes/full.template.html' }
        }
      })
      .state('indexes.full', {
        url: '/:index',
        views: {
          'mainView': { templateUrl: '/javascripts/indexes/full.template.html' }
        }
      });
  }]);
