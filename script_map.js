let canvas = document.getElementById('gameCanvas');
let ctx = canvas.getContext('2d');
var overlay = document.getElementById('overlay');
var popup = document.getElementById('popup');
let choice=0

// 初始化角色位置
let x = canvas.width / 2;
let y = canvas.height / 2;

// 设置wasd控制的角色移动速度
let speed = 15;

// 绘制背景
let backgroundImage = new Image();
backgroundImage.onload = function() {
  // 绘制背景图片
  ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
};
backgroundImage.src = 'pic/map0.jpg';

let flourImage = new Image();
flourImage.onload=function() {
    ctx.drawImage(flourImage,100,200,100,100);
}
flourImage.src='pic/Flour.png';

let coffeeImage = new Image();
coffeeImage.onload=function() {
    ctx.drawImage(coffeeImage,1000,200,100,100);
}
coffeeImage.src='pic/coffeebeans.png';


let cookImage = new Image();
cookImage.onload=function() {
    ctx.drawImage(cookImage,1000,500,150,150);
}
cookImage.src='pic/pot.png';


// 设置角色图像
let image = new Image();
image.src = 'pic/威尔逊.png'; // 替换成你的角色图片路径
image.onload = function() {
    ctx.drawImage(image, x - image.width / 2, y - image.height / 2);
};

// 监听键盘按下事件
document.addEventListener('keydown', function(event) {
    switch(event.keyCode) {
        case 87: // W键
            y -= speed;
            image.src = 'pic/威尔逊后向.png'; // 替换成你的角色图片路径
            break;
        case 65: // A键
            x -= speed;
            image.src = 'pic/威尔逊左向.png'; // 替换成你的角色图片路径
            break;
        case 83: // S键
            y += speed;
            image.src = 'pic/威尔逊.png'; // 替换成你的角色图片路径
            break;
        case 68: // D键
            x += speed;
            image.src = 'pic/威尔逊右向.png'; // 替换成你的角色图片路径
            break;
    }
    if (x < 0 || x > canvas.width) {
        x = Math.max(0, Math.min(x, canvas.width));
      }
      
      if (y < 0 || y > canvas.height) {
        y = Math.max(0, Math.min(y, canvas.height));
      }
    if (x <150 && x > 100 && y < 250 && y>200) {
        choice=1
    }
    updateScreen();
});

function handleClick(event) {
    var cx=event.clientX;
    var cy=event.clientY;
    var windowwidth=window.innerWidth;
    var windowheight=window.innerHeight;
    if (cx>windowwidth*0.098 && cx<windowwidth*0.152 && cy>0 && cy<windowheight*0.112) {
        showPopup();
    }
}

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

// 更新屏幕显示
function updateScreen() {
    // 清除之前的画
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // 重新绘制背景
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    // 重新绘制角色
    ctx.drawImage(flourImage,100,200,100,100);
    ctx.drawImage(cookImage,1000,500,150,150);
    ctx.drawImage(coffeeImage,1000,200,100,100);
    ctx.drawImage(image, x - image.width / 2, y - image.height / 2);
}