const li_image = document.getElementById("images")
const images = [    "assets/images/header-background.jpg"]



images.forEach(element => {
    const img = document.createElement("img")
    img.src = element
    img.width = 100
    img.alt = "ets"
    img.height = 100

    li_image.appendChild(img)
});