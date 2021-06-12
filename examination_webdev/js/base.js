

/*function onClick1(){
    donken = document.getElementById("donken")
    if (donken.src == "https://hdwallsource.com/img/2018/2/mcdonalds-logo-desktop-wallpaper-62678-64656-hd-wallpapers.jpg"){
        donken.src = "https://pngimg.com/uploads/kfc/kfc_PNG17.png"
    } 
    else{
        donken.src = "https://hdwallsource.com/img/2018/2/mcdonalds-logo-desktop-wallpaper-62678-64656-hd-wallpapers.jpg"
    
    }
}*/

function scrollDown(){
    document.getElementsByTagName("ul")[0].scrollIntoView();
}

function donkenMessage(){
    let message1 = document.getElementById("donkenMessege")
    if (message1.innerHTML == "Click on donken pic"){
        message1.innerHTML = "If you eat donken more then 4 times per weed you fatt"
        message1.style.backgroundColor = "yellow"
    }
    else{
        message1.innerHTML = "Click on donken pic"
        message1.style.backgroundColor ="#9fffdf"
    }
}
function kfcMessage(){
    let message2 = document.getElementById("kfcMessege")
    if (message2.innerHTML == "Click on kfc pic"){
        message2.innerHTML = "Chicken lover deep in the bones"
        message2.style.backgroundColor ="yellow"
    }
    else{
        message2.innerHTML = "Click on kfc pic"
        message2.style.backgroundColor ="#9fffdf"
    }
}