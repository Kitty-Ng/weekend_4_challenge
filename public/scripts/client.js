var myApp = angular.module('myApp', []);

myApp.controller ('ImageController', function(){
    var vm = this;

    vm.imgArr = [
        {imgURL: '/images/crafting.jpg', imgdesc: 'Our first xmas tree in our first home 2016', count: 0, imgVisible: true, descVisible: false},
        {imgURL: '/images/engagement.jpg', imgdesc: 'Engagement in Oqunquit, ME 2015', count: 0, imgVisible: true, descVisible: false},
        {imgURL: '/images/family.jpg', imgdesc: 'Joining the Walders Family 2017', count: 0, imgVisible: true, descVisible: false},
        {imgURL: '/images/friendship.jpg', imgdesc: 'Mac friends from 2007 - now', count: 0, imgVisible: true, descVisible: false},
        {imgURL: '/images/graduation.jpg', imgdesc: 'Graduating from Mac 2011', count: 0, imgVisible: true, descVisible: false},
        {imgURL: '/images/love.jpg', imgdesc: "Zach's favorite photo of us so far 2017", count: 0, imgVisible: true, descVisible: false},
        {imgURL: '/images/travel.jpg', imgdesc: 'Rome, Italy 2008', count: 0, imgVisible: true, descVisible: false},
        {imgURL: '/images/wedding.jpg', imgdesc: 'Backyard wedding 2017', count: 0, imgVisible: true, descVisible: false},
    ]


    vm.toggle = function (vm){
        vm.imgVisible = !vm.imgVisible;
    }

    vm.loveCounter = function (vm){
        vm.count = vm.count + 1
    }

});
