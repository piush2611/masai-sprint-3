$(document).ready(function () {
    $("#info").hide()
    var xhr = new XMLHttpRequest()
    var data = "";
    $(".btn").click(function () {
        var movieTitle = $(".movieTitle").val()
        xhr.open("GET", "http://www.omdbapi.com/?apikey=c12aaba4&t=" + movieTitle)
        xhr.send()
        xhr.onload = function () {
            if (movieTitle == "") {
                null
            }
            else {
                if (xhr.status == 200) {
                    data = JSON.parse(xhr.response)
                    $("#movieHead").text("Title : " + data["Title"])
                    $('.plot').text("Plot : " + data["Plot"])
                    $(".year").text("Released date : " + data["Released"])
                    $(".rated").text("Rated : " + data["Rated"])
                    $(".cast").text("Cast : " + data["Actors"])
                    $(".director").text("Director : " + data["Director"])
                    $(".rating").text("Rating : " + data["imdbRating"])
                    $(".boxOffice").text("Box Office Collection : " + data["BoxOffice"])
                    $(".language").text("Language : " + data["Language"])
                    $(".production").text("Production :  " + data["Production"])
                    var poster = data["Poster"]
                    $("#poster").attr('src', poster)
                    $("#info").show()
                    $(".movieTitle").val("")
                }
                else {
                    console.log("Error code is  : " + xhr.status)
                }
            }
        }
    })
});