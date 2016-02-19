/**
 * Created by Timmy on 2/18/2016.
 */

var top10SongsInfo = [];
var test;

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


    $.ajax({
        url:'https://api.flickr.com/services/rest?method=flickr.photos.search&api_key=6abbc58914aa0ad192b80428161ef908&format=json&nojsoncallback=1&page=1&per_page=6',
        dataType:'json',
        method:'get',
        text: 'adele',
        success: function(response){
            test = response;
            console.log(response.photos.photo[0].id);
            $("img").attr("src","https://farm2.staticflickr.com/1599/24482774874_ef26a8623c.jpg");
        },
        error: function(response){
            console.log("error message");
        }

    });
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
               top10SongsInfo.push(artist);
            }

            console.log(top10SongsInfo);
            append_top10_list();
        }
    });
});

//    $.ajax({
//        dataType:'json',
//        url:'http://s-apis.learningfuze.com/hackathon/vine/index.php',
//        data: data,
//        cache: false,
//        success: function(response){
//            console.log("success", response);
//            output = response;
//            var test = cleanVines(output.vines);
//            console.log("This is the clean list: ", test);
//
//            for(var k in test){
//                if(test.hasOwnProperty(k)){
//                    $('#images_side').append(test[k].html);
//                }
//            }
//        },
//        error: function(response){
//            console.log("error message");
//        }
//
//});
