const meals = [
  {
    name: "Spaghetti",
    price: 5,
    image: "images/spaghetti.jpg",
    credit: {
      source: "Unsplash",
      url: "https://unsplash.com/"
    }
  },
  {
    name: "Rice & Chicken",
    price: 7,
    image: "images/chicken-rice.jpg",
    credit: {
      source: "Pexels",
      url: "https://www.pexels.com/"
    }
  },
  {
    name: "Sandwich",
    price: 3,
    image: "images/sandwich.jpg",
    credit: {
      source: "Pixabay",
      url: "https://pixabay.com/"
    }
  }
];



function displayMeals(mealList) {
  const container = document.querySelector("#meals");

  if (!container) return;

  container.innerHTML = "";

  mealList.forEach(meal => {
    container.innerHTML += `
      <div class="meal">
        <img src="${meal.image}" alt="${meal.name}" loading="lazy">
        <h3>${meal.name}</h3>
        <p>Price: $${meal.price}</p>
        <p class="credit">
          Image: 
          <a href="${meal.credit.url}" target="_blank">
            ${meal.credit.source}
          </a>
        </p>
      </div>
    `;
  });
}



function filterMeals() {
  const cheapMeals = meals.filter(meal => meal.price <= 5);
  displayMeals(cheapMeals);
}




function displayCredits() {
  const list = document.querySelector("#creditsList");

  if (!list) return;

  list.innerHTML = "";

  meals.forEach(meal => {
    list.innerHTML += `
      <li>
        ${meal.name} image – 
        <a href="${meal.credit.url}" target="_blank">
          ${meal.credit.source}
        </a>
      </li>
    `;
  });
}



function displayReviews() {
  const container = document.querySelector("#reviewList");

  if (!container) return;

  const reviews = JSON.parse(localStorage.getItem("reviews")) || [];

  container.innerHTML = "";

  reviews.forEach(r => {
    container.innerHTML += `
      <p><strong>${r.name}</strong>: ${r.text}</p>
    `;
  });
}



function handleReviewSubmit(e) {
  e.preventDefault();

  const name = document.querySelector("#name").value;
  const text = document.querySelector("#review").value;

  const newReview = { name, text };

  const reviews = JSON.parse(localStorage.getItem("reviews")) || [];

  reviews.push(newReview);

  localStorage.setItem("reviews", JSON.stringify(reviews));

  displayReviews();

  document.querySelector("#reviewForm").reset();
}



document.addEventListener("DOMContentLoaded", () => {

  // Meals page
  displayMeals(meals);

  const cheapBtn = document.querySelector("#cheapBtn");
  if (cheapBtn) {
    cheapBtn.addEventListener("click", filterMeals);
  }

  // Reviews page
  const form = document.querySelector("#reviewForm");
  if (form) {
    form.addEventListener("submit", handleReviewSubmit);
  }

  displayReviews();

  // References page
  displayCredits();
});