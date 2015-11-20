## Find Vowels NodeJS

A simple performance test using the exmaple of finding vowels in a text string.

This tests three methods:

### withIf

This test uses a simple if evaluation:

```
if (letter === "a" || letter === "e" || ... ){
  vowels++;
}
```

### withIndex

This uses the IndexOf method of a vowels array

```
if (vowelArray.indexOf(letter.toLowerCase()) !== -1 ) {
  vowels++;
}
```

### withBinarySearch

This uses a binary search implementation to search on a vowels array

```
var vowelArray = ["a","e","i","o","u"]; //already sorted
var search = binarySearch(vowelArray,letter.toLowerCase(),0,4);
if ( search !== -1 ){
  vowels++;
}
```
