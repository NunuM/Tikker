angular.module('tikker', ['ionic', 'tikker.controllers'])

        .run(function ($ionicPlatform) {
            $ionicPlatform.ready(function () {
                
                if (window.cordova && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                    cordova.plugins.Keyboard.disableScroll(true);

                }
                if (window.StatusBar) {
                    StatusBar.styleDefault();
                }
            });
        })

        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider

                    .state('app', {
                        url: '/app',
                        abstract: true,
                        templateUrl: 'templates/menu.html',
                        controller: 'AppCtrl'
                    })

                    .state('app.home', {
                        url: '/home',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/home.html',
                                controller: 'homeCtrl'
                            }
                        }
                    })
                    .state('app.gamming', {
                        url: '/gamming',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/gamming.html',
                                controller: 'gammingCtrl'
                            }
                        }
                    })
                    .state('app.funny', {
                        url: '/funny',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/funny.html',
                                controller: 'funnyCtrl'
                            }
                        }
                    })
                    .state('app.videos', {
                        url: '/videos',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/videos.html',
                                controller: 'videosCtrl'
                            }
                        }
                    })

                    .state('app.pic', {
                        url: '/home/:picId',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/pic.html',
                                controller: 'picCtrl'
                            }
                        }
                    })

                    .state('app.single', {
                        url: '/videos/:videoId',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/video.html',
                                controller: 'videoCtrl'
                            }
                        }
                    });
            $urlRouterProvider.otherwise('/app/home');
        });
