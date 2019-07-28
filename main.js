const sites = document.querySelector('.list');
const description = document.querySelector('.description');
const resA = document.querySelector('.res');
const resume = document.querySelector('.resume');
const close = document.querySelector('.close');
const websites = [
  site1 = {
    img: 'imgs/websites/taskmaster.png',
    name: 'Taskmaster',
    desc: 'A web app that utilizes Google Map services. With this web app you can add multiple addresses to figure out the best routes to get your tasks done most efficiently. This project uses Vanilla JavaScript & SASS.',
    live: 'https://coltonzp.github.io/Taskmaster/',
    source: 'https://github.com/ColtonZP/Taskmaster'
  },
  site2 = {
    img: 'imgs/websites/coffeeshop.png',
    name: 'Coffee Shop',
    desc: 'A fictitious Coffee and Cakes company has allowed me to make a website to show off great CSS and JavaScript Skills.',
    live: 'https://coltonzp.github.io/Coffee-and-Cakes/',
    source: 'https://github.com/ColtonZP/Coffee-and-Cakes'
  },
  site3 = {
    img: 'imgs/websites/emustudios.png',
    name: 'Emu Studios',
    desc: 'A local artist based out of Oak Harbor has allowed me to remake a website for the modern age. This project uses the Apmlify.js library.',
    live: 'https://coltonzp.github.io/EMUStudios/',
    source: 'https://github.com/ColtonZP/EMUStudios'
  },
  // site4 = {
  //   img: 'imgs/websites/american-v-twin.png',
  //   name: 'American V-Twin',
  //   desc: 'A site for a bike shop based in Mount Vernon, Wa. Before I came on to update the website, it haden\'t been updated in years. This project shows off my first project using SASS.',
  //   live: 'https://coltonzp.github.io/American-V-Twin',
  //   source: 'https://github.com/ColtonZP/American-V-Twin'
  // },
  site5 = {
    img: 'imgs/websites/tictactoe.png',
    name: 'Tic Tac Toe',
    desc: 'A simple game of Tic-Tac-Toe, my first JavaScript project. Implemented AI to keep players on their toes.',
    live: 'https://coltonzp.github.io/tic-tac-toe/',
    source: 'https://github.com/ColtonZP/tic-tac-toe'
  },
  site6 = {
    img: 'imgs/websites/original.png',
    name: 'Legacy Homepage',
    desc: 'This is a look at the first time I made this home. It\'s still a great looking page, however I had a new idea and I wanted to start from scratch on a better page.',
    live: 'https://coltonzp.github.io/legacyhome/',
    source: 'https://github.com/ColtonZP/legacyhome'
  },
  site7 = {
    img: 'imgs/websites/till.png',
    name: 'Till Calculator',
    desc: 'I have made a till calculator to make counting money at work easier, as well as giving myself a Javascript assignment.',
    live: 'https://coltonzp.github.io/till/',
    source: 'https://github.com/ColtonZP/till'
  },
];

let currId = 0;
let animation = false;

function newDescription(id) {
  const currDesCon = document.querySelector('.content');
  const newDesCon = currDesCon.cloneNode(true);
  newDesCon.querySelector('IMG').src = websites[id].img;
  newDesCon.querySelector('P').innerHTML = websites[id].desc;
  newDesCon.querySelector('H1').innerHTML = websites[id].name;
  newDesCon.querySelector('.live').href = websites[id].live;
  newDesCon.querySelector('.source').href = websites[id].source;
  description.appendChild(newDesCon);
  if (window.innerWidth > 768) {
    newDesCon.style.top = '-100%';
    setTimeout(function () {
      currDesCon.style.top = '100%';
      newDesCon.style.top = '0';
    }, 0);
    setTimeout(function () {
      currDesCon.remove();
      animation = false;
    }, 300);
  } else {
    newDesCon.style.top = '0';
    animation = false;
    currDesCon.remove();
    description.scrollIntoView();
  }
}

document.addEventListener('DOMContentLoaded', function () {
  sites.addEventListener('click', (event) => {
    if (!animation && currId !== event.target.id && event.target.className !== 'list') {
      animation = true;
      currId = event.target.id;
      newDescription(currId);
    }
  })
  resA.addEventListener('click', (event) => {
    resume.classList.remove('hidden');
    resume.querySelector('.content').style.top = 0;
  })
  close.addEventListener('click', (event) => {
    resume.classList.add('hidden');
    resume.querySelector('.content').style.top = '-100%';
  })
});

document.querySelector('.source').classList.remove('hidden');
document.querySelector('.live').classList.remove('hidden');
newDescription(0);
