function runSearch() {
  var title = $('#search').val();
  var titleFormatted = title.replace(/\s+/g, '%');
  var cb = '&callback=JSON_CALLBACK';
  var wikipediaSearch = 'https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=' + titleFormatted + '&format=json&callback=?';
  var page = 'https://en.wikipedia.org/?curid=';
  
  $('#search').val(''); // clear search box
  $('.wiki').remove();
  $('#box').css('margin-top', '4%');
  
  $.getJSON(wikipediaSearch, function(data) {
    if (data.query.searchinfo.totalhits > 0) {
      for (var i = 0; i < 10; i++) {
        var title = data.query.search[i].title;
        var extract = data.query.search[i].snippet;
        $('#results').append('<div class="wiki center-block"><h3>' + title + '</h1><p>' + extract + '</p></div>');
       }
    };
  });
}

function checkSubmit(event) {
   if(event && event.keyCode == 13) {
      runSearch();
   }
}
