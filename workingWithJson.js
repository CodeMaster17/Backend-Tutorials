let jsonObj = {
    name: "Harshit",
    domain: "Web development",
    work: "domain",
    food: "fried momo",
}
console.log(jsonObj);
let myJsonStr = JSON.stringify(jsonObj); //converting object to string
console.log(myJsonStr);

jsonObj.name = "babu shona"; //changing the oibject property
console.log(jsonObj.name);

myJsonStr = myJsonStr.replace("Harshit", "sonu"); //replacing the string
console.log(myJsonStr)

newJsonObj = JSON.parse(myJsonStr); //converting string to object
console.log(newJsonObj);