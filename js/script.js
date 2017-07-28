$(document).ready(function() {

  $("#search").click(function() {
   // pulls the search input from the DOM and saves its value
    var searchInput = $("#searchInput").val();
    // takes the api, adds in the search input variable and saves it so we can use this url in the actual ajax call.
    var results = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchInput+"&format=json&callback=?";

// either returns the data or an error message.
  $.ajax ({
    type: 'GET',
    url: results,
    async: false,
    dataType: "json",
    success: function(data) {
      $("#results").html('');
      for (var i=0; i < data[1].length; i++) {
      $("#results").append("<li><a href="+data[3][i]+">"+data[1][i]+"</a><p>"+data[2][i]+"</p></li>");
        $("#searchInput").val('');
      };
    },
    error: function(errorMessage) {
      alert('No such page exists.');
    }
  })

  });
// this makes it so that you can just hit the enter key while putting in a search term and get the same result.
// 13 equals the enter key.
  $("#searchInput").keypress(function(e) {
      if (e.which === 13) {
        $("#search").click();
      }
     });

});
