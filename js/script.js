'use strict';

function titleClickHandler(event){
  const clickedElement = this;
  console.log('Link was clicked!');
  console.log (event)
  console.log('clickedElement (with plus): ' + clickedElement);
  event.preventDefault();
  /* [DONE] remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');

  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }
  /* [IN PROGRESS]  add class 'active' to the clicked link */
  console.log('clickedElement:', clickedElement);
   clickedElement.classList.add('active');

  /* [DONE] remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('.post.active');

for(let activeArticle of activeArticles){
  activeArticle.classList.remove('active');
}

  /* get 'href' attribute from the clicked link */
  const href = clickedElement.getAttribute ('href')
  /* find the correct article using the selector (value of 'href' attribute) */
const targetArticle = document.querySelector (href)
  /* add class 'active' to the correct article */
  targetArticle.classList.add('active');
}

const links = document.querySelectorAll('.titles a');


for(let link of links){
  link.addEventListener('click', titleClickHandler);
}