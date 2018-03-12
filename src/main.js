import { Entry } from './journal';

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var content = $('#content').val();
    var entry = new Entry(title, content);
    var words = entry.wordCount();
    var vowels = entry.vowelCount();
    var consonants = entry.consonantCount();
    var teaser = entry.getTeaser();
    $("#entries").append("<h3>" + title + "</h3>" + "<p>" + teaser + "</p>" + "<p>" + words + " Words</p>" + "<p>" + vowels + " Vowels</p>" + "<p>" + consonants + " Consonants</p>");
  }); // submit
}); // doc ready
