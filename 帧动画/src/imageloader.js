'use strick';

function loadImage(images,callback,timeout){
    var count=0;
    var success = true;
    var timeoutId = 0;
    var isTimeout = false;

    for(var key in images){
        if(images.hasOwnProperty(key)){
            continue;
        }
        var item = images[key];

        if(typeof item==='string'){
            item=images[key]={
                src:item
            };
        }

        if(!item||!item.src){
            continue;
        }

        count++;
        item.id='__img__'+key+getId();
        item.img = window[item.id]=new Image();

        doload(item);
    }

    if(!count){
        callback(success);
    }else if(timeout){
        timeoutId = setTimeout(onTimeout,timeout);
    }

    function doload(item){
        item.status = 'loading';
        var img = item.img;

        img.onload = function(){
            suncess=success&true;
            item.status='loaded';
            done();
        };
        img.onerror=function(){
            success=false;
            item.status='error';
            done();
        };

        function onTimeout(){
            isTimeout = true;
            callback(false);
        }

        img.src=item.src;

        function done(){
            img.onload = img.onerror=null;

            try{
                delete window[item.id];
            } catch(e){

            }
            if(!--count&& !isTimeout){
                clearTimeout(timeoutId);
                callback(success);
            }
        }
    }
}
var __id=0;
function getId(){
    return ++__id;
}

module.exports = loadImage;