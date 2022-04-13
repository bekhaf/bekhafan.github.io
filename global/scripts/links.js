const linkGroups = document.querySelectorAll('.link-group');

for (let i = 0; i < linkGroups.length; i++) {
  const lg = linkGroups[i];
  const btn = lg.querySelector('.link-group__btn');
  const btnComputedStyle = btn.currentStyle || getComputedStyle(btn);
  const btnMarginTop = +btnComputedStyle['margin-top'].slice(0, -2)
  const btnMarginBottom = +btnComputedStyle['margin-bottom'].slice(0, -2)
  const btnHeight = (btn.clientHeight + btnMarginTop + btnMarginBottom);
  const links = lg.querySelector('.link-group__links');
  const linksHeight = +getComputedStyle(links)['height'].slice(0, -2);

  btn.addEventListener('click', () => {
    if (lg.classList.contains('link-group--active')) {
      lg.classList.remove('link-group--active');
      lg.style.height = '';
    } else {
      lg.classList.add('link-group--active');
      lg.style.height = linksHeight + btnHeight + 'px';
    }
  })
}
