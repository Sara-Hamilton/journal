export function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.wordCount = function() {
  var bodyCount = this.body.split(" ").length;
  return bodyCount;
};

Entry.prototype.vowelCount = function() {
  var count = 0;
  var vowels = ["a", "e", "i", "o", "u"];
  var textArray = this.body.split("");
  textArray.forEach(function(letter){
    if(vowels.includes(letter.toLowerCase())) {
      count++;
    }
  });
  return count;
};

Entry.prototype.consonantCount = function() {
  var count = 0;
  var arr = this.body.split('');
  arr.forEach(function(letter) {
    if ((/[^aeiou]/i).test(letter) === true) {
      count++;
    }
  });
  return count;
};

Entry.prototype.getTeaser = function() {
  var words = this.body.split(" ");
  var result = "";
  for (var i = 0; i < 8; i++) {
    result += words[i] + " ";
  }
  return result + "...";
};
