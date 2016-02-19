/**
 * Created by Timmy on 2/18/2016.
 */

var top10Music= [];


function getVines(name,song) {
    var data = {
        search_term: name+" "+song
    };
    $.ajax({
        dataType: 'json',
        url: 'http://s-apis.learningfuze.com/hackathon/vine/index.php',
        data: data,
        cache: false,
        success: function (response) {
            console.log("success", response);
            output = response;
            var test = noDupVines(output.vines);
            console.log("This is the clean list: ", test);

            for (var k in test) {
                if (test.hasOwnProperty(k)) {
                    // appending magic happens here
                    $('.first_part').append(test[k].html);
                }
            }
        },
        error: function (response) {
            console.log("error message");
        }

    })
}

$(document).ready(function () {

        $("body").addClass('animate');
        console.log('testing');

    $.ajax({
        dataType: 'json',
        cache: false,
        url: 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topsongs/limit=10/json',
        success: function (response) {
            console.log('AJAX Success function called, with the following result:', response);
            //loops through every song in top 10 for info and adds it to an array of objects
            for (var i = 0; i < response.feed.entry.length; i++) {
                var artist = {};
                var ajaxObj = response.feed.entry[i];
                //console logs the artist and song name of the top 10 itune songs
                artist.name = (ajaxObj['im:artist'].label);
                artist.song = (ajaxObj['im:name'].label);
                artist.albumArt = (ajaxObj['im:image'][2].label);
                artist.genre = (ajaxObj.category.attributes.label);
                artist.release = (ajaxObj['im:releaseDate'].attributes.label);
                top10Music.push(artist);
                append_songs(top10Music[i], i);
            }
        },
        error: function (response) {
            console.log("error message");
        }
    });
});

