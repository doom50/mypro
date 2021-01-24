const jsMap = new Map();

jsMap.set('id', 2);
jsMap.set('name', 'JB');

//console.log(jsMap);
//console.log(jsMap.get('name'));

const vlist = jsMap.values();
for(value of vlist){
  console.log(value);
}
const keylist = jsMap.keys();
for(a of keylist){
  console.log(a);
}

const gags =[
'komanechi', 'nahanaha', 'desuyo'
];

console.log(gags);

gags.push('rasuta_pi-ya');
console.log(gags);

gags.forEach(function(input) {
  console.log(input);
});

gags.forEach((input) => {
  console.log(input);
});

var comod1 = 456 + 2980 + 500;
var comod2 = 2246 + 0 + 0;
var comod3 = 5 + 767 + 1405 - 211 + 508;
console.log(comod1 + comod2 + comod3 z+ '円');
