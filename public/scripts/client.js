var myApp = angular.module('myApp', []);

myApp.controller ('ImageController', function($http){
    var vm = this;

    vm.imgArr = []; 

    vm.getPhotos = function(){
        $http({
            method: 'GET',
            url: '/images'
        }).then(function(res){
            vm.imgArr = res.data
        })
    };

    vm.toggle = function (vm){
        vm.imgVisible = !vm.imgVisible;
    };

    vm.loveCounter = function (vm){
        $http({
            method: "PUT",
            url: '/images',
            data: vm,   
        }).then(function(res){
            vm.imgArr = res.data;
        })
    };

    vm.addComment = function(commentIn , id){
        var newComment = {
            id: id,
            comment: commentIn
        };
        $http({
            method: "POST",
            url: '/images',
            data: newComment,   
        }).then(function(res){
            vm.imgArr = res.data
            console.log('line 42',vm.imgArr);
        })
    }

    vm.getPhotos();
});

