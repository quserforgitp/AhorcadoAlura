document.onkeydown = showKey;
document.addEventListener("keydown", showKey);


function showKey(e){
    console.log(e.key);
}


// anonimas

document.onkeydown = (e) => {
    console.log(e.key);
}

document.addEventListener("keydown",showKey);

function showKey(e){
    console.log(e.key.toUpperCase() + " => " + e.keyCode);
}