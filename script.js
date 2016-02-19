
var tweets_array = []; //array to keep the tweets
var output;
//var x;

//function on load to pre-populate songs
$(document).ready(function(){

    $('#mainBody').click(function(){
        song_click();
    });

    var data = {
        search_term:'Flo Rida',
        count: 50
    };


    $.ajax({
        dataType:'json',
        url:'http://s-apis.learningfuze.com/hackathon/vine/index.php',
        data: data,
        mathod: 'GET',
        cache: false,
        success: function(response){
            console.log("success", response);
            output = response;
            var test = cleanVines(output.vines);
            console.log("This is the clean list: ", test);

            for(var k in test){
                if(test.hasOwnProperty(k)){
                    $('body').append(test[k].html);
                }
            }
        },
        error: function(response){
            console.log("error message");
        }

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

var song_array = [{text:'cats are great',image_search_word:'cats',array_index:0},{text:'dogs are great',image_search_word:'dogs',array_index:1},{text:'monkeys are great',image_search_word:'monkeys',array_index:2},{text:'wombats are great',image_search_word:'wombats',array_index:3},{text:'horses are great',image_search_word:'horses',array_index:4}]; //array to keep the tweets
var vine_array = [{url:'https://pbs.twimg.com/profile_images/447374371917922304/P4BzupWu.jpeg'},{url:'http://cdn.earthporm.com/wp-content/uploads/2014/07/cute-bunnies-tongues-6.jpg'},{url:'https://i.ytimg.com/vi/2hh9lWK-iwc/maxresdefault.jpg'},{url:'http://cdn.earthporm.com/wp-content/uploads/2014/07/cute-bunnies-tongues-1.jpg'},{url:'http://www.fuzzfeed.com/wp-content/uploads/2015/10/cute-baby-bunny-wallpaper-hq-mjhek.jpg'}]; //array to keep photos
var non_search_words=['a','an','the','them','if','about','above','across','after','against','along','among','apart','around','as','at','because','before','behind','be','below','beneath','beside','between','beyond','but','by','down','during','except','for','from','in','inside','into','like','near','next','of','off','on','onto','out','outside','over','past','regarding','round','since','through','throughout','till','to','toward','under','underneath','unlike','until','up','upon','with','within','without'];

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





