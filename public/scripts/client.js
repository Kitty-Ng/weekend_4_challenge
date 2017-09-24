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

    vm.addComment = function(comment){
        var comment = {
            comment: comment
        };

        console.log('line 37',comment);

        // $http({
        //     method: "POST",
        //     url: '/images',
        //     data: comment,   
        // }).then(function(res){
        //     console.log('new comment')
        // })

    }

    vm.getPhotos();
});

