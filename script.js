$(document).ready(function() {
    let recentSearchCityLi = [];
    if (localStorage.getItem("city") != null) { recentSearchCityLi = JSON.parse(localStorage.getItem("city")); }
    console.log(recentSearchCityLi)
    let myAPIKey = "0946b628138388ac70a5b0e5415fce8c";
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
        // Create local storage has value of  recent search city resulta into a list. 
        recentSearchCityLi.push(city)
        console.log(recentSearchCityLi)
        localStorage.setItem("city", JSON.stringify(recentSearchCityLi));
    })
    for (let i=0; i<recentSearchCityLi.length;i++){
        recentSearchCityResult = $('<button/>', {
            text: recentSearchCityLi[i]  ,
            id: 'recentSearchCityButton' + i,
        });
        $('#list-recent-search-city-result').append(recentSearchCityResult)
    }
})


