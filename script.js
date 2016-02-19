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

function append_top10_list(){
    for(var i = 0; i<top10Music.length; i++){
        append_songs(top10Music[i]);
        testAdele();
    }
}
function testAdele (){
    for(var i=0;i<6;i++){
        var adelepic = $('<img>',{
            url:'./image/adele.jpg'
        });
        var cubeFace = $('<div>',{
            class:'imgdiv, cubediv'+i
        });
        $('.cubediv').eq(i).append(cubeFace);
        var cube = $(".cubediv"+i);
        $(cube).append(adelepic);
    }

}
//function append_top10_list(){
//    for(var i=0;i<top10.length;i++){
//        //append_songs(top10[i]);
//        var songart = $('<img>',{
//            src:top10[i].albumArt
//        });
//        var songinfo= $('<p>',{
//            text:top10[i].name + ' - ' + top10[i].song
//        });
//
//        var songdiv = $('<div>',{
//            class:'imgdiv cubediv'+i
//        });
//        $('.cubediv').eq(i).append(songdiv);
//
//        var cube = $(".cubediv"+i);
//        $(cube).append(songart).append(songinfo);




// /function to place song properly

        //use for cube

//function append_songs(song){
//    //var songdiv = $('<div>');
//    //var songdivArray=[];
//    var songart = $('<img>',{
//        src:song.albumArt
//    });
//    var songinfo= $('<p>',{
//        text:song.name + ' - ' + song.song
//    });
//    for( var i=0; i<1; i++) {
//        var songdiv = $('<div>',{
//            class:'cubediv'+i
//        });
//        $('.cubediv').eq(i).append(songdiv);
//
//        var cube = $(".cubediv"+i);
//        $(cube).append(songart).append(songinfo);
//    }
//    $(songdiv).on('click',function(){
//        //console.log(song.name + song.song);
//        getVines(song.name,song.song);
//    });
//
//}



// /function to place song properly
function append_songs(song, i) {
    if (i % 2 == 0) {
        var songDiv = $('<div>', {
            class: 'row'
        });
        var songArt = $('<img>', {
            class: 'evenImg cover',
            src: song.albumArt,
        });
        var songInfo = $('<p>', {
            class: 'evenList boxText',
            text: song.name + ' - ' + song.song
        });
    }
    else {
        var songDiv = $('<div>', {
            class: 'row'
        });
        var songArt = $('<img>', {
            class: 'oddImg cover',
            src: song.albumArt,
        });
        var songInfo = $('<p>', {
            class: 'oddList boxText',
            text: song.name + ' - ' + song.song
        });
    }

    $('.first_part').append(songDiv);
    $(songDiv).append(songArt).append(songInfo);
    $(songDiv).on('click', function () {
        //console.log(song.name + song.song);
        $('div:not(body)').hide();
        getVines(song.name, song.song);
    })
}
$("#main_body").addClass('animate');



