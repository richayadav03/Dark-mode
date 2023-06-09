const nightbutton=document.querySelector(".button")
nightbutton.addEventListener('click', ()=>{
    nightbutton.querySelector('i').classList.toggle('fa-sun');
    nightbutton.querySelector('i').classList.toggle('fa-moon');
    document.body.classList.toggle('dark');

    var set;
    if(document.body.classList.contains('dark')){
        console.log('dark');
        set="DARK";
    }else{
        console.log('light mode');
        set="LIGHT";
    }
    localstoraage=setItem("ModeTheme", JSON.stringify(set));
});

let GetMode=JSON.parse(localStorage.getItem("ModeTheme"));
if(GetMode==="DARK"){
    document.body.classList='dark';
}

window.addEventListener('load', ()=>{
    if(document.body.classList.contains('dark')){
        nightbutton.querySelector('i').classList.add('fa-sun');
    }else{
        nightbutton.querySelector('i').classList.add('fa-moon');
    }
});