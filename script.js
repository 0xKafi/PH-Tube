const categoriesURL = "https://openapi.programming-hero.com/api/phero-tube/categories";
const videosURL = "https://openapi.programming-hero.com/api/phero-tube/videos"

const fetchAllVideos = () =>{
    fetch(videosURL)
    .then((response) => response.json())
    .then((data) => showVideos(data.videos));
}
fetchAllVideos();

const showVideos = (video) =>{
    video.forEach(video => {
        const videoCategory = video.category_id;
        // {
        //     "category_id": "1003",
        //     "video_id": "aaae",
        //     "thumbnail": "https://i.ibb.co/Yc4p5gD/inside-amy.jpg",
        //     "title": "Inside Amy Schumer",
        //     "authors": [
        //     {
        //     "profile_picture": "https://i.ibb.co/YD2mqH7/amy.jpg",
        //     "profile_name": "Amy Schumer",
        //     "verified": ""
        //     }
        //     ],
        //     "others": {
        //     "views": "3.6K",
        //     "posted_date": "15147"
        //     },
        console.log(video.authors[0].profile_name, 1)

        const cardDiv = document.createElement("div");
        cardDiv.innerHTML = 
        `
                <div class="card bg-base-100 ">
                    <figure class="relative">
                        <img class="object-cover h-50 w-full rounded-md" src="${video.thumbnail}" alt="Shoes" />
                        <p class="absolute text-white bg-gray-900 px-2 py-1 rounded-sm bottom-2 right-2 text-sm font-semibold text-center">3hrs 50min ago</p>
                    </figure>
                    <div class="card-body flex flex-row px-0 items-start">
                        <div class="avatar pt-1">
                            <div class="ring-primary ring-offset-base-100 w-8 rounded-full ring ring-offset-2">
                              <img src=${video.authors[0].profile_picture}/>
                            </div>
                          </div>
                        <div>
                            <h2 class="card-title ml-2 mb-1">${video.title}</h2>
                            <div class="flex items-center justify-start">
                                <span class="mx-2 text-[#171717B3] mb-1">${video.authors[0].profile_name}</span>
                                <img class="h-4" src="https://img.icons8.com/?size=100&id=2AuMnRFVB9b1&format=png&color=000000" alt="">
                            </div>
                            <p class="ml-2 text-[#171717B3] mb-1">${video.others.views} views</p>
                        </div>
                    </div>
                </div>
        `
        document.getElementById("video-section").append(cardDiv);
    });
}

document.getElementById("all-btn").addEventListener("click", ()=>{
    fetchAllVideos();
})