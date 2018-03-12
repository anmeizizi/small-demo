window.onload =function(){
    var wrap = document.getElementById('wrap');
    var slide = document.getElementById('slide');
    var ul = document.querySelector('ul');
    var lis = ul.children;
    var arrow = document.getElementById('arrow');
    var arrLeft = document.getElementById('arrLeft');
    var arrRight = document.getElementById('arrRight');
    var config=[
        {
            width:400,top:20,left:50,opacity:0.2,zIndex:2
        },
        {
            width:600,top:70,left:0,opacity:0.8,zIndex:3
        },
        {
            width:800,top:100,left:200,opacity:1,zIndex:4
        },
        {
            width:600,top:70,left:600,opacity:0.8,zIndex:3
        },
        {
            width:400,top:20,left:750,opacity:0.2,zIndex:2
        }
    ];
    wrap.onmouseover=function(){
        animate(arrow,{'opacity':1});
    }
    wrap.onmouseout=function(){
        animate(arrow,{'opacity':0});
    }
    function assigh(){
        for (var i=0;i<lis.length;i++){
            animate(lis[i],config[i],function(){
                flag = true;
            });
        }
    }
    var flag = true;

    assigh();
    arrRight.onclick = function(){
        flag =false;
        config.push(config.shift());
        assigh();
    }
    arrLeft.onclick = function(){
        flag = false;
        config.unshift()(config.pop());
        assigh();
    }
}

function animate(obj,json,fn){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        var flag = true;
        for(var k in json){
            if(k=='opacity'){
                var leader = getStyle(obj,k)*100;
                var target = json[k]*100;
                var step = (target - leader)/10;
                step = step>0?Math.ceil(step):Math.floor(step);
                leader = leader+step;
                obj.style[k] = leader/100;
            }else if(k=='zIndex'){
                obj.style[k] = json[k];
            }else{
                var leader = parseInt(getStyle(obj,k))||0;
                var target = json[k];
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader + "px";
            }
            console.log("target: " + target + "leader: " + leader + "step: " + step);
            if (leader != target) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(obj.timer);
            if (fn) {
                fn();
            }
        }
    }, 15)
}

function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return window.getComputedStyle(obj, null)[attr];
    }
}
