import { Entry } from './journal';

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var content = $('#content').val();
    var entry = new Entry(title, content);
    var entryWordCount = entry.wordCount();
    var entryVowelCount = entry.vowelCount();
    var consonants = entry.consonantCount();
    var teaser = entry.getTeaser();
    console.log('You made it this far. words ' + entryWordCount + " vowels " +  entryVowelCount + " consonant " + consonants + " first 8 " + teaser);

  }); // submit
}); // doc ready
