$(document).ready(function() {
    let currentDate = moment().format('L').valueOf();
    if (localStorage.getItem("city") != null) { recentSearchCityLi = JSON.parse(localStorage.getItem("city")); } // Create local storage for storing the recent search cities list
    // fetch 
    function getWeatherFocast(city){ // Creating function handles showing cities' weather data 
        let myAPIKey = "0946b628138388ac70a5b0e5415fce8c";
        let url1 = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid="+ myAPIKey;
        fetch(url1).then(function (response) { // fetch the current weather data 
            return response.json();
        })
        .then(function (data){
            let url2 = "https://api.openweathermap.org/data/2.5/forecast?lat=" + data.coord.lat + "&lon=" + data.coord.lon + "&appid=" + myAPIKey;
            console.log(data);
            fetch(url2).then(function(response){ // fetch the weather forcast data 
                return response.json();
            })
            .then(function(data2){
                console.log(data2)
            })
        })
    }
    getWeatherFocast(recentSearchCityLi[recentSearchCityLi.length-1]) // Calling the function 
    $('#recentSearchedCityForecast').text(recentSearchCityLi[recentSearchCityLi.length-1]+' '+'('+currentDate+')')
    $('.search-button').click(function() {
        let city = $("#search-box").val();
       getWeatherFocast(city);
        // Create local storage has value of  recent search city resulta into a list. 
        recentSearchCityLi.push(city)
        console.log(recentSearchCityLi)
        while (recentSearchCityLi.length > 8){
            recentSearchCityLi.shift()
        }
        $('#list-recent-search-city-result').empty(); 
        for (let i=0; i<recentSearchCityLi.length;i++){
            recentSearchCityResult = $('<button/>', {
                text: recentSearchCityLi[i]  ,
                id: 'recentSearchCityButton' + i,
            });
            $('#list-recent-search-city-result').append(recentSearchCityResult)
        }
        localStorage.setItem("city", JSON.stringify(recentSearchCityLi));
        $('#recentSearchedCityForecast').text(recentSearchCityLi[recentSearchCityLi.length-1]+' '+'('+currentDate+')')
    })
    for (let i=0; i<recentSearchCityLi.length;i++){
        recentSearchCityResult = $('<button/>', {
            text: recentSearchCityLi[i]  ,
            id: 'recentSearchCityButton' + i,
        });
        $('#list-recent-search-city-result').append(recentSearchCityResult)
    }
})



