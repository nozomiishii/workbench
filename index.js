const ul = document.querySelector('ul');
ul.addEventListener('click', e =>{
  if(e.target.tagName === 'LI'){
    e.target.remove();
  }
})


const p = document.querySelector('p');

p.addEventListener('copy', e =>{
  console.log('nice pussy');
})
