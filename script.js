// Selects the navigation bar element.
let navbar = document.querySelector('.navbar');

/**
 * Toggles the navigation bar visibility when the menu button is clicked.
 * It also ensures the search form and cart are hidden.
 */
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

// Selects the search form element.
let searchForm = document.querySelector('.search-form');

/**
 * Toggles the search form visibility when the search button is clicked.
 * It also ensures the navigation bar and cart are hidden.
 */
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

// Selects the cart items container element.
let cartItem = document.querySelector('.cart-items-container');

/**
 * Toggles the cart visibility when the cart button is clicked.
 * It also ensures the navigation bar and search form are hidden.
 */
document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

/**
 * Hides the navigation bar, search form, and cart when the user scrolls the page.
 * This ensures a clean scrolling experience.
 */
window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}