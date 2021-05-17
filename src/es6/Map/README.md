https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

The Map object holds key-value pairs.
It remembers the original insertion order of the keys.
Any value (both objects and primitive values) may be used as either a key or a value.

It looks like an array, but it acts a bit different.
It it harder to use maps than array, because you have less ways to access the internal data.
The only methods to manipulate the map are:

- forEach
- get
- has
- keys
- set
- value

And the following variable:

- size

Similarities between Object and Map:

Object is similar to Map in that both let you

- set keys to values
- retrieve those values
- delete keys
- and detect whether something is stored at a key.

Differences between Objects and Map:

- You can get the size of a Map easily with the size property, while the number of properties in an Object must be determined manually.
- A Map is an iterable and can thus be directly iterated, whereas iterating over an Object requires obtaining its keys in some fashion and iterating over them.
- The keys of an Object are String and Symbol, whereas they can be any value for a Map, including functions, objects, and any primitive.
  => But you cannot get another type than number/string, you have to iterate over the whole Map.

- The keys in Map are ordered while keys added to object are not.
  => Thus, when iterating over it, a Map object returns keys in order of insertion. (Note that in the ECMAScript 2015 spec objects do preserve creation order for string and Symbol keys, so traversal of an object with ie only string keys would yield keys in order of insertion)
- An Object has a prototype, so there are default keys in the map that could collide with your keys if you're not careful. As of ES5 this can be bypassed by using Object.create(null), but this is seldom done.
- A Map may perform better in scenarios involving frequent addition and removal of key pairs.

Beware:

- don't use objects as keys, the map won't detect that the key already exists. Plus, you won't be able to retrieve it (undefined);
