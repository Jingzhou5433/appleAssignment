let burgerBtn = document.querySelector('#burger-btn');
let title = document.querySelector('#head-info');
let collapse = document.querySelector('.collapse');
let plus = document.querySelectorAll('.fa-plus');


burgerBtn.addEventListener('click',() => {
    
    let classes = burgerBtn.classList;
    if(classes.length === 2){
        classes.add('is-active');
        title.innerHTML = "Recruiment";
        collapse.style.maxWidth = "100%";
        
    }else{
        classes.remove('is-active');
        title.innerHTML = "Talent Point"; 
        collapse.style.maxWidth = "0";
    }
})



plus.forEach(icon => {
    let deg = 45;
    icon.addEventListener('click', () => {
        icon.style.transform = `rotate(${deg}deg)`;
        deg += 45;
        let collContent = icon.parentElement.parentElement.nextElementSibling;
        
        if(!collContent.style.maxHeight || collContent.style.maxHeight === "0px"){
            collContent.style.maxHeight = collContent.scrollHeight + "px";
            collContent.style.marginBottom= "15px";
        }else{
            collContent.style.maxHeight =  "0";
            collContent.style.marginBottom= "0px";
        }
    });
})



