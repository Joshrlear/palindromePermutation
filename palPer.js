// Get form
const myForm = document.getElementById(myForm);

// create function that accepts input text as parameter >
function evaluate(word){

    // create object to store values
    const obj = {};

    // get input text
    let word = document.getElementById(word);

    // loop through word
    for(let i=0; i <= word.lengthl; i++){

        // if i exists (i.value = 1) then delete the value
        // if i doen't exist then assign value i = 1
        obj[word[i]] ? delete obj[word[i]]
        : obj[word[i]] = 1;
    }
    // if object has two or more values, return false.
    // if 1 or less values, return true 
    (obj.length = 2) ? false : true;
    return 
}