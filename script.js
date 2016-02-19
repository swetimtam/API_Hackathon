
var tweets_array = [{text:'cats are great',image_search_word:'cats',array_index:0},{text:'dogs are great',image_search_word:'dogs',array_index:1},{text:'monkeys are great',image_search_word:'monkeys',array_index:2},{text:'wombats are great',image_search_word:'wombats',array_index:3},{text:'horses are great',image_search_word:'horses',array_index:4}]; //array to keep the tweets
var photo_array = [{url:'https://pbs.twimg.com/profile_images/447374371917922304/P4BzupWu.jpeg'},{url:'http://cdn.earthporm.com/wp-content/uploads/2014/07/cute-bunnies-tongues-6.jpg'},{url:'https://i.ytimg.com/vi/2hh9lWK-iwc/maxresdefault.jpg'},{url:'http://cdn.earthporm.com/wp-content/uploads/2014/07/cute-bunnies-tongues-1.jpg'},{url:'http://www.fuzzfeed.com/wp-content/uploads/2015/10/cute-baby-bunny-wallpaper-hq-mjhek.jpg'}]; //array to keep photos
var non_search_words=['a','an','the','them','if','about','above','across','after','against','along','among','apart','around','as','at','because','before','behind','be','below','beneath','beside','between','beyond','but','by','down','during','except','for','from','in','inside','into','like','near','next','of','off','on','onto','out','outside','over','past','regarding','round','since','through','throughout','till','to','toward','under','underneath','unlike','until','up','upon','with','within','without'];



//function on load to pre-populate tweets
$(document).ready(function(){
    fetch_tweets();
    append_tweets();

    $('#tweets p').click(function(){
        tweet_click();
    });

    //function when the button is clicked
    $('button').click(function(){
        //clear_tweets_array();
        clear_tweets();
        append_tweets();
    });
});

//function for when tweets get clicked to hide tweets, and show images
function tweet_click(){
    $('#tweets').hide();
    $('#images_side').show();
    append_images();
}

//function to clear tweets
function clear_tweets(){
    $('#tweets p').empty();
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
        var tweet = $('<p>',{
            text:tweets_array[i].text
        });
        $('.singleTweet').eq([i]).append(tweet);
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
        var testimg = image.addClass('img-responsive');
        $('.image').eq([i]).append(testimg);
    }
}

