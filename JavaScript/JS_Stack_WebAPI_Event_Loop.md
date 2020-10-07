### Порядок выполенния кода 

Зависит от браузера а соответственно используемого WebAPI. В Chrome таймер в 1 милисекунду равен таймеру в 0 милисекунд. 

```js
setTimeout(() => console.log(1), 1);
setTimeout(() => console.log(2), 0);
// 1
// 2
```

В то же время промисы и async/await функции выполняются быстрее таймера в 0 млс.

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
 ```
