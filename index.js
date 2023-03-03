function simpleLove(){
    document.getElementById("demo").innerHTML = "EM Không Có Tuổi Vươn Đến Anh";
}
function moveRight(){
    
  let x = Math.round(Math.random() * window.innerWidth);
  let y = Math.round(Math.random() * window.innerHeight);
    document.getElementById("no").style.left = x + "px";
    document.getElementById("no").style.top = y + "px";
}