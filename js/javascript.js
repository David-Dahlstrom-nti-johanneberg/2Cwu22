element.addEventListener("scroll", scroll);

function scroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("header").style.Top = "0";
    } else {
        document.getElementById("header").style.Top = "-60";
    }
}