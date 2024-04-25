const imgEl = document.querySelector(".images");
const widthEl = document.querySelector(".width");
const heightEl = document.querySelector(".height");
const borderEl = document.querySelector(".border");
const border1El = document.querySelector(".border1")
const opacityEl = document.querySelector(".opacity")
const filterEl = document.querySelector(".filter")
widthEl.addEventListener("input", () => {
  imgEl.style.width = widthEl.value + "px";
});

heightEl.addEventListener("input", () => {
  imgEl.style.height = heightEl.value + "px";
});

borderEl.addEventListener("change", () => {
  imgEl.style.borderColor = borderEl.value;
});
border1El.addEventListener("change", () =>{
imgEl.style.borderRadius = border1El.value + "%"
});
opacityEl.addEventListener("change", () =>{
  imgEl.style.opacity = opacityEl.value + "%"
  });
filterEl.addEventListener("change", () =>{
  imgEl.style.filter = filterEl.value + "%"
    });

  