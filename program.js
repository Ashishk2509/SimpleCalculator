var number = 0;
var display = document.querySelector(".screen");

for (i=0; i<=19; i++) {
document.querySelectorAll(".btn")[i].addEventListener("click", scanbutton);
}

function scanbutton() {
  number = this.innerHTML;
  switch (number) {
    case 'C':
      display.innerText = '';
      break;
    case '=':
      var fixed = eval(display.innerText);
      display.innerText = fixed.toFixed(2)
      break;
    case '&lt;':
      display.innerText = display.innerText.slice(0,-1);
      break;
    default:
      display.innerText += number;
  }

}
