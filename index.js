const bson = require('bson');
const fs = require('fs');

function getall(){
    let exit = fs.existsSync("db.cum");
    if(!exit) fs.appendFileSync("db.cum","");

    let data = fs.readFileSync("db.cum");

    if(data.length <= 0) {
        data = bson.serialize("");
        fs.writeFileSync("db.cum",data);
        return data;
    }

    data = bson.deserialize(data);

    return data;
}

function set(name,data){
    let all = getall();

    all[name] = data;

    all = bson.serialize(all);

    fs.writeFileSync("db.cum",all);
}

function get(name){
    let all = getall();

    return all[name];
}

function del(name){
    let all = getall();

    delete all[name];

    all = bson.serialize(all);

    fs.writeFileSync("db.cum",all);

    return all;
}

module.exports = {set,getall,get,del};
