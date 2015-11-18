"use scrict";

fs = require('fs')

//var testString = "The quick brown fox jumps over the lazy dog";

var withIf = function (s) {
  var vowels = 0;
  for (var i=0; i < s.length-1; i++){
    if (s[i] === "a" || s[i] === "e" || s[i] === "i" || s[i] === "o" || s[i] === "u" ){
      vowels++;
    }
  }
  return vowels;
};

var withIndex = function (s) {
  var vowels = 0;
  var vowelArray = ["a","e","i","o","u"];
  for (var i = 0; i < s.length-1; i++){
    if (vowelArray.indexOf(s[i]) !== -1 ) {
      vowels++;
    }
  }
  return vowels;
};

var withBinarySearch = function (s) {
  var vowels = 0;
  var vowelArray = ["a","e","i","o","u"]; //already sorted
  for (var i = 0; i < s.length-1; i++){
    if ( binarySearch(vowelArray,s[i],0,5) ){
      vowels++;
    }
  }
  return vowels;
};

var withStringSearch = function (s) {
  var vowels = 0;
  var vowelString = "aeiou"; //already sorted
  for (var i = 0; i < s.length-1; i++){
    if ( vowelString.search(s[i] != -1) ){
      vowels++;
    }
  }
  return vowels;
};

/*Utility functions*/

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

/* Tests */


fs.readFile('ulysses.txt', 'utf8', function (err,testString) {
  if (err) {
    return console.log(err);
  }
  var time;

  var tests = {
    withIf: withIf,
    withIndex: withIndex,
    withBinarySearch: withBinarySearch,
    withStringSearch: withStringSearch
  };

  for (var test in tests) {
    if (tests.hasOwnProperty(test)) {
      var testMethod = tests[test];
      for (var i=0;i<10;i++) {
        time = process.hrtime();
        var value = testMethod(testString);
        time = process.hrtime(time);
        console.log('%s\t%d\t%d', test, value, time[0] * 1e9 + time[1]);
      }

    }
  }
});
