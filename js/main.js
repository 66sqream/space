function openthedooor(attr) {
    let more = document.getElementById(attr)
    let btn = document.querySelector(`.btn${attr}`)
    if (more.classList.contains('none')) {
        more.classList.remove("none");
        btn.setAttribute('style', 'transform: rotate(0deg);');
    } else {
        more.classList.add("none");
        btn.setAttribute('style', 'transform: rotate(45deg);');
    }
}

let touch = document.querySelector(`.btnv2`);
let cancel = document.querySelector(`.cancel`);
touch.onclick = function() {
    let block = document.querySelector(`.reg`);
    document.querySelector('body').classList.remove("ov");
    block.classList.remove("none");
    document.querySelector('body').style.overflow = 'hidden';
};
cancel.onclick = function() {
    let block = document.querySelector(`.reg`);
    block.classList.add("none");
    document.querySelector('body').classList.add("ov");
};