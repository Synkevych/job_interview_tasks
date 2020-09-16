### Порядок выполенния кода 
```js
let arr = [1,2,3,5,6];
setTimeout(() => console.log('1'), 0)
setTimeout(() => console.log('2'), 4);
Promise.resolve().then(() => console.log("3"));
Promise.reject().catch(() => console.log("4"));
async function f() { for (item of arr){ await console.log(-item)}}
f();
console.log('10');
/*
-1
 10
 3
 4
 -2
 -3
 -5
 -6
undefined
 1
 2
 */