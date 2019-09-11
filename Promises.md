## Use Promise future in ES2015

```javascript
function getMostFollowers(...usernames) {
	let baseUrl = "https://api.github.com/users/";
	let urls = usernames.map(username => $.getJSON(baseUrl + username));
console.log("urls",urls);
	return Promise.all(urls).then( (data) =>{
    console.log("followers", data)
    let max = data.sort((a, b) => {a.followers < b.followers
      console.log("a.followers",a.followers);
      console.log("b.followers",b.followers);
    }
    )[0];
		return `${max.name} has the most followers with ${max.followers}`;
	});
}

getMostFollowers('elie', 'tigarcia', 'colt').then((data) => console.log(data));
```

### Какие методы есть в Promis	
В классе Promise есть **5 статических методов**.	

- **Promise.all(promises)** – ожидает выполнения всех промисов и возвращает массив с результатами. Если любой из указанных промисов вернёт ошибку, то результатом работы Promise.all будет эта ошибка, результаты остальных промисов будут игнорироваться.	
- **Promise.allSettled(promises)** (добавлен недавно) – ждёт, пока все промисы завершатся и возвращает их результаты в виде массива с объектами, у каждого объекта два свойства:	
state: "fulfilled", если выполнен успешно или "rejected", если ошибка,	
value – результат, если успешно или reason – ошибка, если нет.	
- **Promise.race(promises)** – ожидает первый выполненный промис, который становится его результатом, остальные игнорируются.	
- Promise.resolve(value) – возвращает успешно выполнившийся промис с результатом value.	
- Promise.reject(error) – возвращает промис с ошибкой error.

К Promise можно добавить функции-потребители: **then**, **catch**, **finally**
- Первый аргумент метода **.then** – функция, которая выполняется, когда промис переходит в состояние «выполнен успешно», и получает результат. Второй аргумент .then – функция, которая выполняется, когда промис переходит в состояние «выполнен с ошибкой», и получает ошибку.

```javascript
let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("done!"), 1000);
});

// resolve запустит первую функцию, переданную в .then
promise.then(
  result => alert(result), // выведет "done!" через одну секунду
  error => alert(error) // не будет запущена
);
```
- **catch** Если мы хотели бы только обработать ошибку, то можно использовать null в качестве первого аргумента: .then(null, errorHandlingFunction). Или можно воспользоваться методом .catch(errorHandlingFunction), который сделает тоже самое:
```javascript
let promise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Ошибка!")), 1000);
});
// .catch(f) это тоже самое promise.then(null, f)
promise.catch(alert); // выведет "Error: Ошибка!" спустя одну секунду
```
- Вызов **.finally(f)** похож на **.then(f, f)**, в том смысле, что f выполнится в любом случае, когда промис завершится: успешно или с ошибкой. Хорошо подходит для очистки, например остановки индикатора загрузки.

```javascript 
new Promise((resolve, reject) => {
  setTimeout(() => resolve("result"), 2000)
})
  .finally(() => alert("Промис завершён"))
  .then(result => alert(result)); // <-- .then обработает результат
```

```javascript 
 Promise.all([	
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),	
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 2000)),	
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))	
]).catch(alert); // Error: Ошибка!	
// Проверка промиса выполняется только на ошибку, сработает только ошибка независимо от других результатов
 
 let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));	

 Promise.all(requests)	
  .then(responses => {	
    // все промисы успешно завершены	
    for(let response of responses) {	
      alert(`${response.url}: ${response.status}`); // покажет 200 для каждой ссылки	
    }	

     return responses;	
  })	
  // преобразовать массив ответов response в response.json(),	
  // чтобы прочитать содержимое каждого	
  .then(responses => Promise.all(responses.map(r => r.json())))	
  // все JSON-ответы обработаны, users - массив с результатами	
  .then(users => users.forEach(user => alert(user.name)));	
```
