window.addEventListener('scroll', scroll);

function scroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.querySelector("header").style.top = "0px";
        document.querySelector("footer").style.bottom = "0px";
    } else {
        document.querySelector("header").style.top = "-60vh";
        document.querySelector("footer").style.bottom = "-3vh";
    }
}