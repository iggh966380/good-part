const sum = function () {
  innerSum = 0;
  for (let i = 0; i < arguments.length; i++) {
    innerSum += arguments[i];
  }
  return innerSum;
};

document.writeln(sum(1, 2, 3, 4, 5));
