function No (){
    var rand1 = Math.floor(Math.random() * 75) + 1;
    var rand2 =Math.floor(Math.random() * 75) + 1;
    const bos = document.getElementById("no");
    bos.style.marginLeft=`${rand1}%`;
    bos.style.marginTop=`${rand2}%`;
}
function Yes(){
    const text = document.getElementById("titel");
    text.innerHTML = "I KNEW IT ! 😛😛😛"
}