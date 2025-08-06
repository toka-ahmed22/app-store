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


const products = [
  {
    title: "Fitness Tracker",
    description: "Monitor your health and activity with this lightweight and waterproof tracker.",
    price: "$90.00",
    img: "photos/Fitness Tracker.jpg"
  },
  {
    title: "Mechanical Keyboard",
    description: "Durable keyboard with tactile switches and customizable lighting effects.",
    price: "$80.00",
    img: "photos/Mechanical Keyboard.jpg"
  },
  {
    title: "4K Monitor",
    description: "Stunning 27-inch 4K display with vivid colors and wide viewing angles.",
    price: "$170.00",
    img: "photos/4K Monitor.jpg"
  },
  {
    title: "Drone Camera",
    description: "Capture stunning aerial footage with this easy-to-fly drone and high-res camera.",
    price: "$100.00",
    img: "photos/Drone Camera.jpg"
  },
  {
    title: "Gaming Mouse",
    description: "High precision sensor and customizable buttons for the ultimate gaming experience.",
    price: "$50.00",
    img: "photos/Gaming Mouse.jpg"
  },
  {
    title: "Bluetooth Speaker",
    description: "Portable speaker with rich sound and waterproof design for outdoor use.",
    price: "$60.00",
    img: "photos/Bluetooth Speaker.jpg"
  },
  {
    title: "Smart Watch",
    description: "Stay connected and track your fitness with this sleek and durable smart watch.",
    price: "$130.00",
    img: "photos/Smart Watch.jpg"
  },
  {
    title: "Wireless Headphones",
    description: "Experience high-quality sound with noise cancellation and long battery life.",
    price: "$40.00",
    img: "photos/Wireless Headphones.jpg"
  }
];

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
        <a href="#" class="btn">buy now</a>
      </div>
    `;

    container.appendChild(card);
  });
}

renderCards();


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

