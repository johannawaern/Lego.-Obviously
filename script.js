// Our variables
const key = "1b679073457842c582f0e77ee085d1e1"
const url = `https://newsapi.org/v2/everything?excludeDomains=mashable.com,gizmodo.com,theverge.com&q=+lego&language=en&sortBy=relevancy&apiKey=${key}`
const secondUrl = `http://api.open-notify.org/astros.json`

/*
const showAlert= () => {
  alert ("pay first, read later")
}*/

// Our main function
const recievedNews = (newsdata) => {


	// For each article object from the API, we create a new div in HTML.
    newsdata.articles.forEach((article, index) => {

        if (index === 0) {
          document.querySelector(".topHero").innerHTML +=
          `<div class="hero">
          <img src="${article.urlToImage}"/>
          <h2>${article.title}</h2>
          <a class=button href=${article.url}>read full story </a>
          </div>`
        }

        else {
					//Here we create and add html elements to our html file
					document.querySelector(".allNews").innerHTML +=
            `<div class="news">
            <img src="${article.urlToImage}"/>
            <h3>${article.title}</h3>
            <a class=button href=${article.url}>read full story </a>
            </div>`
        }

    })

}


const recievedSpaceman = (spacedata) => {


	// For each article object from the API, we create a new div in HTML.
    spacedata.articles.forEach((article) => {

					//Here we create and add html elements to our html file
					document.querySelector(".allSpace").innerHTML +=
            `<div class="space">
            <p>${people.craft}</p>
            <p>${people.name}</p>
            </div>`

    })
}


//Fetch is a built in function in Javascript, it gets the data from the API and tranforms it into Javascript objects – JSON data.
fetch(url)
  .then(response => response.json())
  .then(recievedNews)

  fetch(secondUrl)
    .then(response => response.json())
    .then(recievedSpaceman)
