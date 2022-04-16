$(document).ready(function () {
  const slides = Array.from(document.querySelectorAll(".slide"));
  const slider = document.querySelector(".slider");

  let url = window.location.href;
  let navitem = url.split("/")[3];
  console.log(navitem);
  $("navitems ul li a").removeClass();
  if (navitem == "") {
    $("#home").addClass("active");
  } else {
    $("#" + navitem).addClass("active");
  }
  function getNextSlide() {
    const activeSlide = document.querySelector(".slide.active");
    const activeIndex = slides.indexOf(activeSlide);
    let next, prev;
    if (activeIndex == slides.length - 1) {
      next = slides[0];
    } else {
      next = slides[activeIndex + 1];
    }
    if (activeIndex == 0) {
      prev = slides[slides.length - 1];
    } else {
      prev = slides[activeIndex - 1];
    }
    next.classList.add("active");
    activeSlide.classList.remove("active");
    activeSlide.classList.add("prev");
    prev.classList.remove("prev");
  }

  setInterval(getNextSlide, 5000);


  let width = screen.width;
  $("#citems1").click(function () {
    $("#citemsT1").css({ display: "block" });
    $(".cimage1").css({ display: "block" });
    $("#citemsT2").css({ display: "none" });
    $(".cimage2").css({ display: "none" });
    $("#citemsT3").css({ display: "none" });
    $(".cimage3").css({ display: "none" });
    $("#citemsT4").css({ display: "none" });
    $(".cimage4").css({ display: "none" });
    $("#citemsT5").css({ display: "none" });
    $(".cimage5").css({ display: "none" });
    $("#citemsT6").css({ display: "none" });
    $(".cimage6").css({ display: "none" });
    $("#citems1").css({ color: "white", "border-color": "white" });
    $("#citems2").css({ color: "black", "border-color": "black" });
    $("#citems3").css({ color: "black", "border-color": "black" });
    $("#citems4").css({ color: "black", "border-color": "black" });
    $("#citems5").css({ color: "black", "border-color": "black" });
    $("#citems6").css({ color: "black", "border-color": "black" });
    if (width > 1000) {
      $(".citemsTypes").css({
        "animation-name": "slideleft",
        "animation-duration": "1s",
      });
    }
  });
  $(".citems ul li#citems2").click(function () {
    $("#citemsT1").css({ display: "none" });
    $(".cimage1").css({ display: "none" });
    $("#citemsT2").css({ display: "block" });
    $(".cimage2").css({ display: "block" });
    $("#citemsT3").css({ display: "none" });
    $(".cimage3").css({ display: "none" });
    $("#citemsT4").css({ display: "none" });
    $(".cimage4").css({ display: "none" });
    $("#citemsT5").css({ display: "none" });
    $(".cimage5").css({ display: "none" });
    $("#citemsT6").css({ display: "none" });
    $(".cimage6").css({ display: "none" });
    $("#citems1").css({ color: "black", "border-color": "black" });
    $("#citems2").css({ color: "white", "border-color": "white" });
    $("#citems3").css({ color: "black", "border-color": "black" });
    $("#citems4").css({ color: "black", "border-color": "black" });
    $("#citems5").css({ color: "black", "border-color": "black" });
    $("#citems6").css({ color: "black", "border-color": "black" });
    if (width > 1000) {
        $(".citemsTypes").css({
          "animation-name": "slideleft",
          "animation-duration": "1s",
        });
      }
  });
  $("#citems3").click(function () {
    $("#citemsT1").css({ display: "none" });
    $(".cimage1").css({ display: "none" });
    $("#citemsT2").css({ display: "none" });
    $(".cimage2").css({ display: "none" });
    $("#citemsT3").css({ display: "block" });
    $(".cimage3").css({ display: "block" });
    $("#citemsT4").css({ display: "none" });
    $(".cimage4").css({ display: "none" });
    $("#citemsT5").css({ display: "none" });
    $(".cimage5").css({ display: "none" });
    $("#citemsT6").css({ display: "none" });
    $(".cimage6").css({ display: "none" });
    $("#citems1").css({ color: "black", "border-color": "black" });
    $("#citems2").css({ color: "black", "border-color": "black" });
    $("#citems3").css({ color: "white", "border-color": "white" });
    $("#citems4").css({ color: "black", "border-color": "black" });
    $("#citems5").css({ color: "black", "border-color": "black" });
    $("#citems6").css({ color: "black", "border-color": "black" });
    if (width > 1000) {
        $(".citemsTypes").css({
          "animation-name": "slideleft",
          "animation-duration": "1s",
        });
      }
  });
  $("#citems4").click(function () {
    $("#citemsT1").css({ display: "none" });
    $(".cimage1").css({ display: "none" });
    $("#citemsT2").css({ display: "none" });
    $(".cimage2").css({ display: "none" });
    $("#citemsT3").css({ display: "none" });
    $(".cimage3").css({ display: "none" });
    $("#citemsT4").css({ display: "block" });
    $(".cimage4").css({ display: "block" });
    $("#citemsT5").css({ display: "none" });
    $(".cimage5").css({ display: "none" });
    $("#citemsT6").css({ display: "none" });
    $(".cimage6").css({ display: "none" });
    $("#citems1").css({ color: "black", "border-color": "black" });
    $("#citems2").css({ color: "black", "border-color": "black" });
    $("#citems3").css({ color: "black", "border-color": "black" });
    $("#citems4").css({ color: "white", "border-color": "white" });
    $("#citems5").css({ color: "black", "border-color": "black" });
    $("#citems6").css({ color: "black", "border-color": "black" });
    if (width > 1000) {
        $(".citemsTypes").css({
          "animation-name": "slideleft",
          "animation-duration": "1s",
        });
      }
  });
  $("#citems5").click(function () {
    $("#citemsT1").css({ display: "none" });
    $(".cimage1").css({ display: "none" });
    $("#citemsT2").css({ display: "none" });
    $(".cimage2").css({ display: "none" });
    $("#citemsT3").css({ display: "none" });
    $(".cimage3").css({ display: "none" });
    $("#citemsT4").css({ display: "none" });
    $(".cimage4").css({ display: "none" });
    $("#citemsT5").css({ display: "block" });
    $(".cimage5").css({ display: "block" });
    $("#citemsT6").css({ display: "none" });
    $(".cimage6").css({ display: "none" });
    $("#citems1").css({ color: "black", "border-color": "black" });
    $("#citems2").css({ color: "black", "border-color": "black" });
    $("#citems3").css({ color: "black", "border-color": "black" });
    $("#citems4").css({ color: "black", "border-color": "black" });
    $("#citems5").css({ color: "white", "border-color": "white" });
    $("#citems6").css({ color: "black", "border-color": "black" });
    if (width > 1000) {
        $(".citemsTypes").css({
          "animation-name": "slideleft",
          "animation-duration": "1s",
        });
      }
  });
  $("#citems6").click(function () {
    $("#citemsT1").css({ display: "none" });
    $(".cimage1").css({ display: "none" });
    $("#citemsT2").css({ display: "none" });
    $(".cimage2").css({ display: "none" });
    $("#citemsT3").css({ display: "none" });
    $(".cimage3").css({ display: "none" });
    $("#citemsT4").css({ display: "none" });
    $(".cimage4").css({ display: "none" });
    $("#citemsT5").css({ display: "none" });
    $(".cimage5").css({ display: "none" });
    $("#citemsT6").css({ display: "block" });
    $(".cimage6").css({ display: "block" });
    $("#citems1").css({ color: "black", "border-color": "black" });
    $("#citems2").css({ color: "black", "border-color": "black" });
    $("#citems3").css({ color: "black", "border-color": "black" });
    $("#citems4").css({ color: "black", "border-color": "black" });
    $("#citems5").css({ color: "black", "border-color": "black" });
    $("#citems6").css({ color: "white", "border-color": "white" });
    if (width > 1000) {
        $(".citemsTypes").css({
          "animation-name": "slideleft",
          "animation-duration": "1s",
        });
      }
  });

  
  if (width < 700) {
    $("#citems2").html("Metals and Minerals");
  } else if (width < 1020) {
    $("#citems2").html("Metals <br>and Minerals -->");
  } else {
    $("#citems2").html("Metals and Minerals -->");
  }

  if (width < 700) {
    $("#citems1").html("Coal");
  } else {
    $("#citems1").html("Coal -->");
  }

  if (width < 700) {
    $("#citems3").html("Petroleum and <br>PetroChemicals");
  } else {
    $("#citems3").html("Petroleum and <br>PetroChemicals -->");
  }

  if (width < 700) {
    $("#citems4").html("Textiles");
  } else {
    $("#citems4").html("Textiles -->");
  }

  if (width < 700) {
    $("#citems5").html("Fertilizers");
  } else {
    $("#citems5").html("Fertilizers -->");
  }

  if (width < 700) {
    $("#citems6").html("Argo Products");
  } else {
    $("#citems6").html("Argo Products -->");
  }


  if(width<900){
      $('.icondiv')
  }
});
