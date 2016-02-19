var tweets_array = []; //array to keep the tweets
var output;
var x;

//function on load to pre-populate tweets
$(document).ready(function(){
    fetch_tweets();
    append_tweets();

    $.ajax({
        url:'https://api.flickr.com/services/rest?method=flickr.photos.search&api_key=6abbc58914aa0ad192b80428161ef908&format=json&nojsoncallback=1&text= &page=1&per_page=10',
        dataType:'json',
        method:'get',
        success: function(response){
            output = response;
            console.log(output);
            for(var i = 0; i < output.photos.photo.length; i++){
                x = imageOutput(output,i);
                var newImg = $('<img>').attr("src",x);
                $('body').append(newImg);
            }
        },
        error: function(response){
            console.log("error message");
        }

    });


});

//function when the button is clicked
$('button').click(function(){

});

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

};

//function to place images properly



//$.ajax({
//    url:'https://api.flickr.com/services/rest?method=flickr.photos.getRecent&api_key=6abbc58914aa0ad192b80428161ef908&format=json&nojsoncallback=1&text=pokemon&page=1&per_page=10',
//    dataType:'json',
//    method:'get',
//    success: function(response){
//        output = response;
//        //console.log(response.photos.photo[0].id);
//        //$("img").attr("src","https://farm2.staticflickr.com/1599/24482774874_ef26a8623c.jpg");
//    },
//    error: function(response){
//        console.log("error message");
//    }
//
//});




// imageOutput
//params: source, index
//Globals: source
// return: created link to image url
// purpose: This function takes the object returned from the ajax call to flickr and creates the image url based on the keys given in the object

function imageOutput(source,index){
    var farm = source.photos.photo[index].farm;
    var photoId = source.photos.photo[index].id;
    var server = source.photos.photo[index].server;
    var secret = source.photos.photo[index].secret;
    //this.createLink = function(){
    //
    //}
    var link = createLink(farm,server,photoId,secret);
    return link;
}


// createLink
//params: farm, server, photoId, secret
//Globals: none
// return: string to image url
// purpose: This function takes key values from the object to create the url link to the image
function createLink(farm,server,photoId,secret){
    return "https://farm"+farm+".staticflickr.com/"+server+"/"+photoId+"_"+secret+".jpg";
};
