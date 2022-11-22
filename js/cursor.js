let mouseCursor = document.querySelector('.cursor');
  
    //커스텀 커서의 left값과 top값을 커서의 XY좌표값과 일치시킴
function cursor(e) {
    mouseCursor.style.left = e.pageX + "px";
    mouseCursor.style.top = e.pageY - scrollY + "px";
}
  
//window 객체에 scroll & mouse 이벤트를 추가하고 cursor함수 실행되도록 함
window.addEventListener("scroll", cursor);
window.addEventListener("mousemove", cursor);