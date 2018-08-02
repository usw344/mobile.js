window.onload = function() {


  let canvas = getCanvas();
  let ctx = getContext();

  let width = getCanvasWidth();
  let height = getCanvasHeight();

  let x = 10;
  let y = 10;
  let w = 20;
  let h = 20;

  let bool = false;
  let isTouching = false;


  canvas.addEventListener("touchstart", touching);
  canvas.addEventListener("touchend", notTouching);

  function touching(e) {
    isTouching = true;
  }

  function notTouching(e) {
    isTouching = false;
  }

  function move() {
    if (x > width - w) {
      x = 10;
      y + h;
      bool = true;
    } else {
      x = x + 10;;
      bool = false;
    }
  }

  function text() {
    ctx.font = '20px sans-serif';
    ctx.fillStyle = "white";
    ctx.fillText("your score is:", 10, height);

  }

function colorPicker(){
  if (isTouching === false) {
    rect(x,y,w,h,"blue");
  } else {
    if(mouseX < width/2){
      rect(x,y,w,h,"yellow");
    }
    else{
      rect(x,y,w,h,"white");
    }
  }

}


  function draw() {
    clear(ctx);
    //picks color based on where the mouseX is.
    colorPicker();
    move();
    text()
  }

  setInterval(draw, 120);

}
