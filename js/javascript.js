window.addEventListener('scroll', scroll);

function scroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementsByTagName("header").style.top = "0px";
    } else {
        document.getElementsByTagName("header").style.top = "-60px";
    }
}