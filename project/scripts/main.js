// ARRAY OF OBJECTS ✅
const meals = [
  { name: "Spaghetti", price: 5 },
  { name: "Rice & Chicken", price: 7 },
  { name: "Sandwich", price: 3 }
];

// FUNCTION 1: Display Meals ✅
function displayMeals(mealList) {
  const container = document.querySelector("#meals");

  if (!container) return;

  container.innerHTML = "";

  mealList.forEach(meal => {
    container.innerHTML += `
      <div class="meal">
        <h3>${meal.name}</h3>
        <p>Price: $${meal.price}</p>
      </div>
    `;
  });
}

// FUNCTION 2: Filter Meals (CONDITIONAL) ✅
function filterMeals() {
  const cheapMeals = meals.filter(meal => meal.price <= 5);
  displayMeals(cheapMeals);
}

// EVENT LISTENER ✅
const cheapBtn = document.querySelector("#cheapBtn");

if (cheapBtn) {
  cheapBtn.addEventListener("click", filterMeals);
}

// LOAD ALL MEALS FIRST
displayMeals(meals);

// =====================
// REVIEWS + LOCAL STORAGE ✅
// =====================

const form = document.querySelector("#reviewForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.querySelector("#name").value;
    const reviewText = document.querySelector("#review").value;

    const review = {
      name: name,
      text: reviewText
    };

    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

    reviews.push(review);

    localStorage.setItem("reviews", JSON.stringify(reviews));

    displayReviews();

    form.reset();
  });
}

// FUNCTION 3: Display Reviews ✅
function displayReviews() {
  const container = document.querySelector("#reviewList");

  if (!container) return;

  let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

  container.innerHTML = "";

  reviews.forEach(r => {
    container.innerHTML += `
      <p><strong>${r.name}</strong>: ${r.text}</p>
    `;
  });
}

// LOAD REVIEWS
displayReviews();
// IMAGE CREDITS ARRAY (OBJECTS) ✅
const imageCredits = [
  {
    title: "Spaghetti Dish",
    source: "Unsplash",
    url: "https://unsplash.com/"
  },
  {
    title: "Chicken and Rice",
    source: "Pexels",
    url: "https://www.pexels.com/"
  },
  {
    title: "Sandwich Meal",
    source: "Pixabay",
    url: "https://pixabay.com/"
  }
];

// FUNCTION: DISPLAY CREDITS ✅
function displayCredits() {
  const list = document.querySelector("#creditsList");

  if (!list) return;

  list.innerHTML = "";

  imageCredits.forEach(img => {
    list.innerHTML += `
      <li>
        ${img.title} – 
        <a href="${img.url}" target="_blank">${img.source}</a>
      </li>
    `;
  });
}

// CALL FUNCTION
displayCredits();

{
  title: "Pasta with Tomato Sauce",
  source: "Unsplash",
  url: "https://unsplash.com/photos/abc123"
}