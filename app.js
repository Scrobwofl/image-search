console.log("Connected");

const input = document.getElementById("input");

form.addEventListener("submit", (event) => {
  let query = input.value;
  event.preventDefault();
  console.log(query);
  search(query);
});

function createImagesRow(arrayImages) {
  const extraItems = document.getElementById("extra-items");

  arrayImages.forEach((img) => {
    const imgTag = document.createElement("img");
    imgTag.src = img.urls.raw;
    extraItems.appendChild(imgTag);
    imgTag.classList.add("extra-items");
  });
}

async function search(queryParam) {
  const myKey = 
  let response = await fetch(
    `https://api.unsplash.com/search/photos?page=1&query=${queryParam}&client_id=${myKey}`
  );
  const data = await response.json();
  console.log("Downloaded", data);
  createImagesRow(data.results);
}
