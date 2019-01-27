const log = console.log;
const studant = {
  name: 'John',
  rollno: 23,
  address: {
    line_1:'House no 923 near tapobhumi soc. dattawadi ',
    pincode:411030,
    city:'Pune',
    State:'Maharastate',
    country:'India'
  },
  division:'B',
  bloodgroup:'B+',
  gender:'male'
}
log(studant.address.city, studant.address.pincode); // Pune 411030
log(studant.bloodgroup); // B+
log(studant); // show all object with key value

const constructorObj = {
  face: function () {
    log('blink');
  },
  hand: 2,
  pair: () => log(`Runing, walking`)
}
log(constructorObj.face, constructorObj.hand); // [Function: face] 2
log(constructorObj.face(), constructorObj.hand); // undefined 2 = bcoz using console.log
constructorObj.face(), constructorObj.pair();
