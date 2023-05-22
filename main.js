//typing script js//
var typed = new Typed(".typing",{

    strings: ["Programmer", "Web  Designer","web developer"],
    typeSpeed:80,
    backSpeed:80,
})

var typed = new Typed(".typing-2",{

    strings: ["Programmer", "Web  Designer","web developer"],
    typeSpeed:100,
    backSpeed:60,
})


//show hide ans//

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click',() => {
        faq.classList.toggle('open');
  

    //chnges icon//

    const icon = faq.querySelector('.faq_icon i');

    if(icon.className === 'fa-solid fa-plus'){
        icon.className = 'fa-solid fa-minus'
    }

    else{ 
        icon.className = 'fa-solid fa-plus'; 
    }

     })
})


//show nav manu///

const manu = document.querySelector('.nav_manu');

const manuBtn = document.querySelector('#open-manu-btn');

const closeBtn = document.querySelector('#close-manu-btn');

manuBtn.addEventListener('click',() => {

    manu.style.display = "flex";

    closeBtn.style.display ="inline-block";

    manuBtn.style.display = "none"
})


//close nav//

const closeNav = ( ) =>{

    manu.style.display = "none"
    closeBtn.style.display = "none"
    manuBtn.style.display = "inline-block"
}

closeBtn.addEventListener('click',closeNav)

//nav color chngs//
 
window.addEventListener('scroll',() =>{
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY>100);
})

