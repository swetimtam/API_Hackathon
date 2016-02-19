var tweets_array = []; //array to keep the tweets
var output;
//var x;

//function on load to pre-populate tweets
$(document).ready(function(){
    fetch_tweets();
    append_tweets();

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

function vineOutput(source,index){
    var vineVideo = source.vines[index].html;
    return vineVideo;
}


// createLink
//params: farm, server, photoId, secret
//Globals: none
// return: string to image url
// purpose: This function takes key values from the object to create the url link to the image
//function createLink(farm,server,photoId,secret){
//    return "https://farm"+farm+".staticflickr.com/"+server+"/"+photoId+"_"+secret+".jpg";
//};
