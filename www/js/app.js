// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('tikker', ['ionic', 'tikker.controllers'])

        .run(function ($ionicPlatform) {
            $ionicPlatform.ready(function () {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                if (window.cordova && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                    cordova.plugins.Keyboard.disableScroll(true);

                }
                if (window.StatusBar) {
                    // org.apache.cordova.statusbar required
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
            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/app/home');
        });
