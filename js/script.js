function makeRotations() {
  var inText = document.getElementById("inText").value;

  for (var i = 1; i <= 26; i++) {
    var code = document.getElementById("rot"+i);
    code.textContent = caesar(inText, i);
  }
}


function caesar(text, shift) {
  var res = '';
  var idx;
  var alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  for (var i = 0; i <text.length; i++) {
    var letter = text.charAt(i);
    if ((idx = alphabet.indexOf(letter)) >= 0) {
      idx = (idx + shift) % alphabet.length;
      letter = alphabet.charAt(idx);
    } else if ((idx = alphabet.indexOf(letter.toUpperCase())) >= 0){
      idx = (idx + shift) %alphabet.length;
      letter = alphabet.charAt(idx).toLowerCase();
    } else if (letter !== ' ' && !isNaN(letter)) {
      letter = (1*letter + shift) % 16 % 10;
    }
    res += letter;
  }
  return res;
}
