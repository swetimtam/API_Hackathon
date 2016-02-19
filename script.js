var tweets_array = [{text:'cats are great',image_search_word:'cats',array_index:0},{text:'dogs are great',image_search_word:'dogs',array_index:1},{text:'monkeys are great',image_search_word:'monkeys',array_index:2}]; //array to keep the tweets
var photo_array = []; //array to keep photos
var non_search_words=['a','an','the','them','if','about','above','across','after','against','along','among','apart','around','as','at','because','before','behind','be','below','beneath','beside','between','beyond','but','by','down','during','except','for','from','in','inside','into','like','near','next','of','off','on','onto','out','outside','over','past','regarding','round','since','through','throughout','till','to','toward','under','underneath','unlike','until','up','upon','with','within','without'];

//function on load to pre-populate tweets
$(document).ready(function(){
    fetch_tweets();
    //append_tweets();
});

//function when the button is clicked
$('button').click(function(){
    clear_tweets_array();
    clear_tweets();
});
//function to clear tweets
function clear_tweets(){
    $('#tweets').empty();
};
function clear_tweets_array(){
  tweets_array = [];
};
//function to fetch tweets and populate the tweets_array
//globals used: tweets_array
function fetch_tweets(){

    add_tweets_to_array();
}

//function to find the image_search_word
function find_image_search_word(tweet_position){
    if(tweet_position == 'no_hyphen'){

    }
}

function find_hyphen(tweet_text){
    for(var i=0;i<tweet_text.length;i++){
        if (tweet_text[i] == '-'){
            return i;
        }
    }
    return 'no_hyphen';
}

//function to add tweets to the tweet array
function add_tweets_to_array(){
    var array_index=tweets_array.length;
    var tweets={
        text:'',
        image_search_word:'',
        array_index:array_index,
    };
    find_image_search_word(find_hyphen(tweets.text));
}

//function for tweets on click to populate flickr photos
//@parameters: first noun after the hyphen to be sent to flickr for image lookup

//function to place tweets properly
function append_tweets(){
    for(var i=0;i<tweets_array.length;i++){
        var tweet = $('<h2>',{
            text:tweets_array[i].text
        });
        $('#tweets').append(tweet);
    }

};

//function to fetch photos
function fetch_photos(){

    add_photos_to_array();
}

//function to add photos to the photo_array
function add_photos_to_array(){
    var array_index=photo_array.length;
    var photo={
        url:'',
    };
    photo_array.push(photo);
}

//function to clear photos area
$('#images_side').empty();

//function to clear photo array
function clear_photo_array(){
    photo_array = [];
}

//function to place images properly
function append_images(){
    for(var i=0;i<photo_array.length;i++){
        var image = $('<img>',{
            src:photo_array[i].url
        });
        $('#images_side').append(image);
    }
}

