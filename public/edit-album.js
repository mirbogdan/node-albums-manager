const albumIDDOM = document.querySelector(".album-edit-id");
const albumNameDOM = document.querySelector(".album-edit-name");
const albumCoverDOM = document.querySelector(".album-edit-cover");
const albumCompletedDOM = document.querySelector(".album-edit-completed");
const editFormDOM = document.querySelector(".single-album-form");
const editBtnDOM = document.querySelector(".album-edit-btn");
const formAlertDOM = document.querySelector(".form-alert");
const params = window.location.search;
const id = new URLSearchParams(params).get("id");
let tempName;
let tempCover;

const showAlbum = async () => {
  try {
    const {
      data: { album },
    } = await axios.get(`/api/v1/albums/${id}`);
    const { acquired, _id, title, artist, image } = album;

    albumIDDOM.textContent = _id;
    albumNameDOM.value = `${title} - ${artist}`;
    albumCoverDOM.value = image;
    tempName = `${title} - ${artist}`;
    tempCover = image;
    if (acquired) {
      albumCompletedDOM.checked = true;
    }
  } catch (error) {
    console.log(error);
  }
};

showAlbum();

editFormDOM.addEventListener("submit", async (e) => {
  editBtnDOM.textContent = "Loading...";
  e.preventDefault();
  try {
    const albumName = albumNameDOM.value;
    const albumCompleted = albumCompletedDOM.checked;
    const albumCover = albumCoverDOM.value;
    const {
      data: { album },
    } = await axios.patch(`/api/v1/albums/${id}`, {
      title: albumName.split(" - ")[0],
      artist: albumName.split(" - ")[1],
      acquired: albumCompleted,
      image: albumCover,
    });

    if (album) {
      const { acquired, _id, title, artist, image } = album;
      albumIDDOM.textContent = _id;
      albumNameDOM.value = `${title} - ${artist}`;
      tempName = `${title} - ${artist}`;
      tempCover = image;
      if (acquired) {
        albumCompletedDOM.checked = true;
      }
    }
    formAlertDOM.style.display = "block";
    formAlertDOM.textContent = `success, edited album`;
    formAlertDOM.classList.add("text-success");
  } catch (error) {
    console.error(error);
    albumNameDOM.value = tempName;
    formAlertDOM.style.display = "block";
    formAlertDOM.innerHTML = `error, please try again`;
  }
  editBtnDOM.textContent = "Edit";
  setTimeout(() => {
    formAlertDOM.style.display = "none";
    formAlertDOM.classList.remove("text-success");
  }, 3000);
});
