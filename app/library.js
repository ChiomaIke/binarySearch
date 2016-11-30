module.exports = function() {
Array.prototype.toTwenty= function() {
  
  for (i = 1; i <= 20; i++) {
  this.push(i);
}
return this;
};

Array.prototype.toForty= function() {
  
  for(i = 2; i <= 40; i+2) {
    this.push(i);
  }
  return this;
};

Array.prototype.toThousand= function() {
  
  for(i = 10; i <= 1000; i+10) {
    this.push(i);
  }
  return this;
};

Array.prototype.search= function(searchElement) {
 var i=1;
    var minIndex = 0;
    var maxIndex = this.length - 1;
    var currentIndex;
    var currentElement;
    var result={};
 
    while (minIndex <= maxIndex) {
      i=i+1;
        currentIndex = (minIndex + maxIndex) / 2 | 0;
        currentElement = this[currentIndex];
 
        if (currentElement < searchElement) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > searchElement) {
            maxIndex = currentIndex - 1;
        }
        else {
          result.count=i;
          result.index=currentIndex;
          result.length=maxIndex+1;
            return result;
        }
    }
 
    return -1;
};

}
