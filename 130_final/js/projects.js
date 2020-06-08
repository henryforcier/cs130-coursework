const advance = (ev) => {
  let current = document.querySelector('.current');
  let next = current.nextElementSibling;
  console.log(current, next);
  current.className = 'slide passed';
  next.className = 'slide current';
}

document.querySelector('#next').onclick=advance;

const reverse = (ev) => {
  let current = document.querySelector('.current');
  let next = current.previousElementSibling;
  console.log(current, next);
  current.className = 'slide next';
  next.className = 'slide current';
}

document.querySelector('#prev').onclick=reverse;