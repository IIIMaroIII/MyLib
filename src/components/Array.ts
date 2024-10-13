Array.prototype.myPush = function (...elements) {
  if (!Array.isArray(this))
    throw new TypeError('Your instance is not an array!');
  for (let element of elements) {
    this[this.length] = element;
  }

  return this.length;
};

const MyArray = {
  // myMap: Array.prototype.myMap,
  myPush: Array.prototype.myPush,
};

export default MyArray;
