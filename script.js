const projects = document.querySelector(".projects");

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".pre");
// const visits = document.querySelectorAll(".visit");
const objs = [
  {
    name: "Note App",
    about:
      "A fullstack app that lets users create, edit, and delete notes with secure authentication and smooth user experience. It demonstrates my backend skills along with building responsive, interactive UIs.",
    url: "https://noteappbydev.infy.uk/",
    img: "allPics/Note-App.png",
  },
  {
    name: "Weather App",
    about:
      "A simple app that fetches real-time weather data by city, showing temperature, conditions, and more. It showcases my ability to work with APIs and present data clearly.",
    url: "https://muddasirbutt3.github.io/Weather-App/",
    img: "allPics/Weather-App.png",
  },

  {
    name: "Quiz App",
    about:
      "An interactive quiz platform where users answer multiple-choice questions, get instant feedback, and see scores. It emphasizes dynamic state management and engaging UI.",
    url: "https://muddasirbutt3.github.io/Quiz-App/",
    img: "allPics/Quiz-App.png",
  },
  {
    name: "E-Commerce App",
    about:
      "A sleek online store interface where users can browse products and explore categories. This project highlights my frontend design and layout skills with a focus on user-friendly shopping flows.",
    url: "https://muddasirbutt3.github.io/E-Commerce/",
    img: "allPics/E-Commerce.png",
  },
  {
    name: "News App",
    about:
      "A responsive app that pulls the latest headlines from a news API, letting users explore trending stories. It demonstrates my work with fetching external data and presenting it elegantly.",
    url: "https://muddasirbutt3.github.io/News-App/",
    img: "allPics/News-App.png",
  },
];

objs.forEach((project, index) => {
  projects.innerHTML += `
    <div class="proj">
              <img src="${project.img}" />
              <div class="box">
                <div class="proj-name">${project.name}</div>
                <div class="proj-about">${project.about}</div>
                <button class="visit">
                  Visit <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </button>
              </div>
            </div>
    `;
});
const visits = document.querySelectorAll(".visit");
const cards = document.querySelectorAll(".proj");
visits.forEach((visit,index) => {
    visit.addEventListener('click',() => {
        // console.log(objs[index]);
        
        window.location.href = objs[index].url
    })
})

let currentIndex = 0;

function scrollToCard(index) {
  if (index < 0) index = 0;
  if (index >= cards.length) index = cards.length - 1;

  currentIndex = index;

  const card = cards[index];
  const cardLeft = card.offsetLeft;
  const cardWidth = card.offsetWidth;
  const containerWidth = projects.offsetWidth;

  const scrollLeft = cardLeft - containerWidth / 2 + cardWidth / 2;

  projects.scrollTo({
    left: scrollLeft,
    behavior: "smooth",
  });
}

nextBtn.addEventListener("click", () => {
  scrollToCard(currentIndex + 1);
});

prevBtn.addEventListener("click", () => {
  scrollToCard(currentIndex - 1);
});
