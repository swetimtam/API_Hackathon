
var tweets_array = []; //array to keep the tweets
var output;

//function on load to pre-populate songs
$(document).ready(function(){
    //fetch_tweets();
    //append_tweets();

    $('#mainBody').click(function(){
        song_click();
    });
});

function cleanVines (arr){
    var output = {};
    var len = arr.length;
    for(var i = 0; i < len; i++){
        if(arr[i] !== null){
            output[arr[i].author_url] = arr[i];
        }
    }
    return output;
}

//function for when tweets get clicked to hide tweets, and show images
function song_click(){
    $('.first_part').hide();
    $('#images_side').show();
    append_vine();
}

//function to clear songs
function clear_songs(){
    $('#mainBody p').empty();
};
function clear_song_array(){
  song_array = [];
};
//function to fetch songs and populate the song_array
//globals used: song_array

function fetch_songs(){
    add_songs_to_array();
}

//function to add song to the tweet array
function add_songs_to_array(){
    var array_index=song_array.length;
    var song={
        text:'',
        image_search_word:'',
        array_index:array_index
    };
}

//function for song on click to populate flickr photos
//@parameters: first noun after the hyphen to be sent to flickr for image lookup

//function to place song properly
function append_songs(){
    for(var i=0;i<song_array.length;i++){
        var song = $('<p>',{
            text:song_array[i].text
        });
        $('.first_part').eq([i]).append(song);
    }

}

//function to fetch photos
function fetch_photos(){

    add_vine_to_array();
}

//function to add photos to the photo_array
function add_vine_to_array(){
    var array_index=vine_array.length;
    var vine={
        url:''
    };
    vine_array.push(vine);
}

//function to clear photos area
$('#images_side').empty();

//function to clear photo array
function clear_photo_array(){
    vine_array = [];
}

//function to place images properly
function append_vine(){
    for(var i=0;i<vine_array.length;i++){
        var image = $('<img>',{
            src:vine_array[i].url
        });
        var testimg = image.addClass('img-responsive');
        $('.image').eq([i]).append(testimg);
    }
}





