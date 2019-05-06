var slide = 1
slider()
function slider() {
  for (var i = 1; i <= 3; i++){
      $(".card:nth-child(" + i + ")").css("display", "none")
  }
  $(".card:nth-child(" + slide + ")").css("display", "flex")
  slide = (slide+1 > 3) ? 1 : slide+1;
  setTimeout(slider, 500)
}