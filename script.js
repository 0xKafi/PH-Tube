const categoriesURL = "https://openapi.programming-hero.com/api/phero-tube/categories";
const videosURL = "https://openapi.programming-hero.com/api/phero-tube/videos"

const fetchAllVideos = () =>{
    fetch(videosURL)
    .then((response) => response.json())
    .then((data) => showVideos(data.videos));
}
fetchAllVideos();

const showVideos = (videosData) =>{
    videosData.forEach(videoData => {
        const videoThumbnail = videoData.thumbnail;
        const videoTitle = videoData.title;
        const videoCategory = videoData.category_id;

        const cardDiv = document.createElement("div");
        console.log(videoThumbnail)
        cardDiv.innerHTML = 
        `
        <div class="card bg-base-100 shadow-sm">
        <figure>
            <img class="object-cover h-50 w-full" src=${videoThumbnail} alt="Shoes" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">${videoTitle}</h2>
        </div>
        </div>
        `
        document.getElementById("video-section").append(cardDiv);
    });
}

document.getElementById("all-btn").addEventListener("click", ()=>{
    fetchAllVideos();
})