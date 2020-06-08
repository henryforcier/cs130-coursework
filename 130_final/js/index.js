const advance = (ev) => {
    let current = document.querySelector('.current');
    let next = current.nextElementSibling;
    console.log(current, next);
    current.className = 'slide passed';
    next.className = 'slide current';
    if (next.nextElementSibling == null) {
        document.querySelector('#next').style.display='none';
    }
}

document.querySelector('#next').onclick=advance;

