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
    console.log('You made it this far. words ' + entryWordCount + " vowels " +  entryVowelCount + "consonant" + consonants);

  }); // submit
}); // doc ready
