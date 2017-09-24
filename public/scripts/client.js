var myApp = angular.module('myApp', []);

myApp.controller ('ImageController', function(){
    var vm = this;

    vm.imgArr = [
        {imgURL: '/images/crafting.jpg', imgdesc: 'Our first xmas tree in our first home 2016', heartCount: 0, thumbUpCount: 0, imgVisible: true, descVisible: false},
        {imgURL: '/images/engagement.jpg', imgdesc: 'Engagement in Oqunquit, ME 2015', heartCount: 0, thumbUpCount: 0,imgVisible: true, descVisible: false},
        {imgURL: '/images/family.jpg', imgdesc: 'Joining the Walders Family 2017', heartCount: 0, thumbUpCount: 0,imgVisible: true, descVisible: false},
        {imgURL: '/images/friendship.jpg', imgdesc: 'Mac friends from 2007 - now', heartCount: 0, thumbUpCount: 0,imgVisible: true, descVisible: false},
        {imgURL: '/images/graduation.jpg', imgdesc: 'Graduating from Mac 2011', heartCount: 0, thumbUpCount: 0,imgVisible: true, descVisible: false},
        {imgURL: '/images/love.jpg', imgdesc: "Zach's favorite photo of us so far 2017", heartCount: 0, thumbUpCount: 0,imgVisible: true, descVisible: false},
        {imgURL: '/images/travel.jpg', imgdesc: 'Rome, Italy 2008', heartCount: 0, thumbUpCount: 0,imgVisible: true, descVisible: false},
        {imgURL: '/images/wedding.jpg', imgdesc: 'Backyard wedding 2017', heartCount: 0, thumbUpCount: 0,imgVisible: true, descVisible: false},
    ]


    vm.toggle = function (vm){
        vm.imgVisible = !vm.imgVisible;
    }

    vm.loveCounter = function (vm){
        vm.heartCount = vm.heartCount + 1
    }

    vm.thumbsUpCounter = function (vm){
        vm.thumbUpCount = vm.thumbUpCount + 1
    }

});
