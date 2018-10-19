document.body.style.backgroundColor = "white";
var ww = window.innerWidth, wh = window.innerHeight, g = [ww/2,wh/2], size = wh;
var dots = [[g[0],g[1]-size/4],[g[0]+size/2/Math.sqrt(3), g[1]+size/4],[g[0]-size/2/Math.sqrt(3), g[1]+size/4],[g[0],g[1]-size/4]];
var tPath = "M"+dots[0][0]+","+dots[0][1]+"L"+dots[1][0]+","+dots[1][1]+"L"+dots[2][0]+","+dots[2][1]+"Z";
var triangle, triangle2, triangle3 = [], triangle4 = [], triangle4_2 = [];

var paper;
var box;
function start(){
  paper = Raphael(window.innerWidth/3000,-10, "100%", "100%");
  triangle = paper.path(tPath);
  box = triangle.getBBox();

  triangle2 = paper.path(tPath);
  triangle2.animate({transform:"R60,"+g[0]+","+(box.y+box.height/1.5)},Math.random()*1000+1000, "bounce", third);
}
start();
var box2 = [];
var count = 0, count2 = 0;
function third(){
  for(var i=0;i<6;i++){
    triangle3[i] = paper.path(tPath).transform("s"+1/3+"t0,-"+box.height+"R"+60*i+","+box.cx+","+(box.y+box.height/1.5));
    sbox = triangle3[i].getBBox();
    if(i%2==0) triangle3[i].animate({
      transform : "...R60,"+sbox.cx+","+(sbox.y+sbox.height/1.5)},600, "bounce", fourth);
    else triangle3[i].animate({transform : "...R60,"+sbox.cx+","+(sbox.y+sbox.height/3)},800, "bounce",fourth2);
  }
}
function fourth(j){
  for(var i=0;i<6;i++){
    box2[this.id] = this.getBBox();
    triangle4[i] = paper.path(tPath).transform("s"+1/9+"t0,-"+box.height*4+"R"+120*count+","+g[0]+","+(box.y+box.height/1.5)+"R"+60*i+","+box2[this.id].cx+","+(box2[this.id].y+box2[this.id].height/3));
    sbox = triangle4[i].getBBox();
    if(i%2==0) triangle4[i].animate({transform : "...R60,"+sbox.cx+","+(sbox.y+sbox.height/1.5)},Math.random()*1200+700, "bounce");
    else triangle4[i].animate({transform : "...R60,"+sbox.cx+","+(sbox.y+sbox.height/3)},Math.random()*1200+700, "bounce");
  }
  count++;
}
function fourth2(j){
  for(var i=0;i<6;i++){
    box2[j] = this.getBBox();
    triangle4_2[i] = paper.path(tPath).transform("s"+1/9+"t0,-"+box.height*4+"R"+120*count2+60+","+g[0]+","+(box.y+box.height/1.5)+"R"+60*i+","+box2[j].cx+","+(box2[j].y+box2[j].height/1.5));
    sbox = triangle4_2[i].getBBox();
    if(i%2==0) triangle4_2[i].animate({transform : "...R60,"+sbox.cx+","+(sbox.y+sbox.height/3)},Math.random()*1200+700, "bounce");
    else triangle4_2[i].animate({transform : "...R60,"+sbox.cx+","+(sbox.y+sbox.height/1.5)},Math.random()*1200+700, "bounce");
  }
  count2++;
}
// var loop = setTimeout(reset, 5000);
function reset(){
	paper.forEach(function (el) {
	    el.stop();
	});
	paper.remove();
	count = 0, count2 = 0;
	start();
	// loop = clearTimeout(loop);
	// loop = setTimeout(reset, 5000);
}
