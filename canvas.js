var canvas= document.querySelector('canvas');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var c= canvas.getContext('2d');

const maxRadius=30;

var mouse={
    x:undefined,
    y:undefined
}
var colorArray=[
    '#3F1140',
    '#551073','F2AC29','#731007','#D92211'
];

window.addEventListener('mousemove',function(event){
    mouse.x=event.x;
    mouse.y=event.y;
 
})

window.addEventListener('resize',function()
{
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
    init();
})

function Circle(x,y,dy,dx,r){
    this.x=x;
    this.y=y;
    this.dx=dx;
    this.dy=dy;
    this.r=r;
    this.color=colorArray[Math.floor(Math.random()*colorArray.length)];
    this.minRadius=this.r;

    this.draw=function(){
    c.beginPath();
    c.arc(this.x,this.y,this.r, 0, Math.PI*2, false);
    // c.strokeStyle='black';
    // c.stroke();
    c.fillStyle=this.color;
    c.fill();
    }
    this.move=function(){
        if((this.x+this.r>innerWidth)||(this.x-this.r<0))
        {
            this.dx=-(this.dx);
        }
        else if((this.y+this.r>innerHeight)||(this.y-this.r<0))
        {
            this.dy=(-this.dy);
        }
        this.x+=this.dx;
        this.y+=this.dy;


        // interactivity
       if((mouse.x-this.x<50 && mouse.x - this.x>-50 && mouse.y-this.y<50 && mouse.y-this.y>-50)&&(this.r<maxRadius))
       {
        this.r+=1;
       }
      else if(this.r>this.minRadius)
       {
        this.r-=1;
       }

        this.draw();
    }
}

function animate(){
    c.clearRect(0,0,innerWidth,innerHeight);
    for(var i=0;i<circleArray.length;i++)
    {
    circleArray[i].draw();
    circleArray[i].move();
    }
    requestAnimationFrame(animate);

}

var circleArray=[];
function init(){
    circleArray=[];
for(var i=0;i<2000;i++)
{
    var x=Math.random()*(innerWidth-radius*2)+radius;
    var y=Math.random()*(innerHeight-radius*2)+radius;
    var dx=(Math.random() < 0.5 ? -1 : 1)*1;
    var dy=(Math.random() < 0.5 ? -1 : 1)*1;
    var radius=Math.random()*5 + 1;
    circleArray.push(new Circle(x,y,dx,dy,radius));
}}
animate();
init();
