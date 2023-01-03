const speakersCards = document.querySelector('.speakers-elt');
const speakerBtn = document.querySelector('.speakers-btn');

const mediaqueryList = window.matchMedia('(max-width: 768px)');

/* eslint-disable no-undef */
const dataSpeakers = [
  {
    url: './assets/speakers/speaker1.jpeg',
    name: 'Yochai Benkler',
    position:
      'Beykman Professor of Enterpreanurial Legal Studies of Harvard Law School',
    description:
      'Benlder studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
  },
  {
    url: './assets/speakers/speaker2.jpeg',
    name: 'SohYeong Noh',
    position: 'Director of Art Centre Nabl and a board member of CC Korea',
    description:
      'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
  },
  {
    url: './assets/speakers/speaker3.jpeg',
    name: 'Lila Tretikov',
    position: 'Executive Director of the Wikimedia Foundation',
    description:
      'Lila Tretikov is the Executive Director of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia Wikipedia is freely available in 290 languag es and used by nearly half a billion people around the world every month',
  },
  {
    url: 'assets/speakers/speaker4.jpeg',
    name: 'Kilnam Chon',
    position:
      'Beykman Professor of Enterpreanurial Legal Studies of Harvard Law School',
    description:
      "Kinam Chon helped bring the Internet to Asia and is an outspoken advocate for the open web and digital com mons. In 2012, he was inducted into the inaugural class of the Internet Society's (SOC) Internet Hall of Fame.",
  },
  {
    url: './assets/speakers/speaker5.jpeg',
    name: 'Julia Leda',
    position: 'President of Young Pirates of Europe',
    description:
      "European ingetration, political democracy and participa tion of youth through online as her major condern, Reda's report outlining potential changes to EU copyright law was approved by the Parliament in July",
  },
  {
    url: './assets/speakers/speaker6.jpeg',
    name: 'Ryan Merkley',
    position: 'CEO of Creative Commons, ex COO of the Mozilla Foundation',
    description:
      'Ryan had been leading open-source projects at the Mozilla Foundation such as the open source move ment',
  },
];

const cardSpeaker = (i) => `
  <div class="speaker-wrap">
    <img src="${dataSpeakers[i].url}" alt="image of speaker ${dataSpeakers[i].name}">
    <div class="presentation">
        <h4>${dataSpeakers[i].name}</h4>
        <p class="desc">${dataSpeakers[i].position}</p>
        <hr>
        <p>${dataSpeakers[i].description}</p>
    </div>
  </div>
`;

const showTwoSpeakers = () => {
  speakersCards.innerHTML = ' ';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 2; i++) {
    const speaker = document.createElement('div');
    speaker.innerHTML = cardSpeaker(i);
    speakersCards.appendChild(speaker);
  }
};

const showAllSpeakers = () => {
  speakersCards.innerHTML = ' ';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < dataSpeakers.length; i++) {
    const speaker = document.createElement('div');
    speaker.innerHTML = cardSpeaker(i);
    speakersCards.appendChild(speaker);
  }
};

speakerBtn.addEventListener('click', () => {
  const regex = /MORE/;
  const flag = regex.test(speakerBtn.textContent);
  if (flag) {
    speakerBtn.innerHTML = 'LESS <i class="fas fa-chevron-up"></i>';
    showAllSpeakers();
  } else {
    speakerBtn.innerHTML = 'MORE <i class="fas fa-chevron-down"></i>';
    showTwoSpeakers();
  }
});

const screenTest = (e) => {
  if (e.matches) {
    showTwoSpeakers();
  } else {
    showAllSpeakers();
  }
};

screenTest(mediaqueryList);

mediaqueryList.addListener(screenTest);
