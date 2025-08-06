document.addEventListener('DOMContentLoaded', () => {
  let searchBtn = document.querySelector('#search-btn');
  let searchBar = document.querySelector('.search-bar-container');
  let formBtn = document.querySelector('#login-btn');
  let loginForm = document.querySelector('.login-form-container');
  let formClose = document.querySelector('#form-close');
  let menu = document.querySelector('#menu-bar');
  let navbar = document.querySelector('.navbar');
  let videoBtn = document.querySelectorAll('.vid-btn');
  let videoSlider = document.querySelector('#video-slider');

  window.onscroll = () => {
    searchBtn?.classList.remove('fa-times');
    searchBar?.classList.remove('active');
    menu?.classList.remove('fa-times');
    navbar?.classList.remove('active');
    loginForm?.classList.remove('active');
  };

  if (menu && navbar) {
    menu.addEventListener('click', () => {
      menu.classList.toggle('fa-times');
      navbar.classList.toggle('active');
    });
  }

  if (searchBtn && searchBar) {
    searchBtn.addEventListener('click', () => {
      searchBtn.classList.toggle('fa-times');
      searchBar.classList.toggle('active');
    });
  }

  if (formBtn && loginForm) {
    formBtn.addEventListener('click', () => {
      loginForm.classList.add('active');
    });
  }

  if (formClose && loginForm) {
    formClose.addEventListener('click', () => {
      loginForm.classList.remove('active');
    });
  }

  videoBtn.forEach(btn => {
    btn.addEventListener('click', () => {
      let currentActive = document.querySelector('.controls .active');
      if (currentActive) currentActive.classList.remove('active');
      btn.classList.add('active');
      let src = btn.getAttribute('data-src');
      if (videoSlider) videoSlider.src = src;
    });
  });
});


let products = [];
const container = document.getElementById("card-container");


function renderCards() {
  container.innerHTML = "";
  products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("box");

    card.innerHTML = `
      <img src="${product.img}" alt="${product.title}">
      <div class="content">
        <h3>${product.title}</h3>
        <p>${product.description}</p>
        <div class="price">${product.price}</div>
        <a href="#" class="btn">Buy Now</a>
      </div>
    `;

    container.appendChild(card);
  });
}


fetch("products.json")
  .then(response => response.json())
  .then(data => {
    products = data;
    renderCards();
  })
  .catch(error => {
    console.error("Error loading product data:", error);
  });


document.getElementById("add-btn").addEventListener("click", () => {
  const newProduct = {
    title: "New Product",
    description: "This is a dynamically added card.",
    price: "$99.00",
    img: "photos/Fitness Tracker.jpg"
  };
  products.push(newProduct);
  renderCards();
});


document.getElementById("delete-btn").addEventListener("click", () => {
  products.pop();
  renderCards();
});


