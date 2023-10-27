// Task day 3 question 1
// To compare two JSON properties

let obj1 = {
    name : "Person 1",
    age : 5
};

let obj2 = {
    age : 5,
    name : "Person 1"
};

// the above two objects are unorder with same property
// we need to campare there keys~

//console.log(obj1, obj2);

let key1 = Object.keys(obj1).sort();
let key2 = Object.keys(obj2).sort();

//console.log(key1, key2);

let object1 = JSON.stringify(key1);
let object2 = JSON.stringify(key2);

//console.log(object1, object2);

if(object1 === object2){
    console.log("The given two JSON are EQUAL")
}
else{
    console.log("The given two JSON are NOT EQUAL")
}

