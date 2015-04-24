# arrayStrings

This simple module allows you to treat a string as a comma-delimited array using Javascript with its jsArray function.

```
  var pretendArray = '1,2,hey,6,blue,3';
  var argumentsExample = '1,4,imAdded,meToo';
  var result = '';
  result = jsArray(pretendArray, 2); // "hey"
  result = jsArray(pretendArray, 'length'); // 6
  result = jsArray(pretendArray, 'length', ''); // 6
  result = jsArray(pretendArray, 'splice', argumentsExample);  // "1,imAdded,meToo,3"
  result = jsArray(pretendArray, 'shift'); // "2,hey,6,blue,3"
  result = jsArray(pretendArray, 'unshift', 5); // "3,1,1,2,hey,6,blue,3"
  result = jsArray(pretendArray, 'slice', '1,3'); // "2, hey"
  result = jsArray(pretendArray, 'pop'); // "1,2,hey,6,blue"
  result = jsArray(pretendArray, 'sort'); // "1,2,3,6,blue,hey"
  result = jsArray(pretendArray, 'reverse'); // "3,blue,6,hey,2,1"
```

I built this for use in a Business Intelligence software called Qlikview which does not allow for arrays in its core 
language but allows modules to be built using Javascript. 
I wrote a post about its uses in Qlikview here: https://community.qlik.com/message/759602#759602

I figured there are likely other use cases, enjoy :).
