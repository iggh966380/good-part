const Quo = function (string) {
  this.status = string;
};

Quo.prototype.get_status = function () {
  return this.status;
};

const newQuo = new Quo('constructure');
console.log(newQuo);

document.writeln(newQuo.get_status());
