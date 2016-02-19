/**
 * Created by Timmy on 2/18/2016.
 */
var global_result;
var top10 = [];
var data = {};
function getVines(name,song) {
    data = name + " " + song;
    $.ajax({
        dataType: 'json',
        url: 'http://s-apis.learningfuze.com/hackathon/vine/index.php',
        data: data,
        cache: false,
        success: function (response) {
            console.log("success", response);
            output = response;
            var test = cleanVines(output.vines);
            console.log("This is the clean list: ", test);

            for (var k in test) {
                if (test.hasOwnProperty(k)) {
                    // appending magic happens here
                    $('body').append(test[k].html);
                }
            }
        },
        error: function (response) {
            console.log("error message");
        }

    })
}
$(document).ready(function () {
    $.ajax({
        dataType: 'json',
        cache: false,
        url: 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topsongs/limit=10/json',
        success: function (response) {
            console.log('AJAX Success function called, with the following result:', response);
            //loops through every song in top 10 for info and adds it to an array of objects
            for (var i = 0; i < response.feed.entry.length; i++) {
                var artist = {};
                //console logs the artist and song name of the top 10 itune songs
                artist.name = (response.feed.entry[i]['im:artist'].label);
                artist.song = (response.feed.entry[i]['im:name'].label);
                artist.albumArt = (response.feed.entry[i]['im:image'][2].label);
                artist.genre = (response.feed.entry[i].category.attributes.label);
                top10.push(artist);
            }

            console.log(top10);
            append_top10_list();
        }
    })


});
