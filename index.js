console.log('yay')

const ps = document.querySelectorAll('p');


ps.forEach(p => {
  console.log(p.textContent);
  if(p.textContent == 'error'){
    p.classList.add('error');
  }else{
    p.classList.add('success');
  }
});
