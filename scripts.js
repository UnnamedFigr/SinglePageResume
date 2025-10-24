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
const links = [
    {'first-year':'https://github.com/UnnamedFigr/Technical-University-Sofia-Exercises/tree/main/First_year/SecondSemesterProject/CourseWork'} ,
    {'second-year': 'https://github.com/UnnamedFigr/Technical-University-Sofia-Exercises/tree/main/Second_year/Coursework_HtmlCrawler/HtmlCrawler/HtmlCrawler2.2'}
]