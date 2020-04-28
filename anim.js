var LR = true;
slideL = () => {
    if (!LR){
        document.getElementsByClassName("explore2")[0].style.left = "1200px";
        document.getElementsByClassName("explore1")[0].style.right = "0px";
        document.getElementsByClassName("b4after")[0].textContent = "Before:";
        LR = true;
    }
}

slideR = () => {
    if (LR){
        document.getElementsByClassName("explore2")[0].style.left = "0px";
        document.getElementsByClassName("explore1")[0].style.right = "1200px";
        document.getElementsByClassName("b4after")[0].textContent = "After:";
        LR = false;
    }
}

