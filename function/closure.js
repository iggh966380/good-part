const myO = {
  value: 0,
  increment: function (inc) {
    this.value += typeof inc === 'number' ? inc : 1;
  },
};

myO.increment();
document.writeln(myO.value);

myO.increment(2);
document.writeln(myO.value);
