var imgurl = "img/rabbit-big.png";
var positions = [
  "0 -854",
  "-174 -852",
  "-349 -852",
  "-524 -852",
  "-698 -852",
  "-873 -848"
];
var ele = document.getElementById("rabbit");

animation(ele, positions, imgurl);

function animation(ele, positions, imgurl) {

  ele.style.backgroundImage = "url(" + imgurl + ")";
  ele.style.backgroundRepeat = "no-repeat";

  var index = 0;

  function run() {
    var position = positions[index].split(" ");
    console.log(ele.style)
    console.log('pos',position[0] + "px" + position[1] + "px")
    ele.style.backgroundPosition = position[0] + "px " + position[1] + "px";
    index++;
    if(index>=positions.length){
        index=0;
    }
    setTimeout(run, 80);
  }
  run();
}

