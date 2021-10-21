function findPositionFor(letter) {
    letter = letter.toLowerCase();
    var asciCode = letter.charCodeAt(0);
    var positionOfLetter = asciCode - 97 + 1;
    console.log(letter+": "+positionOfLetter);
}
findPositionFor("z");
findPositionFor("c");
findPositionFor("C");
findPositionFor("k");
findPositionFor("X");