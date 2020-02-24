var xhr = new XMLHttpRequest()
var data = "";
var data2 = ''
var results = $("#results")

$(document).ready(function () {

    $("#strictSearch").click(function () {
        return searchParticularMovie()
    })

    $("#normalSearch").click(function () {
        return searchMultipleMovies()
    })

});

function searchParticularMovie() {
    var movieTitle = $(".movieTitle").val()
    if (movieTitle == "") {
        alert('Please type in the movie name ')
    }
    else {
        xhr.open("GET", "http://www.omdbapi.com/?apikey=c12aaba4&t=" + movieTitle)
        xhr.send()
        xhr.onload = function () {
            if (movieTitle == "") {
                null
            }
            else {
                if (xhr.status == 200) {
                    data = JSON.parse(xhr.response)
                    if (data['Response'] == "False") {
                        alert(data['Error'])
                    }
                    else {
                        results.html('')
                        var movieDetail = `<div class="col-12 col-md-6">
                                                    <img src=${data['Poster']} alt="Movie poster" class="img-fluid" />
                                               </div>
                                               <div class="col-12 col-md-6">
                                                    <p class='font-weight-bold'>${data['Title']}</p>
                                                    <p class='font-weight-bold'>${data['Plot']}</p>
                                                    <p class='font-weight-bold'>${data['Released']}</p>
                                                    <p class='font-weight-bold'>${data['Rated']}</p>
                                                    <p class='font-weight-bold'>${data['Actors']}</p>
                                                    <p class='font-weight-bold'>${data['Director']}</p>
                                                    <p class='font-weight-bold'>${data['imdbRating']}</p>
                                                    <p class='font-weight-bold'>${data['BoxOffice']}</p>
                                                    <p class='font-weight-bold'>${data['Language']}</p>
                                                    <p class='font-weight-bold'>${data['Production']}</p>
                                               </div>`
                        results.append(movieDetail)
                        $(".movieTitle").val("")
                    }
                }
                else {
                    console.log("Error code is  : " + xhr.status)
                }
            }
        }
    }

}

function searchMultipleMovies() {
    var movieTitle2 = $('.movieTitle2').val()
    if (movieTitle2 == '') {
        alert("Please fill in the movie name")
    }
    else {
        xhr.open("GET", "http://www.omdbapi.com/?apikey=c12aaba4&s=" + movieTitle2)
        xhr.send()
        xhr.onload = function () {
            if (xhr.status == 200) {
                results.html('')
                data2 = JSON.parse(xhr.response)
                if (data2['Response'] == "False") {
                    alert(data2['Error'])
                }
                else {
                    data2 = data2['Search']
                    for (var i = 0; i < data2.length; i++) {
                        var movie = `<div class="col-12 col-md-6 col-lg-4">
                                                <img src=${data2[i].Poster} alt="movie poster" class="img-fluid" />
                                                <p class="font-weight-bold">${data2[i].Title}</p>
                                             </div>`
                        results.append(movie)
                    }
                }
                $('.movieTitle2').val('')
            }
        }
    }
}