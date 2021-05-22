///////////////
// Requirements from faculty:
// 1) First, Write a function called Greet(name) that takes an argument called name, and returns a simple greeting message. 
//    For example, if the name is “Elizabeth” the function should return “Hello, Elizabeth”.
// 2) Next, handle null values by introducing a default. For example, when the name parameter is null, 
//    then the method should return the string “Hello there!”.
// 3) Next, add shouting. When “name” is all uppercase, then the method should shout back to the user. 
//    For example, when the name is "JOSE" then the method should return the string "HELLO JOSE!".
// 4) Next, Handle two names as input. If the name parameter is an array containing two names, 
//    then both names should be greeted. For example, if the input parameter is [‘Jose’,’Pep’], the method should return the string: “Hello, Jose, Pep”. 
// 5) Finally, Handle an arbitrary number of names as input. If the name parameter is an array of multiple names, 
//    all names must be greeted. For example, if the input parameter is [‘Alex’,’Arsene’,’Jose’,’Zidane’], 
//    the method should return the string: “Hello, Alex, Arsene, Jose, Zidane”
//////////////

export const greet = (...names) => {

    let result = 'Hello there!'; // Default value
    let anyNameInUpperCase = false;

    if(names.length === 0)
        return result; // If no argument, return default value

    for(let name of names) {
        anyNameInUpperCase = isUpperCase(name);
        if(anyNameInUpperCase) 
            break;
    }

    if(anyNameInUpperCase)
        result = 'HELLO ' + names.join(', ').toUpperCase() + '!';
    else
        result = 'Hello, ' + names.join(', ');

    return result;

};

const isUpperCase = (name) => {
    return name === name.toUpperCase();
}