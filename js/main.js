/*
    Тема 
*/
const switchThema = document.querySelector('.switch');
switchThema.addEventListener('click', () => {
    switchThema.classList.toggle('active');
    document.body.classList.toggle('dark');
});


