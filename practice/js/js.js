var canvas = document.querySelector('canvas');



var c = canvas.getContext('2d');

function Circle(x, y, dx, dy, r, rc, gc, bc) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.r = r;
  this.rc = rc;
  this.gc = gc;
  this.bc = bc;

  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
    c.shadowBlur = 0;
    c.shadowColor = "rgb(" + this.rc + ", " + this.gc + ", " + this.bc + ")";
    c.strokeStyle = "rgb(" + this.rc + ", " + this.gc + ", " + this.bc + ")";
    c.lineWidth = 0;
    c.stroke();
    c.fillStyle = "rgb(" + this.rc + ", " + this.gc + ", " + this.bc + ")";
    c.fill();
    c.lineJoin="round";
  }
  this.update = function() {
    if (this.x + this.r > innerWidth || this.x - this.r < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.r > innerHeight || this.y - this.r < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }
}

var circleArray = [];

for (var i = 0; i < 100; i++) {
  var r = Math.round((Math.random()+0.3) * 31);
  var x = Math.random() * (innerWidth - r * 2) + r;
  var y = Math.random() * (innerHeight - r * 2) + r;
  var dx = (Math.random() - 0.5) * 8;
  var dy = (Math.random() - 0.5) * 8;
  var rc = Math.round(Math.random() * 255);
  var gc = Math.round(Math.random() * 255);
  var bc = Math.round(Math.random() * 255);
  circleArray.push(new Circle(x, y, dx, dy, r, rc, gc, bc));
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  var wiw = window.innerWidth;
  var wih = window.innerHeight;
  canvas.width = wiw;
  canvas.height = wih;
  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
  console.log(circleArray)
}
animate();
