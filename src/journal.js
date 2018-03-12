export function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.wordCount = function() {
  var bodyCount = this.body.split(" ").length;
  return bodyCount;
}

Entry.prototype.vowelCount = function() {
  var count = 0;
  var vowels = ["a", "e", "i", "o", "u"];
  var textArray = this.body.split("");
  textArray.forEach(function(letter){
    if(vowels.includes(letter)) {
      count++;
    }
  });
  return count;
}
