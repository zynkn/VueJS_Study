var s1 = new Set();
s1.add('apple');
s1.add('pear');
s1.add('apple');
s1.add('grape');
console.log(s1);

var john = new Set(['apple', 'grape', 'pear']);
var susan = new Set(['pineapple', 'kiwi', 'pear']);

//합집합
var union = new Set([...john.values(), ...susan.values()]);
console.log(union);


//교집합
var intersection = new Set([...john.values()].filter(e => susan.has(e)));

//차집합
var diff = new Set([...john.values()].filter(e => !susan.has(e)));
console.log(diff);