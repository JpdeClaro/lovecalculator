let btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    let bf = document.getElementById("bf");
    let gf = document.getElementById("gf");
    let display = document.getElementById("answer");

    let bfn = bf.value;
    let gfn = gf.value;
    let sum = (bfn.length * gfn.length) + (bfn.length * gfn.length);

    if (sum <= 100) {
        display.innerHTML = sum + "% " + " " + "chance of success"; 
        display.style.opacity = "1";
        display.style.fontSize = "2em";
        display.style.transition = "all 2s ease-in";
    }else if (sum <= 50) {
        display.innerHTML = sum + "% " + " " + "chance of success";
        display.style.opacity = "1";
        display.style.fontSize = "2em";
        display.style.transition = "all 2s ease-in";
    }

});