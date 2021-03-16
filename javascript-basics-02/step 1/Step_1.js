var img1=document.querySelector("#image1");
img1.addEventListener("mouseover",image2);
img1.addEventListener("mouseout",image1);

function image1(){
    img1.src="images/image1.jpg";
}

function image2(){
    img1.src="images/image1_2.jpg";
}