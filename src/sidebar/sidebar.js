const pages = [
  'Main',
  'Fairytales',
  'Farm Animals',
  'Forest Animals',
  'Colors',
  'Emotions',
  'Space',
  'Body',
  'Food',
];

// This function turn the content
// of the str as a link for the pages
function link(str) {
  let res = str.split(' ');
  let link = '';
  if (res.length > 1) {
    res = res.join('-').toLowerCase();
  } else {
    res = res[0].toLowerCase();
  }
  link = `../${res}/${res}.html`;

  return { link: link, 'page-name': res };
}

const page = window.location.pathname.split('/').pop().split('.')[0];

const menu = document.createElement('button');
menu.setAttribute('id', 'menu-btn');
menu.classList.add('sidebar-btn');
menu.appendChild(document.createElement('img'));
menu.firstElementChild.setAttribute('src', '../sidebar/assets/icons/menu.png');

const sidebar = document.createElement('div');
sidebar.classList.add('sidebar');
sidebar.appendChild(document.createElement('ul'));

for (let i = 0; i < pages.length; i += 1) {
  sidebar.firstElementChild.appendChild(document.createElement('li'));
}

sidebar.firstElementChild.childNodes.forEach((li, index) => {
  li.appendChild(document.createElement('a'));
  li.firstElementChild.setAttribute('href', link(pages[index])['link']);
  if (link(pages[index])['page-name'] === page) {
    li.firstElementChild.style.textDecoration = 'underline';
  }
  li.firstElementChild.innerHTML = pages[index];
});

document.body.appendChild(menu);
document.body.appendChild(sidebar);

const icon = {
  true: '../sidebar/assets/icons/close.png',
  false: '../sidebar/assets/icons/menu.png',
};

let active = false;

menu.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  menu.classList.toggle('move');
  active = !active;
  menu.firstElementChild.removeAttribute('src');
  menu.firstElementChild.setAttribute('src', icon[`${active}`]);
});
