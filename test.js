"use scrict";

fs = require('fs')
fs.readFile('ulysses.txt', 'utf8', function (err,testString) {
  if (err) {
    return console.log(err);
  }
  var t,i,v;
  for (i=0;i<10;i++) {
    t = process.hrtime();
    var v = withIf(testString);
    t = process.hrtime(t);
    console.log('%d If           %d', v, t[0] * 1e9 + t[1]);
  }

  for (i=0;i<10;i++) {
    t = process.hrtime();
    withIndexOf(testString);
    t = process.hrtime(t);
    console.log('%d indexOf      %d', v, t[0] * 1e9 + t[1]);
  }

  for (i=0;i<10;i++) {
    t = process.hrtime();
    withBinarySearch(testString);
    t = process.hrtime(t);
    console.log('%d binarySearch %d', v, t[0] * 1e9 + t[1]);
  }

  for (i=0;i<10;i++) {
    t = process.hrtime();
    withSearch(testString);
    t = process.hrtime(t);
    console.log('%d search       %d', v, t[0] * 1e9 + t[1]);
  }

});


//var testString = "The quick brown fox jumps over the lazy dog";

function withIf (s) {
  var vowels = 0;
  for (var i=0; i < s.length-1; i++){
    if (s[i] === "a" || s[i] === "e" || s[i] === "i" || s[i] === "o" || s[i] === "u" ){
      vowels++;
    }
  }
  return vowels;
}

function withIndexOf (s) {
  var vowels = 0;
  var vowelArray = ["a","e","i","o","u"];
  for (var i = 0; i < s.length-1; i++){
    if (vowelArray.indexOf(s[i]) !== -1 ) {
      vowels++;
    }
  }
  return vowels;
}

function withBinarySearch (s) {
  var vowels = 0;
  var vowelArray = ["a","e","i","o","u"]; //already sorted
  for (var i = 0; i < s.length-1; i++){
    if ( binarySearch(vowelArray,s[i],0,5) ){
      vowels++;
    }
  }
  return vowels;
}

function withSearch (s) {
  var vowels = 0;
  var vowelString = "aeiou"; //already sorted
  for (var i = 0; i < s.length-1; i++){
    if ( vowelString.search(s[i] != -1) ){
      vowels++;
    }
  }
  return vowels;
}

function binarySearch (a,value,lo,hi) {
  if (lo>hi) {
    return null;
  }
  var mid = Math.floor((lo+hi)/2);
  if (value < a[mid]) {
    return binarySearch(a,value,lo,mid-1);
  }
  else if (value > a[mid]) {
    return binarySearch(a,value,mid+1,hi);
  }
  else if (value == a[mid]) {
    return mid;
  }
  else return null;
}
