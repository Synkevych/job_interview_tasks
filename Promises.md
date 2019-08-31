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
