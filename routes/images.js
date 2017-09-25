var router = require('express').Router();

var imgArr = [
    {id: 0, imgURL: '/images/crafting.jpg', imgdesc: 'Our first xmas tree in our first home 2016', heartCount: 0, imgVisible: true, descVisible: false, comments:[]},
    {id: 1, imgURL: '/images/engagement.jpg', imgdesc: 'Engagement in Oqunquit, ME 2015', heartCount: 0,imgVisible: true, descVisible: false, comments:[]},
    {id: 2, imgURL: '/images/family.jpg', imgdesc: 'Joining the Walders Family 2017', heartCount: 0,imgVisible: true, descVisible: false, comments:[]},
    {id: 3, imgURL: '/images/friendship.jpg', imgdesc: 'Mac friends from 2007 - now', heartCount: 0,imgVisible: true, descVisible: false, comments:[]},
    {id: 4, imgURL: '/images/graduation.jpg', imgdesc: 'Graduating from Mac 2011', heartCount: 0,imgVisible: true, descVisible: false, comments:[]},
    {id: 5, imgURL: '/images/love.jpg', imgdesc: "Zach's favorite photo of us so far 2017", heartCount: 0,imgVisible: true, descVisible: false, comments:[]},
    {id: 6, imgURL: '/images/travel.jpg', imgdesc: 'Rome, Italy 2008', heartCount: 0,imgVisible: true, descVisible: false, comments:[]},
    {id: 7, imgURL: '/images/wedding.jpg', imgdesc: 'Backyard wedding 2017', heartCount: 0,imgVisible: true, descVisible: false, comments:[]},
];

//get all images objects and send to client.js
router.get('/',function(req,res){
    res.send(imgArr);
});

//update the heartCount for this image
router.put('/',function(req,res){
    var dbId= req.body.id;
    imgArr[dbId].heartCount++;
    res.send(imgArr);
});

//add a comment to this image
router.post('/',function(req,res){
    var dbNc= req.body.comment;
    var dbId= req.body.id;
    imgArr[dbId].comments.push(dbNc);
    res.send(imgArr);
});

module.exports = router;