// create function that accepts input text as parameter >
function evaluate(txt){

    // create object to store values
    const obj = {};

    // loop through word
    for(let i=0; i < txt.length; i++){

        // if i exists (i.value = 1) then delete the value
        // if i doen't exist then assign value i = 1
        if(obj[txt[i]]) {
            delete obj[txt[i]];
        }
        else {
            obj[txt[i]] = 1;
        }
    }
  

    // if object has two or more values, return false.
    // if 1 or less values, return true 
    const keys = Object.keys(obj);
    if (keys.length < 2) {
        return true;
    }
    else {
        return false;
    }
}