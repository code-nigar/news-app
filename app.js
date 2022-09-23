const apikey = "8259abd4eebe4a0096a976f53bbe6f75";
const form = document.getElementById("news-form");
const today = new Date();
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1;
let dd = today.getDate();
let currentDay = `${yyyy}-${mm}-${dd}`;
console.log(currentDay);

const getTopNews= async ()=>{
    let searchQuery = "trending right now";
    var url = `https://newsapi.org/v2/everything?q=${searchQuery}&from=${currentDay}&sortBy=popularity&apiKey=8259abd4eebe4a0096a976f53bbe6f75`;
     const response  = await fetch(url);
     const top_data = await response.json();
    //  console.log(top_data.articles.length);
    //  console.log("top_data :");
    //  console.log(top_data);
     return top_data;
}
const getLatestNews= async ()=>{
    let searchQuery = "latest news";
    var url = `https://newsapi.org/v2/everything?q=${searchQuery}&from=${currentDay}&sortBy=popularity&apiKey=8259abd4eebe4a0096a976f53bbe6f75`;
     const response  = await fetch(url);
     const latest_data = await response.json();
    //  console.log(latest_data.articles.length);
    //  console.log("latest_data :");
    //  console.log(latest_data);
    return latest_data;
}
const getBreakingNews= async ()=>{
    let searchQuery = "Breaking news";
    var url = `https://newsapi.org/v2/everything?q=${searchQuery}&from=${currentDay}&sortBy=popularity&apiKey=8259abd4eebe4a0096a976f53bbe6f75`;
     const response  = await fetch(url);
     const breaking_data = await response.json();
    //  console.log(breaking_data.articles.length);
    //  console.log("breaking_data :");
    //  console.log(breaking_data);
    return breaking_data;
}

window.onload = async () => {
    
    console.log("onload we have;");
    let topNews = await getTopNews();
    console.log("top news = "+topNews.articles);
    let latestNews = await getLatestNews();
    console.log("latest news = "+latestNews.articles);
    let breakingNews = await getBreakingNews();
    console.log("breaking news = "+breakingNews.articles);

    document.getElementById("top-headlines").innerHTML=`
    <h3>Top News</h3>
              <div class="d-flex flex-row justify-content-between align-baseline">
                <img src=${topNews.articles[0].urlToImage} alt="" style="width: 80px; object-fit:contain; height:100px;">
                <p class="px-2 my-auto headline-side">${(topNews.articles[0].title).slice(0,topNews.articles[i].title.lastIndexOf('-'))}</p>
              </div>
               <div class="d-flex flex-row justify-content-between align-center">
                <img src=${topNews.articles[1].urlToImage} alt="" style="width: 80px; object-fit:contain; height:100px;">
                <p class="px-2 my-auto headline-side">${(topNews.articles[1].title).slice(0,topNews.articles[i].title.lastIndexOf('-'))}</p>
              </div>
               <div class="d-flex flex-row justify-content-between align-center">
                <img src=${topNews.articles[2].urlToImage} alt="" style="width: 80px; object-fit:contain; height:100px;">
                <p class="px-2 my-auto headline-side">${(topNews.articles[2].title).slice(0,topNews.articles[i].title.lastIndexOf('-'))}</p>
              </div>
               <div class="d-flex flex-row justify-content-between align-center">
                <img src=${topNews.articles[3].urlToImage} alt="" style="width: 80px; object-fit:contain; height:100px;">
                <p class="px-2 my-auto headline-side">${(topNews.articles[3].title).slice(0,topNews.articles[i].title.lastIndexOf('-'))}</p>
              </div>
               <div class="d-flex flex-row justify-content-between align-center">
                <img src=${topNews.articles[4].urlToImage} alt="" style="width: 80px; object-fit:contain; height:100px;">
                <p class="px-2 my-auto headline-side">${(topNews.articles[4].title).slice(0,topNews.articles[i].title.lastIndexOf('-'))}</p>
              </div>
    `;

    document.getElementById("latest-headlines").innerHTML=`
    <h3>Latest News</h3>
              <div class="d-flex flex-row justify-content-between align-center">
                <img src=${latestNews.articles[0].urlToImage} alt="" style="width: 80px; object-fit:contain; height:100px;">
                <p class="px-2 my-auto headline-side">${(latestNews.articles[0].title).slice(0,latestNews.articles[i].title.lastIndexOf('-'))}</p>
              </div>
               <div class="d-flex flex-row justify-content-between align-center">
                <img src=${latestNews.articles[1].urlToImage} alt="" style="width: 80px; object-fit:contain; height:100px;">
                <p class="px-2 my-auto headline-side">${(latestNews.articles[1].title).slice(0,latestNews.articles[i].title.lastIndexOf('-'))}</p>
              </div>
               <div class="d-flex flex-row justify-content-between align-center">
                <img src=${latestNews.articles[2].urlToImage} alt="" style="width: 80px; object-fit:contain; height:100px;">
                <p class="px-2 my-auto headline-side">${(latestNews.articles[2].title).slice(0,latestNews.articles[i].title.lastIndexOf('-'))}</p>
              </div>
               <div class="d-flex flex-row justify-content-between align-center">
                <img src=${latestNews.articles[3].urlToImage} alt="" style="width: 80px; object-fit:contain; height:100px;">
                <p class="px-2 my-auto headline-side">${(latestNews.articles[3].title).slice(0,latestNews.articles[i].title.lastIndexOf('-'))}</p>
              </div>
               <div class="d-flex flex-row justify-content-between align-center">
                <img src=${latestNews.articles[4].urlToImage} alt="" style="width: 80px; object-fit:contain; height:100px;">
                <p class="px-2 my-auto headline-side">${(latestNews.articles[4].title).slice(0,latestNews.articles[i].title.lastIndexOf('-'))}</p>
              </div>
    `;

    document.getElementById("breakingnews-container").innerHTML = `
    <div class="card col-12 mb-3" style="width: 100%;">
                  <img class="card-img-top" src=${breakingNews.articles[0].urlToImage} alt="Card image cap">
                  <div class="card-body">
                    <h5 class="card-title">${breakingNews.articles[0].title} </h5>
                    <p class="card-text">${breakingNews.articles[0].description}</p>
                    <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
                  </div>
                </div>

                <div class="card text-white bg-secondary mb-3 col-12" style="max-width: 18rem;">
                  <div class="card-header">${breakingNews.articles[1].title} </div>
                  <div class="card-body">
                    <h5 class="card-title">${breakingNews.articles[1].source.name} </h5>
                    <p class="card-text">${breakingNews.articles[1].description} </p>
                  </div>
                </div>

                <div class="card bg-light mb-3 col-12" style="max-width: 18rem;">
                  <div class="card-header">${breakingNews.articles[2].title}</div>
                  <div class="card-body">
                    <h5 class="card-title">${breakingNews.articles[2].source.name}</h5>
                    <p class="card-text">${breakingNews.articles[2].description}</p>
                  </div>
                </div>
    `


};

const getNews= async (sq)=>{
    let searchQuery = sq;

    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();
    let currentDay = `${yyyy}-${mm}-${dd-1}`;
    console.log(currentDay);

    var url = `https://newsapi.org/v2/everything?q=${searchQuery}&from=${currentDay}&sortBy=popularity&apiKey=8259abd4eebe4a0096a976f53bbe6f75`;
     const response  = await fetch(url);
     const data = await response.json();
     console.log(data.articles.length);
     console.log(data);
     showData(data);
}

const showData = async(data) =>{

    if (data.cod == 404 || data.cod == 400){
        swal({
        icon:"error",
        title:"Error: "+data.cod,
        text: data.message+"\nTry again",
        timer: 2000
        });
    }else{
        let dataLength = data.articles.length;
        document.getElementById("content-container").innerHTML = `
        <div class="card text-center col-12 mb-3">
                <div class="card-header">
                    Featured
                </div>
                <div class="card-body bg-light">
                    <img class="card-img-top" src=${data.articles[0].urlToImage} alt="Card image cap" style="height: 200px; object-fit:cover">
                    <h5 class="card-title info-button text-info"><a>${(data.articles[0].title).slice(0,data.articles[i].title.lastIndexOf('-'))}</a></h5>
                    <div class="acrdn-panel mt-1" style="max-height: 0;overflow: hidden;transition: max-height 0.2s ease-out;">${data.articles[0].description}</div>
                </div> 
        </div>
        `;
        for(let i =1; i<dataLength; i++){
           
            let newsImage = data.articles[i].urlToImage;
            let newsTitle = (data.articles[i].title).slice(0,data.articles[i].title.lastIndexOf('-'));
            let newsSource = data.articles[i].source.name;
            let newsDescription = data.articles[i].description;
            let newsDate = ((data.articles[i].publishedAt).slice(0,data.articles[i].publishedAt.indexOf('T')));
            let newsTime =((data.articles[i].publishedAt).slice((data.articles[i].publishedAt.indexOf('T'))+1,data.articles[i].publishedAt.indexOf('Z')));

            document.getElementById("content-container").innerHTML += `
            <div class="card col-12 mb-3">
            <img class="card-img-top" src="${newsImage}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${newsTitle}</h5>
              <p class="card-text">${newsDescription}</p>
              <p class="card-text"><small class="text-muted">${newsSource}</small></p>
              <p class="card-text"><small class="text-muted">${newsDate } ${newsTime}</small></p>
            </div>
          </div>
            `;
        }
    }
}

//load data on search query
form.addEventListener("submit", function (event) {
    qWord = document.getElementById("query-word").value;
    console.log(qWord);
    getNews(qWord);
    event.preventDefault();
});

//accordion
var acc = document.getElementsByClassName("info-button");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}