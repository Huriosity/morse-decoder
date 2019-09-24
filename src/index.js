const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let decodedString = "";
    let length = expr.length;
    if (length % 10 == 1) {
        while (expr.length % 10 != 0) {
            expr += "0";
        }
        length = expr.length;
    }
    let sizeString = length / 10;
    let subStrArray = [];
    for (let i = 0; i < sizeString; i++) {
        subStrArray[i] = expr.substr(i * 10, 10);
        subStrArray[i] = decodeSubStr(subStrArray[i]);
        decodedString += checkWhithMorseTable(subStrArray[i]);
    }
    return decodedString;
}

function decodeSubStr(subStr) {

    if (subStr[0] == '*') {
        return "*";
    }
    let willReturn = '';
    for (let i = 0; i < subStr.length; i++) {
        if (subStr[i] == '0') {
            continue;
        }
        if (subStr[i + 1] == '1') {
            willReturn += '-';
            i++;
            continue;
        }
        else {
            willReturn += '.';
            i++;
            continue;
        }
    }
    return willReturn;
}

function checkWhithMorseTable(subStr) {
    if (subStr == "*") {
        return " ";
    }
    for (let code in MORSE_TABLE) {
        if (code == subStr){
            return MORSE_TABLE[code];
        }
    }
    return "";
}

module.exports = {
    decode
}