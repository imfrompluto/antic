let left = document.getElementById("left")
let right = document.getElementById("right")
let slidernum = document.getElementById("slidernum")
let counter = 1
let distance = 0
let slider = document.getElementsByClassName("slider")[0]

left.onclick = function(){
    counter = counter-1
    if (counter<=0){
        counter = 1
    }
    else{
        distance = distance - 490
        slider.style.transform = "translateX(-"+distance+"px)"

    }
    slidernum.innerHTML = "0"+counter+" / 05"

}

right.onclick = function(){
    counter = counter+1
    if (counter > 5){
        counter = 5
    }
    else{
        distance = distance + 490
        slider.style.transform = "translateX(-"+distance+"px)"

    }
    slidernum.innerHTML = "0"+counter+ " / 05"


}
