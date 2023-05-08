const $ = window.$;
$.get('https://swapi-api.alx-tools.com/api/films/?format=json', function (data, textStatus) {
  const res = data.results;
  for (let k = 0; k < res.length; k++) {
    $('UL#list_movies').append('<li>' + res[k].title + '</li>');
  }
});
