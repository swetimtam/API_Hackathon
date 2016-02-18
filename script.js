var tweets_array = []; //array to keep the tweets
var photo_array = []; //array to keep photos

//function on load to pre-populate tweets
$(document).ready(function(){
    fetch_tweets();
    append_tweets();
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
    var tweets;
    tweets_array.push(tweets);
}

//function for tweets on click to populate flickr photos
//@parameters: first noun after the hyphen to be sent to flickr for image lookup

//function to place tweets properly
function append_tweets(){
    $('#tweets').append()
};

//function to place images properly
function append_images(){
    $('#images').append();
}

