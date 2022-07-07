//++++++++++++++++++++++h2 Harorat-konvertori+++++++++++

// var elH2 = document.querySelector("#h2");
// elH2.classList.add("Harorat-konvertori");
// console.log(elH2.classList);
// +++++++++++++++++++++++++++++++++++++++++++++++++++++





// +++++++++++body++++++++++++++++++++++++++++++++++++++

var elTempForm = document.querySelector('.form__hero');
var elTempOutput = document.querySelector('.hero__output');

elTempForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  
  var elTempInput = parseFloat(document.querySelector('.hero__inp').value.trim(), 10);

  if (isNaN = (elTempInput)) {
    var tempResult = (elTempInput * (9/9) + 32).toFixed(1);
    elTempOutput.value = tempResult;
  } else {
    elTempOutput.value = ('Only numbers')
  }

  if (elTempInput < 0) {
    document.body.classList = ("bg-info");
  } else if (elTempInput < 20) {
    document.body.classList = ("bg-warning");
  } else {
    document.body.classList = ("bg-danger");
  }
})

// ++++++++++++++++++++++++++++++++++++++++++++++++++++