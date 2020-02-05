### Write a function which return reverting string 
Input:"Hello Coder"
Output: "redoC olleH"
```javascript
// new way 

res = ""
for (let s in str){
	res = c + res;
}

// v 1 
function returnString(str){
	let newStr = '';
	for (i = str.length; i>=0; i-- ){
		newStr += str.charAt(i)
	}
	return newStr;
}

function returnString(str){
	// convert to array ['j', 'a', 'v' ... ]
	// reverse array 
	// convert from array to string 
	return str.split('').reverse().join('');
}
```
### Converting a time
Input:"126"
Output:"2:6"

Input:13
Output:1:3

Input:63
Output:"0:3"
```javascript
function getTime(str) {
	const trueNum = Number(str);
	let times = String (str).split('');
	res = '';

	if (trueNum > 99) {
		res = `${times[1]}:${times[2]}`;
	}
	if (trueNum < 60) {
		res = `${times[0]}:${times[1]}`;
	}
	if (trueNum > 59 && trueNum < 99) {
		let time = String(trueNum % 60).split('');
		res = `${time.length == 1 ? 0 : time[0]}:${
			time.length == 1 ? time[0] : time[1]
		}`;
	}
	return res;
}

console.log(getTime(163));
```
### Check the expression, they're correct or not
Input:"++b+==4++v-"
Output:true

Input:"c+=++b"
Output:false

```javascript
function getTime(str) {
	let operators = ['==', '!=', '=<', '=>', '>', '<', '===', '!=='];
	let newString = String(str);
	let res = operators.reduce(function(acc, el) {
		let regexp = new RegExp(el);
		if (newString.search(regexp)>0 ) {
			acc = true;
		}
		return acc;
	}, false);
	 return res;
}
console.log(getTime('++s+==++d+s'));
```
