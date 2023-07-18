// select all pannels from html classes

const singles = document.querySelectorAll('.single');

// to add active class name dynamically

singles.forEach((single) => {
  single.addEventListener('click', () => {
    removeActiveClassName();
    single.classList.add('active');
  });
});

// remove Active class name dynamically

function removeActiveClassName() {
  singles.forEach((single) => {
    single.classList.remove('active');
  });
}
