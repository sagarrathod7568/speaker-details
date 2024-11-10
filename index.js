const data = [
  {
    img_url: "./assets/image_2.svg",
    name: "Jane Smith",
    designation: "CTO",
    description:
      "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
    country: "Tech Solutions",
  },

  {
    img_url: "./assets/image_3.svg",
    name: "Michael Brown",
    designation: "Product Manager",
    description:
      "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
    country: "StartUp Inc",
  },
  {
    img_url: "./assets/image_4.svg",
    name: "Sarah Wilson",
    designation: "UX Designer",
    description:
      "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
    country: "Creative Studio",
  },
  {
    img_url: "./assets/image_1.svg",
    name: "Chris Evans",
    designation: "Software Engineer",
    description:
      "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
    country: "Tech Dynamics",
  },
  {
    img_url: "./assets/image_2.svg",
    name: "Emma Watson",
    designation: "Data Scientist",
    description:
      "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
    country: "DataCorp",
  },
  {
    img_url: "https://avatar.iran.liara.run/public/boy",
    name: "Robert Downey",
    designation: "DevOps Engineer",
    country: "CloudNet",
    description:
      "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
  },
  {
    img_url:
      "https://s3-alpha-sig.figma.com/img/9de3/b8aa/4e6fd86d00bc645311899b3fbcca52d5?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i-2az8c~TQ4GQTgMdGGA~OiZRcxQqNliOmg1Nrh3~q5mCbkyAXoOFrZXz3rtpBmhoLH2MEPcD8uyzrysiBixOxyySVYRLqY2pdQYKhqW1Kibe4meVDaoZKzWOedglJPRuLQhW62vUhFnnDWDaxe74zfw1MfHfD-qLD4-v2FEWZy4Ww64U6DTEIPNSgwu2vhoCu0UzxocqOeUDrobUZuHnzPMc29WeTKpzHo~9NfifEoSciD~yZUa0s40o9Q~gM54g-UhG-46MlVop01DP9xSiLXP3RnQq6B3DimGuPflSgw9-5gSLX5Z94~AVOpkYwkxNCs-jiWwTnZfxmyz5X~qIw__",
    name: "John Doe",
    designation: "Chief Marketing Officer",
    description:
      "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
    country: "Acme Corp",
  },
  {
    img_url: "https://avatar.iran.liara.run/public/boy",
    name: "Alice Johnson",
    designation: "Lead Developer",
    description:
      "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
    country: "InnovateX",
  },
];

const modalOverlay = document.getElementById("modalOverlay");

const closePopUp = () => {
  modalOverlay.style.display = "none";
};

const handleCardClick = (item) => {
  console.log(item);

  modalOverlay.style.display = "block";
  const popupContent = document.createElement("div");
  popupContent.className = "modal-content";
  popupContent.innerHTML = `
   <span class="close-btn" id="closeModal">&times;</span>
      <div class="profile-deatails">
      <div class="profile-info-container">
        <img src=${item.img_url} class="images-box" />
        <div class="info">
          <span class="emp-name">${item.name}</span>
          <span class="emp-desiganation">${item.designation}</span>
          <span class="emp-country">${item.country}</span>
        </div>
      </div>
      <div class="profile-description">
       ${item.description}
      </div>
    </div>
        `;
  modalOverlay.addEventListener("click", closePopUp);
  modalOverlay.appendChild(popupContent);
};

window.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.style.display = "none";
  }
});

const carousel = document.getElementById("carousel");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentIndex = 0;
const cardsToShow = 4;

function renderCards() {
  carousel.innerHTML = "";
  const endIndex = Math.min(currentIndex + cardsToShow, data.length);
  for (let i = currentIndex; i < endIndex; i++) {
    const item = data[i];
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <div class="container-card">
        <div class="image-container">
        <img class="images-box" src=${item.img_url} alt="image"/></div>
          <div class="name">${item.name}</div>
          <div class="designation">${item.designation}</div>
          <div class="country">${item.country}</div>
        </div>
        `;
    carousel.appendChild(card);
    card.addEventListener("click", () => handleCardClick(item));
  }
}

function updateNavigation() {
  prevButton.disabled = currentIndex === 0;
  nextButton.disabled = currentIndex + cardsToShow >= data.length;
}

prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex -= cardsToShow;
    renderCards();
    updateNavigation();
  }
});

nextButton.addEventListener("click", () => {
  if (currentIndex + cardsToShow < data.length) {
    currentIndex += cardsToShow;
    renderCards();
    updateNavigation();
  }
});

renderCards();
updateNavigation();
