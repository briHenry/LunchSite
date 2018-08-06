document.addEventListener('DOMContentLoaded', function (e) {
    console.log("I'm Loaded!!!!!");
    //Create a variable titled image. Find the image in the HTML and instert the ID here.
    var image = document.getElementById('sandPic');

    //Add event lister to the image 
    image.addEventListener('click', function (e) {
        var monFlip = 0;  
        if (monFlip % 2 == 0) {
        image.src = "file:///C:/Users/GWC05/Documents/whack/sandwichWrap.jpg"
        console.log(image.src)
        monFlip++
        }
        else {
        image.src = "file:///C:/Users/GWC05/Documents/whack/clubSandwich.jpeg"
        monFlip++
        console.log(image.src)
        }

        var tuesFlip = 0;
        if (tuesFlip % 2 == 0) {
            image.src = "file:///C:/Users/GWC05/Documents/whack/tacos.jpg"
            console.log(image.src)
            tuesFlip++
        }
        else {
            image.src = "file:///C:/Users/GWC05/Documents/whack/tacoTwo.jpg"
            console.log(image.src)
            tuesFlip++
        }    
        
        var wedFlip = 0; 
        if (wedFlip % 2 == 0){
            image.src = "file:///C:/Users/GWC05/Documents/whack/penne.jpeg"
            console.log(image.src)
            wedFlip++
        }
        else {
            image.src = "file:///C:/Users/GWC05/Documents/whack/meatballs.jpg"
            console.log(image.src)
            wedFlip++
        }
    })
   
   })
   
