const bson = require('bson');
const fs = require('fs');

async function getall(){
    let exit = await fs.existsSync("db.cum");
    if(!exit) await fs.appendFileSync("db.cum","");

    let data = await fs.readFileSync("db.cum");
    if(data.length <= 0) {
        data = await bson.serialize("");
        await fs.writeFileSync("db.cum",data);
        return data;
    }

    data = bson.deserialize(data);

    return data;
}

async function set(name,data){
    let all = await getall();

    all[name] = data;

    all = bson.serialize(all);

    await fs.writeFileSync("db.cum",all);
}

async function get(name){
    let all = await getall();

    return all[name];
}

module.exports = {set,getall,get};
