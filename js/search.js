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
    var query = printOutQuery(nameOfDay);
    $(".content").hide();
    var switchScreens = "#screen3List";
    $(switchScreens).load("page_content/" + switchScreens.replace("#","") + ".html");
    $(switchScreens).show();

    // $.get(endpoint + "?park=" + $("#txtPark").val(),
    //   function(response){
    //     var switchScreens = "#screen3List";
    //     $(switchScreens).load("page_content/" + switchScreens.replace("#","") + ".html");
    //     $(switchScreens).show();
    //     $.each(response, function(i,v){
    //       $("body").append("<br>" + v.title + "<br>");
    //     });
    // });
    // $.get(endpoint + "?title=" + $("#txtTitle").val(),
    //   function(response){
    //     var switchScreens = "#screen3List";
    //     $(switchScreens).load("page_content/" + switchScreens.replace("#","") + ".html");
    //     $(switchScreens).show();
    //     $.each(response, function(i,v){
    //       $("body").append("<br>" + v.title + "<br>");
    //     });
    // });
  });
});
