/**
 * Created by Timmy on 2/18/2016.
 */
var global_result;
var top10 = [];

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
                artist.genre = (response.feed.entry[i].category.attribute.label);
                top10.push(artist);
            }
            console.log(top10);
        }
    });
    $.ajax({
        dataType: 'json',
        cache: false,
        url: 'http://s-apis.learningfuze.com/hackathon/vine/index.php?api_key=mt2yiXr6Gj&format=json&nojsoncallback=1&search_term=flo%20rida%20my%20house',
        success: function (response) {
            console.log('AJAX Success function called, with the following result:', response);
            //loops through up to 15 vines with search
            for (var i = 0; i < response.vines.length; i++) {
                //console logs the artist and song name of the top 10 itune songs
                $('body').append(response.vines[i].html);
            }
        }
    });
});