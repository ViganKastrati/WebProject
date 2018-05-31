var i = 0;
var images = [];
var time = 3000;


images[0] = "Chemistry.jpg";
images[1] = "gotat.jpg";
images[2] = "used-lab-equipment.jpg";


function changeImg(){
    document.slide.src = images[i];

    if(i < images.length - 1){
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;