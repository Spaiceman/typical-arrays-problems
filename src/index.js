exports.min = function min (array) {
  if (array ==0 ||array==undefined) return 0;
    let i= [""];
    let minimum= array[0];

       for (i=1;i<array.length; i++) {
       if (array[i]<minimum) minimum = array[i];
   }
  return minimum;
}

exports.max = function max (array) {
  if (array ==0 ||array==undefined) return 0;
    let i= [""];
    let maximum= array[0];

       for (i=1;i<array.length; i++) {
       if (array[i]>maximum) maximum = array[i];
   }
  return maximum;
}

exports.avg = function avg (array) {
  if (array ==0 ||array==undefined) return 0;
    let i= [""];
    let elements=0;
      for (i=0;i<array.length; i++) {
        elements=  elements+array[i];
   }
  return (elements/array.length);
}