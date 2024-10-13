Array.prototype.myMap = function (callback) {
  if (typeof callback !== 'function')
    throw new TypeError('Expected a function');
  for (let i = 0; i < this.length; i++) {
    console.log('this[]`', this[i]);
  }
};

const MyLib = {
  myMap: Array.prototype.myMap,
};

export default MyLib;
