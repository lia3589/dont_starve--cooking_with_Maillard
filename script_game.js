var rightDiv = document.getElementById('right');
var conver=document.getElementById('left_right');
let clickCount=0;
document.addEventListener('click', function(event) {
    if (event.target.closest('#right') || event.target.closest('#left_right')) {
        addNewMessage();
    }
});

function addNewMessage() {
    clickCount++;
    let content=''
    switch(clickCount) {
        case 1:
            content='你好，威尔逊！';
            break;
        case 2:
            content='你是谁，我这是在哪？';
            break;
        case 3:
            content='我饿了。你能给我做点好吃的吗？吃饱了我就告诉你。';
            break;
        case 4:
            content='？？？';
            break;
        case 5:
            content='祝你好运！';
            break;
        default:
            return;
    }
    var newMessage = document.createElement('div');
    var head=document.createElement('img');
    if (clickCount%2==0) {
        newMessage.classList.add('message-we');
        head.src='pic/威尔逊.png';
        head.classList.add('head');
    } else {
        newMessage.classList.add('message-op');
        head.src='pic/Meatballs.png';
        head.classList.add('head');
    }
    var messageContent = document.createElement('span');
    messageContent.textContent = content;

    newMessage.appendChild(head);
    newMessage.appendChild(messageContent);

    rightDiv.appendChild(newMessage);
    rightDiv.scrollTop = rightDiv.scrollHeight;
}