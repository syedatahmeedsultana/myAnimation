function startAnimation() {
    let message = " you are the best thing that ever happened to me \uD83D\uDC99";
    let index = 0;
    let displayText = "";
    let messageElement= document.getElementById("message");

    let interval = setInterval(()=> {
        if (index < message.length){
            displayText += message[index];
            messageElement.innerText = displayText;
            index++;
        } else{
            clearInterval(interval);
        } 
      }, 100);
}