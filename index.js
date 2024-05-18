const nav = document.querySelector('.nav');
const navToggle = document.querySelector('.mobile-nav-toggle'); 

navToggle.addEventListener('click', () => {
    const vis = nav.getAttribute('data-visible');
    
    if(vis === 'false'){
        nav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    } else if (vis === 'true'){
        nav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    }
}); 

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');




window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*='+ id+ ']').classList.add('active');
            })
        }
    });
};