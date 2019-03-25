const number = prompt('Enter number');
  generateDigit = printNumber => {
    let space = '';
    const digitWrapper = document.getElementById('digit-wrap'),
      templateGenerator = id => (
        `<div class="digit" id="digit-${id}">
        <span class="topbox"></span>
        <span class="bottombox"></span>
        </div>`
      );

    digitWrapper.innerHTML = '';
    
    for (let p = number.length; p > printNumber.toString().length; p--) {
      space += '0';
    }
    
    space += printNumber;

    for (let i = 0; i < space.length; i++) {
      const parser = new DOMParser(),
        doc = parser.parseFromString(templateGenerator(i + 1), "text/html");
      digitWrapper.appendChild(doc.body.children[0]);
    }
    
    const eachCount = (element, index) => {
      const eachBox = document.getElementById(`digit-${index}`);
      switch (element) {
        case '1':
          eachBox.className = '';
          eachBox.classList.add('digit', 'one');
          break;
        case '2':
          eachBox.className = '';
          eachBox.classList.add('digit', 'two');
          break;
        case '3':
          eachBox.className = '';
          eachBox.classList.add('digit', 'three');
          break;
        case '4':
          eachBox.className = '';
          eachBox.classList.add('digit', 'four');
          break;
        case '5':
          eachBox.className = '';
          eachBox.classList.add('digit', 'five');
          break;
        case '6':
          eachBox.className = '';
          eachBox.classList.add('digit', 'six');
          break;
        case '7':
          eachBox.className = '';
          eachBox.classList.add('digit', 'seven');
          break;
        case '8':
          eachBox.className = '';
          eachBox.classList.add('digit', 'eight');
          break;
        case '9':
          eachBox.className = '';
          eachBox.classList.add('digit', 'nine');
          break;
        default:
          eachBox.className = '';
          eachBox.classList.add('digit', 'zero');
      }
    };

    [...(space.toString())].forEach((element, index) => {
      eachCount(element, index + 1)
    });

    setTimeout( () => {
      if ( printNumber > 0 ) {
        generateDigit( --printNumber );
      }
    }, 1000 );
  };
document.addEventListener('DOMContentLoaded', generateDigit(number));
