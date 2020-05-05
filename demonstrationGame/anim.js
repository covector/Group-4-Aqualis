var LR = true;
slideL = () => {
    if (!LR){
        document.getElementsByClassName("explore2")[0].style.left = "48vw";
        document.getElementsByClassName("explore1")[0].style.right = "0vw";
        document.getElementsByClassName("b4after")[0].textContent = "Before:";
        LR = true;
    }
}

slideR = () => {
    if (LR){
        document.getElementsByClassName("explore2")[0].style.left = "0vw";
        document.getElementsByClassName("explore1")[0].style.right = "48vw";
        document.getElementsByClassName("b4after")[0].textContent = "After:";
        LR = false;
    }
}

