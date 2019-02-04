//  false value
let bNoParam = new Boolean (),
  bZero = (0),
  bNull = (null),
  bEmptyString = (''),
  bfalse = (false);

// true value
let btrue = (true),
  btrueString = ('true'),
  bfalseString = ('false'),
  bSuLin = ('Su Lin'),
  bArrayProto = ([]),
  bObjProto = ({});

const log = console.log;

if (bNull) {
  log('bNoParam is true');
} else {
  log('bNoParam is false');
}
if (bZero) {
  log('bZero is true');
}