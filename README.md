# cumdb

Bson database.

## Example usage

```javascript
const cumdb = require('cumdb');

cumdb.set("post_84923492",{title:"omg"});
cumdb.del("post_84923492");

let db = cumdb.getall();

let find = cumdb.get("post_84923492");

console.log(find)
```
