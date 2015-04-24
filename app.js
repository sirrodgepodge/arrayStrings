function jsArray(array, jsFunction, argumentString){
      array = (""+array).split(',');
      if(jsFunction !== "length" && isNaN(jsFunction)) {
            array.runFunction = [][jsFunction]; //find function on Array.prototype
            if(argumentString || argumentString === ""){
                argumentString = ("" + argumentString).split(",");
                var arrayTemp = array.join(',');
                var altArray = array.runFunction.apply(array, argumentString);
                if(arrayTemp === array.join(',')) {
                      return altArray.join(',');
                }
            } else {
                array.runFunction()
            }
            return array.join(',');
      } else {
            return array[jsFunction];
      }
}

exports = jsArray;
