function rot13(str) {
    let allLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let result = "";
    for (let char of str) {
        if (allLetters.indexOf(char) === -1) result += char;
        else {
            let placeInAlphabet = allLetters.indexOf(char);
            let newIndex;
            if (placeInAlphabet >= 13) newIndex = placeInAlphabet - 13;
            else if (placeInAlphabet < 13) newIndex = placeInAlphabet + 13;
            result += allLetters.charAt(newIndex);
        }

    }
    console.log(result);
    return result;
}

rot13("SERR PBQR PNZC");
rot13("SERR CVMMN!");
rot13("SERR YBIR?");
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");