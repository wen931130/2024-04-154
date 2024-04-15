let b = ["#5B462A"];
let r = ["#D23F2A"];
let wh = ["#F2EDEC"]; //背景
let ye = ["#F1BF1A"];
var balls =[]
var ball
class ball_class{  //宣告一個ball_class物件，
  constructor(args){  //描述物件的初始值，只有設定物件的資料內容   
    this.p = args.p || {x:width/2,y:height/2};
    this.w = args.w || random(20,50)
    this.h = args.h || random(20,50)
    this.d = args.d || random(20,50)
    this.r = args.r || random(r)
    this.b = args.b || random(b)
    this.ye = args.ye || random(ye)
    this.wh = args.wh || random(wh)
    this.rotate_num = args.rotate_num || random(0, 360); 
    this.shape_num = args.shape_num || int(random(4)); 
    this.v = args.v || {x: random(-2, 2), y: random(-2, 2)};
    this.a = args.a || {x: 0, y: random(1.2, 1.2)};
  }
  draw(){   //畫出物件畫面的程式碼，一個物件繪出的程式碼    
    push();
    translate(this.p.x, this.p.y);
    rotate(this.rotate_num);
    drawingContext.setLineDash([3, 5]);
    strokeWeight(3.5);
    if (random(15)) {
      if (this.shape_num == 0) {
        stroke(this.r);
        fill(this.r);
        circle(0, 0, this.d);
      } else if (this.shape_num == 1) {
        // k
        stroke(this.ye);
        fill(this.ye);
        rect(0 - this.w / 2, 0 - this.w  / 2, this.w  / 2, this.w );

        stroke(this.r);
        fill(this.r);
        triangle(0, -this.d / 2, this.d / 2, -this.d / 2, 0, 0);
        stroke(this.r);
        fill(this.r);
        triangle(0, 0, this.d / 2, this.d / 2, 0, this.d / 2);
        stroke(this.b);
        fill(b);
        circle(this.d / 2.5, 0, this.d / 3.8);
      } else if (this.shape_num == 2) {
        // M
        stroke(this.b);
        fill(this.b);
        rect(0 -this. w / 2, 0 - this.w / 2, this.w / 2, this.w);

        stroke(this.r);
        fill(this.r);
        circle(0 + this.w / 4, 0 - this.w / 4, this.d / 2);
        circle(0 + this.w / 4, 0 + this.w / 4, this.d / 2);
        rect(0, -this.d / 2, this.d / 4, this.d / 2);
        rect(0, 0, this.d / 4, this.d / 2);

        stroke(this.wh);
        strokeWeight(13);
        line(-this.d / 2, -this.d / 4.5, this.d / 3.9, -this.d / 4.5);
        line(-this.d / 2, +this.d / 4.5, this.d / 3.9, +this.d / 4.5);

      } else if (this.shape_num == 3) {
        // L
        stroke(this.r);
        fill(this.r);
        rect(0, 0, this.w / 2, this.w / 2);
        stroke(this.b);
        fill(this.b);
        circle(this.d / 3.5, -this.d / 3.5, this.w / 3.8);
        stroke(this.b);
        fill(this.b);
        rect(0 -this.w / 2, 0 -this. w / 2, this.w / 2, this.w);

      }
    } else {
      if (random(15)) {
        // cake
        fill(this.b);
        stroke(this.b);
        circle(0, 0, this.w * 0.9);

        push();
        rectMode(CENTER);
        rotate(45);
        stroke(this.ye);
        fill(this.ye);
        rect(0, 0, this.w / 3.7);
        pop();
      } else {
        // beans
        stroke(this.b);
        fill(this.b);
        push();
        rotate(30);
        ellipse(0 - this.w / 5, 0 - this.w / 4.3, this.w / 1.6,this. w / 2.4);
        ellipse(0 + this.w / 5, 0 + this.w / 4.3, this.w / 1.6, this.w / 2.4);

        stroke(this.wh);
        drawingContext.setLineDash([1, 4]);
        strokeWeight(3);
        line(0 - this.w + this.w / 4, 0 - this.w / 4, 0 + this.w / 4, 0 - this.w / 4);
        line(0 - this.w / 6, 0 + this.w / 4.5, 0 + this.w / 2, 0 + this.w / 4);

        pop();
      }
    }
    pop(); 
  }
  update(){  //物件移動更新後的程式碼
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > width) {
      this.vx *= -1;
    }
    if (this.y < 0 || this.y > height) {
      this.vy *= -1;
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  background(wh);
  
  for(i=0;i<20;i=i+1){  //產生多個球資料(20顆球)
    ball = new ball_class({  //傳一串參數值到class內
    v:{x:random(-2,2),y:random(-2,2)},
    p:{x:random(0,width),y:random(0,height)},
    a:{x:0,y:0}
    })
    balls.push(ball)
  }
}

function draw() {
  background(wh);
  for (let j = 0;j< balls.length;j++){
    let ball = balls[j]
    ball.draw();
    ball.update();
  }

}
