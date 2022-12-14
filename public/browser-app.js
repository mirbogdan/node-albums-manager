const albumsDOM = document.querySelector(".albums");
const title = document.querySelector("#title");
const loadingDOM = document.querySelector(".loading-text");
const formDOM = document.querySelector(".albums-form");
const albumIputDOM = document.querySelector(".name");
const artistInputDOM = document.querySelector(".artist");
const coverInputDOM = document.querySelector("#cover");
const formAlertDOM = document.querySelector(".form-alert");
let image;

// Upload cover image file

coverInputDOM.addEventListener("change", async (e) => {
  const coverFile = e.target.files[0];
  const formData = new FormData();
  formData.append("cover", coverFile);
  try {
    const {
      data: {
        cover: { src },
      },
    } = await axios.post("/api/v1/albums/uploads", formData, {
      headers: { "Content-Type": "multipart/form-data'}}" },
    });
    image = src;
    console.log(src);
  } catch (e) {
    image = undefined;
    console.log(e);
  }
});

// Load albums from /api/albums
const showAlbums = async () => {
  loadingDOM.style.visibility = "visible";
  try {
    const {
      data: { albums },
    } = await axios.get("/api/v1/albums");
    title.innerHTML = `Vinyl Albums Manager. Total: ${albums.length}`;
    if (albums.length < 1) {
      albumsDOM.innerHTML =
        '<h5 class="empty-list">No albums in your list</h5>';
      loadingDOM.style.visibility = "hidden";
      return;
    }
    const allAlbums = albums
      .map((album) => {
        const { acquired, _id, title, artist, image } = album;
        return `<div class="single-album ${acquired && "album-completed"}">
                <h5><span><i class="far fa-check-circle"></i>
                </span>${title} - ${artist}</h5>
                <div class="album-links">
                <img class="album-cover" src=${image} />
                <!-- edit link -->
                <a href="album.html?id=${_id}"  class="edit-link">
                <i class="fas fa-edit"></i>
                </a>
                <!-- delete btn -->
                <button type="button" class="delete-btn" data-id="${_id}">
                <i class="fas fa-trash"></i>
                </button>
                </div>
                </div>`;
      })
      .join("");
    albumsDOM.innerHTML = allAlbums;
  } catch (error) {
    albumsDOM.innerHTML =
      '<h5 class="empty-list">There was an error, please try later....</h5>';
  }
  loadingDOM.style.visibility = "hidden";
};

showAlbums();

// delete album /api/albums/:id

albumsDOM.addEventListener("click", async (e) => {
  const el = e.target;
  if (el.parentElement.classList.contains("delete-btn")) {
    loadingDOM.style.visibility = "visible";
    const id = el.parentElement.dataset.id;
    try {
      await axios.delete(`/api/v1/albums/${id}`);
      showAlbums();
    } catch (error) {
      console.log(error);
    }
  }
  loadingDOM.style.visibility = "hidden";
});

// form to create a product

formDOM.addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = albumIputDOM.value;
  const artist = artistInputDOM.value;

  console.log(title, image);
  try {
    await axios.post("/api/v1/albums", { title, artist, image });
    showAlbums();
    albumIputDOM.value = "";
    artistInputDOM.value = "";
    coverInputDOM.value = "";
    image = undefined;
    formAlertDOM.style.display = "block";
    formAlertDOM.textContent = `success, album added`;
    formAlertDOM.classList.add("text-success");
  } catch (error) {
    formAlertDOM.style.display = "block";
    formAlertDOM.innerHTML = `error, please try again`;
  }
  setTimeout(() => {
    formAlertDOM.style.display = "none";
    formAlertDOM.classList.remove("text-success");
  }, 3000);
});
