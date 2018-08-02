// this is a simple canvas framework
let width;
let height;
let theCanvas;
let theContext;

function getCanvas(){
  theCanvas = document.querySelector('canvas');
  return theCanvas;
}

function getContext(){
  theContext = theCanvas.getContext('2d');
  return theContext;
}

function getCanvasHeight(){
  theCanvas.height = window.innerHeight - 10;
  height = theCanvas.height - 10;
  return height;

}

function getCanvasWidth(){
  theCanvas.width = window.innerWidth;
  width = theCanvas.width - 10;
  return width;
}

function clear(theContextToBeCleared){
  theContextToBeCleared.clearRect(0, 0, width + 10, height + 10);
}

function rect(x,y,w,h,color) {
  theContext.fillStyle = color;
  theContext.fillRect(x, y, w, h);
}
function getTouchCord(event){
  let touchX = event.touches[0].clientX;
  let touchY = event.touches[0].clientY;
  document.getElementById("demo").innerHTML = touchX + ", " + touchY;
  let touch = {touchX: x, touchY: y};
}
function theTouchXY(){
  return touch;
}
