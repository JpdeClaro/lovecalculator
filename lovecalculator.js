let btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  let bf = document.querySelector(".bf");
  let gf = document.querySelector(".gf");
  let display = document.querySelector(".answer");
  
  let bfn = bf.value;
  let gfn = gf.value;
  let sum = (bfn.length * gfn.length) + (bfn.length * gfn.length);
  
  
  if(sum < 100){

  display.innerHTML = sum + "%";
  }
  
  else if(sum < 50){
     sum = sum + 50;

  display.innerHTML = sum + "%";
   }
});