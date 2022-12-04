$(document).ready(function() {
    let myAPIKey = "0946b628138388ac70a5b0e5415fce8c";
    let recentSearchCityLi = [];
    $('.search-button').click(function() {
        let city = $("#search-box").val();
        console.log(city)
        let url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + myAPIKey;
        fetch(url).then(function (response) {
            return response.json();
        })
        .then(function (data){
            console.log(data);
        })
        recentSearchCityLi.push(city)
        console.log(recentSearchCityLi)
        localStorage.setItem("recentSearchCityKey",recentSearchCityLi)
    })

})

