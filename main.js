document.getElementById('button-addon2').addEventListener('click', loadGifSearch);

//Initialize a function loadGifSearch
function loadGifSearch(){
    let xhr = new XMLHttpRequest();
    let search = document.getElementById('search-bar').value
    console.log(search)
   
    xhr.open('GET',`https://tenor.googleapis.com/v2/search?q=${search}&key=AIzaSyDCbZGTRq04F6CvkO0vWBUxE25qszsf9js&limit=32`, true);

    xhr.onload = function() {
        if (this.status == 200) {
            var loadData = JSON.parse(this.responseText);
            //console.log(loadData); // Log the entire response data to inspect its structure
    
            var output = '';
            for (var i in loadData.results) {
                console.log(loadData.results[i].media_formats.gif.url); // Log each result object to inspect its structure
    

                output += `<div>
                <img class="gif" src="${loadData.results[i].media_formats.gif.url}" width="25%" height="auto">  
                </div>`;
            }
            document.getElementById('output').innerHTML = output;

            $('.gif').hover(
                function () {
                    $(this).css({
                        'transform': 'scale(1.3)',
                        'z-index': '2'
                    });
                },
                function () {
                    $(this).css({
                        'transform': 'none',
                        'z-index': 'auto'
                    });
                }
            );
        }
    }
    xhr.send();
}



