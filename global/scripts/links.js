const linkGroups = document.querySelectorAll('.link-group');

for (let i = 0; i < linkGroups.length; i++) {
  const lg = linkGroups[i];
  const btn = lg.querySelector('.link-group__btn');
  const links = lg.querySelector('.link-group__links');

  btn.addEventListener('click', () => {
    console.log(lg)
    if (lg.classList.contains('link-group--active')) {
      lg.classList.remove('link-group--active');
      lg.style.height = '';
    } else {
      lg.classList.add('link-group--active');
      lg.style.height = links.children.length * 30 + 43 + 'px';
    }
  })
}
