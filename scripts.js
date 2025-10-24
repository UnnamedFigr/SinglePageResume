document.addEventListener('DOMContentLoaded', () => {
    const details = document.querySelectorAll('.project-list');
    details.forEach((el) => {
        el.style.display = 'none';
    })
})
const titles = document.querySelectorAll('[data-toggle]');
titles.forEach((title) =>{
    title.addEventListener('click', () => {
        const targetId = title.getAttribute('data-toggle');
        const target = document.getElementById(targetId);
        if(target.style.display === 'none' || target.style.display === ''){
            target.style.display = 'block';
        } else{
            target.style.display = 'none';
        }
    })
})