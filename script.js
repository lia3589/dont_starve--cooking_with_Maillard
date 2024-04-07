var background=document.getElementById('background');
var overlay = document.getElementById('overlay');
var popup = document.getElementById('popup');

function handleClick(event) {
    var x=event.clientX;
    var y=event.clientY;
    var windowwidth=window.innerWidth;
    var windowheight=window.innerHeight;

    if (x>=windowwidth*0.085 && x<=windowwidth*0.188 && y>=windowheight*0.552 && y<=windowheight*0.597) {
        window.location.href="game.html";
    } else if (x>=windowwidth*0.085 && x<=windowwidth*0.188 && y>=windowheight*0.655 && y<=windowheight*0.702) {
        window.location.href="https://wbhu.nju.edu.cn/";
    } else if (x>=windowwidth*0.072 && x<=windowwidth*0.2 && y>=windowheight*0.773 && y<=windowheight*0.818){
        window.location.href="creator.html";
    } else if (x>=windowwidth*0.323 && x<=windowwidth*0.709 && y>=windowheight*0.565 && y<=windowheight*0.944) {
        showPopup();
    } else if (x>=windowwidth*0.725 && x<=windowwidth*0.914 && y>=windowheight*0.56 && y<=windowheight*0.742) {
        window.location.href="https://www.bilibili.com/read/cv33442514/";
    } else if (x>=windowwidth*0.725 && x<=windowwidth*0.914 && y>=windowheight*0.766 && y<=windowheight*0.946) {
        window.location.href="https://www.bilibili.com/read/cv30583641/";
    }
}

background.addEventListener('mousemove',function(event) {
    var x=event.clientX;
    var y=event.clientY;
    var windowwidth=window.innerWidth;
    var windowheight=window.innerHeight;

    if (x>=windowwidth*0.085 && x<=windowwidth*0.188 && y>=windowheight*0.552 && y<=windowheight*0.597) {
        background.style.cursor='pointer';
    } else if (x>=windowwidth*0.085 && x<=windowwidth*0.188 && y>=windowheight*0.655 && y<=windowheight*0.702) {
        background.style.cursor='pointer';
    } else if (x>=windowwidth*0.072 && x<=windowwidth*0.2 && y>=windowheight*0.773 && y<=windowheight*0.818){
        background.style.cursor="pointer";
    } else if (x>=windowwidth*0.323 && x<=windowwidth*0.709 && y>=windowheight*0.565 && y<=windowheight*0.944) {
        background.style.cursor='pointer';
    } else if (x>=windowwidth*0.725 && x<=windowwidth*0.914 && y>=windowheight*0.56 && y<=windowheight*0.742) {
        background.style.cursor='pointer';
    } else if (x>=windowwidth*0.725 && x<=windowwidth*0.914 && y>=windowheight*0.766 && y<=windowheight*0.946) {
        background.style.cursor='pointer';
    }  else {
        background.style.cursor='default';
    }
})

function showPopup() {
    overlay.style.display = 'block';
    popup.style.display = 'block';
}
function closePopup() {
    overlay.style.display = 'none';
    popup.style.display = 'none';
}
overlay.addEventListener('click', function(event) {
    if (event.target === overlay) {
        closePopup();
    }
});
document.getElementById('popupImg').addEventListener('click', function(event) {
    var x=event.clientX;
    var y=event.clientY;
    var windowwidth=window.innerWidth;
    var windowheight=window.innerHeight;

    if (x>=windowwidth*0.363 && x<=windowwidth*0.491 && y>=windowheight*0.577 && y<=windowheight*0.607) {
        closePopup();
    }
    if (x>=windowwidth*0.508 && x<=windowwidth*0.578 && y>=windowheight*0.577 && y<=windowheight*0.607) {
        closePopup();
    }
});