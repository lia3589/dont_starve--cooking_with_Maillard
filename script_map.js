let canvas = document.getElementById('gameCanvas');
let ctx = canvas.getContext('2d');
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
            break;
        case 65: // A键
            x -= speed;
            break;
        case 83: // S键
            y += speed;
            break;
        case 68: // D键
            x += speed;
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