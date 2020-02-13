document.addEventListener("scroll", () => {

    const scroll = document.documentElement.scrollTop;


    if(scroll > window.innerHeight / 1.5){
        document.getElementById("second-part-links").style.transition = "2s";
        document.getElementById("second-part-links").style.height = "400px";
        document.getElementById("second-part-link-fb").style.transition = "2s";
        document.getElementById("second-part-link-fb").style.height = "50px";
        document.getElementById("second-part-link-yt").style.transition = "2s";
        document.getElementById("second-part-link-yt").style.height = "50px";
        document.getElementById("second-part-link-ig").style.transition = "2s";
        document.getElementById("second-part-link-ig").style.height = "50px";
        document.getElementById("second-part-link-gh").style.transition = "2s";
        document.getElementById("second-part-link-gh").style.height = "50px";
        document.getElementById("second-part-links-line").style.border = "1px solid red";
        document.getElementById("second-part-links-line").style.transition = "2s";
        document.getElementById("second-part-links-line").style.height = "340px";
    }
       
    //console.log(scroll);
});




const word = "Welcome";
const txt = "";

typeWelcome(word, txt);

function typeWelcome(word, txt){

    if(txt != word){

        txt = word.substring(0, txt.length + 1);
        document.getElementById("welcome-text-subcontainer").innerHTML = "<span class='welcome-text'>" + txt + "</span>" ;
        setTimeout(() => typeWelcome(word, txt), 600);
    }
}





const photos = ["color1.jpeg", "color0.jpg", "color2.jpeg"];
const index = 3;

slider(index, photos);

function slider(index, photos){

    const resize = window.innerWidth;
    const dx = document.getElementById("third-part-right-img-container");
    const front = document.getElementById("third-part-front-img-container");
    const sx = document.getElementById("third-part-left-img-container");

    if(resize > 700){
        front.style.transition = "3s";
        front.style.transform = "translateX(100%)";
        front.id = "third-part-right-img-container";
        front.className = "third-part-side-img-container";

        sx.style.transition = "3s";
        sx.style.transform = "translateX(50%)";
        sx.id = "third-part-front-img-container";
        sx.className = "third-part-front-img-container";

        dx.style.transition = "3s";
        dx.style.transform = "translateX(-300%)";
        dx.id = "third-part-left-img-container";
        dx.className = "third-part-side-img-container";

        index++;

        setTimeout(() => clear(index, photos), 5000);
    }else{

        setTimeout(() => sliderMobile(index, photos), 0);
    }
}


function clear(index, photos){

    const dxImg = photos[(index - 1) % photos.length];
    const frontImg = photos[index % photos.length];
    const sxImg = photos[(index + 1) % photos.length];


    document.getElementById("third-part-img-slider").innerHTML = '<div class="third-part-side-img-container" id="third-part-left-img-container"><img src="./img/' + sxImg + '" alt=""></div><div class="third-part-front-img-container" id="third-part-front-img-container"><img src="./img/' + frontImg + '" alt=""></div><div class="third-part-side-img-container" id="third-part-right-img-container"><img src="./img/' + dxImg + '" alt=""></div></div>';

    setTimeout(() => slider(index, photos), 1000);
}

function sliderMobile(index, photos){

    index++;

    setTimeout(() => clear(index, photos), 5000);
}


