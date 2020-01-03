/* 1. Grab the input value */
document.querySelector(".js-go").addEventListener('click', function(){
    
    var input = document.querySelector("input").value;
    pushToAPI(input);
});

document.querySelector(".js-userinput").addEventListener('keyup', function(e){
    var input = document.querySelector("input").value;
    //if key enter is pressed ...
    if (e.which === 13){
        pushToAPI(input);
    }
    
});


/* 2. do the data stuff with the API */

function pushToAPI(query){
    var url = "http://tv.giphy.com/v1/gifs/search?q=" + query + "&api_key=uCUlj1F28WssWgknjGqlMjXV2qGIgVK6&tag=giphytv";
    console.log(url);

    // //AJAX request
    var GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open('GET', url);
    GiphyAJAXCall.send();
    
    GiphyAJAXCall.addEventListener('load', function(e){
       
        var data =  e.target.response;
            pushToDOM(data);
    });
    
}




/* 3. Show me the GIFs */
function pushToDOM (input){
    var response = JSON.parse(input);
    var imageURLs  = response.data;
    var container = document.querySelector(".js-container");
    container.innerHTML = "";

    imageURLs.forEach(function(x){
        var src = x.images.fixed_height.url;
        container.innerHTML = container.innerHTML + "<img src = \"" + src + "\" class = \"container-image\">";
    })
    
}

//