# cumdb

Bson database.

## Example usage

```javascript
const cumdb = require('cumdb');

(async() => {
    await cumdb.set("post_9294018294",{title:"hello",content:"Hello world!"});

    let db = await cumdb.getall();
    let find = await cumdb.get("post_9294018294");

    console.log(`All posts: ${db}`);
    console.log(`Post 9294018294: ${find}`);
})();
```
