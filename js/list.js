function printOutQuery(nameOfDay){
  //variable for holding the query
  $(document).ready(function() {
    $.get(endpoint + "?day=" + nameOfDay, function(response){
      $.each(response, function(i,v){
        $("body").append("<br>" + v.title + "<br>");
      });
    });
  });
}
