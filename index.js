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

    reduce: function(collection, callback, acc) {
      let newCollection = collection.slice(0)
      if (!acc) {
        acc = newCollection[0];
        newCollection = newCollection.slice(1);
      }
      if (!(collection instanceof Array))
        collection = Object.values(collection)
      for (var i = 0; i < newCollection.length; i++) {
        acc = callback(acc, newCollection[i], newCollection);
      }
      return acc;
    },

    find: function(collection, predicate) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)
      for (var i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return collection[i];
        }
      }
      return undefined;
    },

    filter: function(collection, predicate) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)
      let passing = [];
      for (var i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          passing.push(collection[i]);
        }
      }
      return passing;
    },

    size: function(collection) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)
      return collection.length;
    },

    first: function(array, n) {
      if (!n) {
        return array[0];
      }
      else {
        return array.slice(0, n);
      }

    },

    last: function(array, n) {
      if (!n) {
        return array[array.length - 1];
      }
      else {
        return array.slice(-1, -1*n);
      }
    },

    compact: function(collection, predicate) {

    },

    sortBy: function(collection, predicate) {

    },

    flatten: function(collection, predicate) {

    },

    uniq: function(collection, predicate) {

    },

    keys: function(collection, predicate) {

    },

    values: function(collection, predicate) {

    },

    functions: function(collection, predicate) {

    },

  }
})()

fi.libraryMethod()
