'use stick';

var loadImage = require('./imageloader');

var STATE_INITAL=0;
var STATE_START=1;
var STATE_STOP=2;

var TSAK_SYNC = 0;
var TASK_ASYNC = 1;

function Animation(){
    this.taskQueue = [];
    this.index = 0;
    this.state = STATE_INITAL;
}

Animation.prototype.loadImage = function(imglist){
    var taskFn = function(next){
        loadImage(imglist.slice(),next);
    };
    var type = TSAK_SYNC;

    this._add(taskFn,type);
};

Animation.prototype.changePosition = function(ele,positions,imageUrl){

};

Animation.prototype.changeSrc =function(ele,imglist){

};

Animation.prototype.enterFrame = function (taskFn){

};

Animation.prototype.then = function(callback){

};

Animation.prototype.start = function (interval){

};

Animation.prototype.repeat =function(times){

};

Animation.prototype.repeatForever=function(){

};

Animation.prototype.wait=function(time){

};

Animation.prototype.pause=function(){

};

Animation.prototype.restart = function(){

};

Animation.prototype.dispose =function(){

};