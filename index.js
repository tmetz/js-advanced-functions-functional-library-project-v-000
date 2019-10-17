const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection);
      // if (collection instanceof Array) {
      //   const newCollection = collection.slice();
      // }
      // else {
      //   const newCollection = Object.values(collection);
      // }

      for (var i = 0; i < newCollection.length; i++) {
        callback(newCollection[i]);
      }
      return collection;
    },

    map: function(collection, callback) {
      const newCollection = [];
      if (!(collection instanceof Array))
        collection = Object.values(collection)
      for (var i = 0; i < collection.length; i++) {
        newCollection.push(callback(collection[i]));
      }
      return newCollection;
    },

    reduce: function(collection, callback, acc=0) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)
      for (var i = 0; i < collection.length; i++) {
        acc += callback(collection[i]);
      }
      return acc;
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
