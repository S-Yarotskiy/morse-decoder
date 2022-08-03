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
  let arr = [];
  for (let i = 0; i <= expr.length-10; i += 10) {
    arr.push(expr.slice(i, i + 10))
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].replace(/10/g, '.').replace(/11/g, '-').replace(/0/g, '').replace(/\*\*\*\*\*\*\*\*\*\*/g, ' ');
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== ' ') arr[i] = MORSE_TABLE[arr[i]]
  }
  return arr.join('')
}

module.exports = {
    decode
}





