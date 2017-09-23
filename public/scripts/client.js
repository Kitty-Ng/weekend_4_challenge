var myApp = angular.module('myApp', []);

myApp.controller ('ImageController', function($http){
    var vm = this;

    vm.imgArr = [
        {imgURL: '/images/crafting.jpg', count: 0},
        {imgURL: '/images/engagement.jpg', count: 0},
        {imgURL: '/images/family.jpg', count: 0},
        {imgURL: '/images/friendship.jpg', count: 0},
        {imgURL: '/images/graduation.jpg', count: 0},
        {imgURL: '/images/love.jpg', count: 0},
        {imgURL: '/images/travel.jpg', count: 0},
        {imgURL: '/images/wedding.jpg', count: 0},
    ]

    vm.toggle = function (){
        console.log('testing image toggle');

    }

});