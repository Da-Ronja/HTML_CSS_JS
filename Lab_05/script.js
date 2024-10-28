var employee = {
    name: "John Smith",
    job: "Programmer",
    age: 31
}

/** 1.
 * Add a method called nameLength that prints out the length of the employees name to the console.
*/
let nameLength = (name) => console.log(name.length);

nameLength(employee.name);

/** 2.
 * Write program that will create an Alert in the browser of each of the object's values for the key value pairs.
 * For example, it should alert: Name is John Smith, Job is Programmer, Age is 31.
 */

let showAlert = (employee) => alert("Name is " + employee.name + ", Job is " + employee.job + ", Age is " + employee.age);

let showAlertOnClick = () => showAlert(employee);

/** 3.
 * Add a method called lastName that prints out the employee's last name to the console.
 * You will need to figure out how to split a string to an array.
 */

let lastName = (name) => {
    let dividedName = name.split(" ");
    return dividedName[1];
}

console.log(lastName(employee.name));