//variables for the button search
nameOfDay = "";
nameOfParks = "";
nameofTitles = "";
//gets database json file
endpoint = "https://data.cityofchicago.org/resource/7piw-z6r6.json";

$(document).ready(function() {

  function hideScreens() {
    $(".content").hide();
  }

  $(".nav-link").on("click", function(){
    hideScreens();
    var target = $(this).attr("href");
    $(target).load("page_content/" + target.replace("#","") + ".html");
    $(target).show();
  });

//searchs through json file
  $("#btnSearch").on("click", function(){
    window.nameOfDay = $("#txtDay").val();
    window.nameOfParks = $("#txtPark").val();
    window.nameofTitles = $("#txtTitle").val();
    var query = printOutQuery(nameOfDay, nameOfParks, nameofTitles);
  });
});
