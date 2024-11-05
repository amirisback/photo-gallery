const ul = document.getElementById("ul_image")
const images = [
    "assets/images/header-background.jpg",
    "assets/images/header-background.jpg",
    "assets/images/header-background.jpg",
    "assets/images/header-background.jpg",
    "assets/images/header-background.jpg",
]

images.forEach((element, index) => {
    const li = document.createElement("li")
    const a = document.createElement("a")
    const figure = document.createElement("figure")
    const figcaption = document.createElement("figcaption")
    const img = document.createElement("img")

    figcaption.innerText = `${element} ${index}`

    img.src = element

    figure.appendChild(img)
    figure.appendChild(figcaption)
    a.appendChild(figure)
    li.appendChild(a)
    ul.appendChild(li)
});