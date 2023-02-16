var Eventbar = document.getElementById('event-hold-multi')
var wrapper = document.querySelector("section")
var moveval = 0;

var dragging = false, mouselocation, gallerylocation;

function animationforscroll() {
    moveval = window.scrollY*0.009
  Eventbar.style.transform = `rotateZ(-0.6deg) translateX(-${moveval}%)`;
  requestAnimationFrame(animationforscroll)
}
requestAnimationFrame(animationforscroll);

function dragStart(e) {
    dragging = true;
    mouselocation = e.pageX;
    gallerylocation = wrapper.scrollLeft
}

function dragAction(e) {
    if (!dragging) return;
    var offset = e.pageX - mouselocation;
    var newset = gallerylocation - offset;
    console.log(newset)
}


function dragStop(e) {
    dragging = false;
    mouselocation = e.pageX;
    gallerylocation = wrapper.scrollLeft
}


Eventbar.addEventListener("mousedown",dragStart);
Eventbar.addEventListener("mousemove",dragAction);
Eventbar.addEventListener("mouseup",dragStop);