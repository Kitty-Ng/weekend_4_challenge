var myApp = angular.module('myApp', []);

myApp.controller ('ImageController', function($http){
    var vm = this;

    vm.imgArr = []; 

    //get All Photos Array from server/ router
    vm.getPhotos = function(){
        $http({
            method: 'GET',
            url: '/images'
        }).then(function(res){
            vm.imgArr = res.data
        })
    };

    //toggle between image and description
    vm.toggle = function (vm){
        vm.imgVisible = !vm.imgVisible;
    };

    //update heartCount for image on server/ router
    vm.loveCounter = function (img){
        $http({
            method: "PUT",
            url: '/images',
            data: img,   
        }).then(function(res){
            vm.imgArr = res.data;
        });
    };

    //add a comment
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
        })
    }

    //initialize GET for all photos on load
    vm.getPhotos();
});

