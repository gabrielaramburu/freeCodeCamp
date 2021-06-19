function fearNotLetter(str) {
    let allLetters = "abcdefghijklmnopqrstuvwxyz";

    //cuando hay que usar variables para armar la regExp es necesario crar un objeto RegEx
    let regExp =
        new RegExp(str[0] + ".*" + str[str.length - 1]);

    let result = undefined;
    let completeStr = allLetters.match(regExp)[0]; //match como no se usa el parámetro g devuelve un array donde el primer elemento es patron matcheado
    
    //Esta es la otra manera fácil de recorrer un string
    //.split("")
    //.forEach(letter => {

    for (let char of completeStr) {

        if (str.indexOf(char) === -1) {
            result = char;
            break;
        }
    };
    console.log(result);
    return result;
}

fearNotLetter("abce");