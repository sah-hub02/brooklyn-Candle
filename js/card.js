
const thumbs = document.querySelectorAll(".thumb")
const mainImage = document.getElementById("mainImage")
thumbs.forEach(t => {
    t.addEventListener("click", () => {
        mainImage.src = t.src
    })
})
let qty = 1
const qtyText = document.getElementById("qty")

document.getElementById("plus").onclick = () => {
    qty++
    qtyText.innerText = qty
}

document.getElementById("minus").onclick = () => {
    if (qty > 1) {
        qty--
        qtyText.innerText = qty
    }
}
const acc = document.querySelectorAll(".accordion")

acc.forEach(btn => {
    btn.addEventListener("click", () => {
        const content = btn.parentElement.querySelector(".content")
        content.classList.toggle("hidden")
    })
})






const btn = document.getElementById("filterBtn");
const menu = document.getElementById("filterMenu");

btn.addEventListener("click", (e) => {
    e.stopPropagation();                                      // button click outside na lage
    menu.classList.toggle("hidden");
});

document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !btn.contains(e.target)) {   // agar click button ya menu ke andar nahi hai
        menu.classList.add("hidden");
    }
});
