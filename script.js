const images = document.querySelectorAll(".item .img img");

const colorArray = [
  "#B69671",
  "#6D7783",
  "#B9A288",
  "#B5B8AC",
  "#A2B0B1",
  "#5F5F5F",
  "#7E98B1",
  "#857F71",
  "#A6A6A6",
  "#B5B4AB",
  "#503D31",
  "#B1A591",
  "#616161",
  "#C29651",
  "#5E6471",
  "#B0A89D",
];

function handleImageClick(event) {
  const imgSrc = event.currentTarget.src;

  const matchResult = imgSrc.match(/(\d+)\.jpeg/);

  if (matchResult) {
    const imgNumber = matchResult[1];
    document.body.style.backgroundColor = colorArray[parseInt(imgNumber) - 1];

    const newImgSrc = `https://cdn.glitch.global/86a230a4-d73f-4660-b7e6-eab92c2363dd/${imgNumber}.jpeg`;

    const previewContainer = document.querySelector(".preview-container");

    const currentLastImg = previewContainer.querySelector("img:last-child");

    if (currentLastImg) {
      gsap.to(currentLastImg, { duration: 1, scale: 1.5, left: "-50%" });
    }

    const newImg = document.createElement("img");
    newImg.src = newImgSrc;
    newImg.style.position = "absolute";
    newImg.style.right = "-100%";

    previewContainer.appendChild(newImg);

    gsap.to(newImg, { duration: 1, right: "0%" });
  } else {
    console.error("Image source format is not as expected.");
  }
}

images.forEach((img) => {
  img.addEventListener("click", handleImageClick);
});
