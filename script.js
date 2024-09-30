let slide = document.querySelector('.slide');
let items = document.querySelectorAll('.item');
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

function updateActiveState() {
    items.forEach((item, index) => {
        if (index === 0) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

next.addEventListener('click', function() {
    slide.appendChild(items[0]);
    items = document.querySelectorAll('.item');
    updateActiveState();
});

prev.addEventListener('click', function() {
    slide.prepend(items[items.length - 1]);
    items = document.querySelectorAll('.item');
    updateActiveState();
});

// Initial setup
updateActiveState();