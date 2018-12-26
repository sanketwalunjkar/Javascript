const log = console.log;
var sports = ["cricket", "football", "pool", "kabaddi"]; //declare array
log(sports[0]); // print cricket
log(sports[4]); // undefined


var last = sports[sports.length - 1];
log(last); // O/P kabaddi

// looping array
sports.forEach(function (item, index, array) {
  log(item, index); //cricket 0 football 1 pool 2 kabaddi 3
});

// add to the end of an array
var addSport = sports.push("kho-kho");
log(sports);

// remove form the end of an array
var lastRemove = sports.pop(); // remove kho-kho
log(sports);

// remove form the front of an array
var firstRemove = sports.shift(); //remove cricket
log(sports);

// add to the front of an array
var addFront = sports.unshift("cricket");
log(sports);

// find index of an item in the array
var position = sports.indexOf("pool");
log(position); // 2

// remove an item by index position
var removedItem = sports.splice(position, 1);
log(removedItem); // pool
log(sports); // 'cricket', 'football', 'kabaddi'

// copy an array
var sameCopy = sports.slice();
log(sameCopy);

// join
log(sports.join('-')); // cricket-football-kabaddi
log(sports.join()); // cricket,football,kabaddi

// filter
function filterItem(val) {
  return sports.filter(function (item) {
    return item.toLowerCase().indexOf(val.toLowerCase()) > -1;
  });
}
log(filterItem('k')); // ["cricket", "kabaddi"]
log(filterItem('oo')); // ["football"]

// concat
var equ = ["bat", "boll", "sticks"];
const resultantArray = sports.concat(equ);
log(resultantArray); // ["cricket", "football", "kabaddi", "bat", "boll", "sticks"]

// includes
log(resultantArray.includes('football')); // true
log(resultantArray.includes('ket')); // false
log(resultantArray.includes('Cricket')); // false

// split
var str = "sanket",
  res = str.split('')
log(res); //  ["s", "a", "n", "k", "e", "t"]

// reverse
log(res.reverse());

//map
log(resultantArray.map(item => item.length)
  .filter(item => item > 5)); //  [7, 8, 7, 3, 4, 6]

// Array of objects
let testObject = {
	"id": "0001",
	"type": "donut",
	"name": "Cake",
	"ppu": 0.55,
	"batters":
		{
			"batter":
				[
					{ "id": "1001", "type": "Regular" },
					{ "id": "1002", "type": "Chocolate" },
					{ "id": "1003", "type": "Blueberry" },
					{ "id": "1004", "type": "Devil's Food" }
				]
		},
	"topping":
		[
			{ "id": "5001", "type": "None" },
			{ "id": "5002", "type": "Glazed" },
			{ "id": "5005", "type": "Sugar" },
			{ "id": "5007", "type": "Powdered Sugar" },
			{ "id": "5006", "type": "Chocolate with Sprinkles" },
			{ "id": "5003", "type": "Chocolate" },
			{ "id": "5004", "type": "Maple" }
		]
}

log(testObject.batters.batter.map(obj => obj))
