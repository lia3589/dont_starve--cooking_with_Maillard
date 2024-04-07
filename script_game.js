var rightDiv = document.getElementById('right');
let clickCount=0;
document.addEventListener('click', function(event) {
    if (event.target.closest('#right')) {
        addNewMessage();
    }
});

function addNewMessage() {
    clickCount++;
    let content=''
    switch(clickCount) {
        case 1:
            content='1';
            break;
        case 2:
            content='2';
            break;
        case 3:
            content='3';
            break;
        case 4:
            content='4';
            break;
        case 5:
            content='5';
            break;
        default:
            return;
    }
    var newMessage = document.createElement('div');
    var head=document.createElement('img');
    if (clickCount%2==0) {
        newMessage.classList.add('message-we');
        head.src='pic/威尔逊.png';
    } else {
        newMessage.classList.add('message-op');
        head.src='pic/Meatballs.png';
    }
    var messageContent = document.createElement('span');
    messageContent.textContent = content;

    newMessage.appendChild(head);
    newMessage.appendChild(messageContent);

    rightDiv.appendChild(newMessage);
    rightDiv.scrollTop = rightDiv.scrollHeight;
}