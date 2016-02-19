//global variables
var top10Music = [];


//function to compare author of vines to each other, if the same, then remove duplicates
function noDupVines(arr) {
    var output = {};
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        if (arr[i] !== null) {
            output[arr[i].author_url] = arr[i];
        }
    }
    return output;
}

//function for when songs get clicked to hide songs, and show vines
function song_click() {
    $('.first_part').hide();
    $('#images_side').show();
}

//function for song on click to populate flickr photos
//@parameters: first noun after the hyphen to be sent to flickr for image lookup

function append_top10_list() {
    for (var i = 0; i < top10Music.length; i++) {
        append_songs(top10Music[i]);
    }
}

// /function to place song properly
function append_songs(song) {
    var songDiv = $('<div>');
    var songArt = $('<img>', {
        src: song.albumArt,
    });
    var songInfo = $('<p>', {
        text: song.name + ' - ' + song.song
    });

    $('.first_part').append(songDiv);
    $(songDiv).append(songArt).append(songInfo);
    $(songDiv).on('click', function () {
        //console.log(song.name + song.song);
        getVines(song.name, song.song);
    })
}
$("#main_body").addClass('animate');




