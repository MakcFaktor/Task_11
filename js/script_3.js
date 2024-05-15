function changeImage() {
  let randomIndex = Math.floor(Math.random() * 9) + 1;

  const imagePath = "images/" + randomIndex + ".jpg";

  const randomImage = document.getElementById("randomImage");

  randomImage.src = imagePath;
}

const changeImageButton = document.getElementById("changeImageButton");

changeImageButton.addEventListener("click", changeImage);

changeImage();
