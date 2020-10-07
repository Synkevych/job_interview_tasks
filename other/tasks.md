### Сделать реверс массива без использования метода reverse

```js
let reverse=a=>a.map(a.pop,[...a]);
```

### Функция для преобразования букв предложения в UpperCase по номеру

```js
let toUpperCase = (arr, num) => {
    return arr.split('').reduce((acc, letter, i, arr) => {
        let length_of_arr = arr.length;
         if ((i+1) % num == 0 ){
            acc.push(letter.toUpperCase());
        } else {
            acc.push(letter);
        }
        return acc; }, []).join('');
};
```
