let x;
let y;
let vx;
let vy;
let g;
let r;

function setup() {
    createCanvas(400, 400);
    x=width/2;
    x=0;
    y=0;
    vx=4;
    vy=1;
    r=100;
    g=0.5;
}

function draw() {
    background(220,0,0,1);

    x=x+vx;
    vy=vy+10;
    y=y+vy;

    if(y>height-r){
        y=height-r;
        vy=-vy*0.99;

        //vx=vx*0.98;
    }

    if(x>width-r){
        x=width-r;
        vx=-vx;
    }

    if(x<r){
        x=r;
        vx=-vx;
    }

    fill(random(200),random(0),random(0));
    circle(x,y,r*2);

}