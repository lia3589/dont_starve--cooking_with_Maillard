// script.js  
const characters = document.querySelectorAll('.character');  
const dialogText = document.getElementById('dialogText');  
const dialogName = document.getElementById('dialogName');  
clickArea=document.getElementById('clickArea');  
let activeCharacter = characters[0];  
let dialogIndex = 0;  
const dialogs = [  
    '你好，威尔逊！',  
    '待填入文本1',
    '待填入文本2',   
    '待填入文本3',   
    '待填入文本4',   
    '待填入文本5',   
    '待填入文本6',   
    '待填入文本7',   
    '待填入文本8',   
    '待填入文本9',   
    '待填入文本10',   

];  

dialogNames = [
    '???',
    '威尔逊',
]
  
document.getElementById('clickArea').addEventListener('click',function() {
    var nextLink = document.getElementById('nextLink');
    if (dialogIndex >= dialogs.length) {  
        nextLink.style.display = 'block'; // 显示链接  
        nextLink.href = 'map.html'; // 设置链接到下一个页面的URL  
    }  else {   
        showDialog(dialogIndex);  
        dialogIndex++;   
    } 
}) 
  
function showDialog(index) {  
    dialogText.textContent = dialogs[index];  
    dialogName.textContent = dialogNames[index%2];  
}  
  
// 初始化，显示第一个角色的台词  
showDialog(0);  
activeCharacter.classList.add('active');