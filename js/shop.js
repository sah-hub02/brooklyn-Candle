// Dropdown Toggle
const sortBtn = document.getElementById("sortBtn");
const filterBtn = document.getElementById("filterBtn");
const sortMenu = document.getElementById("sortMenu");
const filterMenu = document.getElementById("filterMenu");

sortBtn.onclick = () => {
    sortMenu.classList.toggle("hidden");
    filterMenu.classList.add("hidden");
};

filterBtn.onclick = () => {
    filterMenu.classList.toggle("hidden");
    sortMenu.classList.add("hidden");
};


// Close dropdown outside click
window.addEventListener("click", (e) => {

    if (!sortBtn.contains(e.target) && !sortMenu.contains(e.target))
        sortMenu.classList.add("hidden");

    if (!filterBtn.contains(e.target) && !filterMenu.contains(e.target))
        filterMenu.classList.add("hidden");

});


// SORTING
const grid = document.getElementById("productGrid");
let products = Array.from(document.querySelectorAll(".product"));

document.querySelectorAll(".sort-option").forEach(option => {

    option.addEventListener("click", () => {

        let type = option.dataset.sort;
        let sorted = [...products];

        if (type === "low")
            sorted.sort((a, b) => a.dataset.price - b.dataset.price);

        if (type === "high")
            sorted.sort((a, b) => b.dataset.price - a.dataset.price);

        if (type === "new")
            sorted.reverse();

        grid.innerHTML = "";
        sorted.forEach(p => grid.appendChild(p));

    });

});


// FILTERING
document.querySelectorAll(".filter-option").forEach(option => {

    option.addEventListener("click", () => {

        let filter = option.dataset.filter;

        products.forEach(product => {

            if (filter === "all" || product.dataset.category === filter)
                product.style.display = "block";
            else
                product.style.display = "none";

        });

    });

});



