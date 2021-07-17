var curPresent = false;

//Getting the original nuber from the user
var subBtn = $('.submit-button');
var delBtn = $('.delete-button');
var numBox = $('.number-box');
var retNums = $('#calc-nums');

//These arrays are the fixed rates and the name of the funds they are for
const funds = ["Pension", "Welfare", "Annuity", "TEA", "LECET", "H & S", "(A) CONTRIB TOTAL", "Dues Check-Off", "LEROF", "PAC", "(B) CHECK-OFF TOTAL", "TOTAL CHECK (A + B)"];

const rates = [11.05, 11.5, 6.55, 1.07, 0.4, 0.05, 30.62, 2.65, 0.4, 0.2, 3.25, 33.87];

var originalNum;
subBtn.on('click', calcNums);



//Calculates the rates and displays them on the screen
function calcNums() {

  if(!curPresent){

    //Resonsible for making sure the person has to delete the number currently on the screen before printing more
    curPresent = true;
    subBtn.css("opacity", "0.5");
    delBtn.css("opacity", "1");

    //Acutal calculations

    originalNum = numBox.val();
    var hold;
    var returnText = "";

    for(var i = 0; i < rates.length; i++){
      hold = originalNum * rates[i];
      retNums.append(`
      <p class="delete"><strong class="title">${funds[i]}:</strong> ${hold}</p>
      `);
    }

    delBtn.on('click', deleteCurrent);
  }
  else{
    delBtn.on('click', deleteCurrent);
  }
}


//Deletes the current numbers printed on the screen
function deleteCurrent(){
 
  //Resonsible for making sure the person has to have numbers currently on the screen before printing deleting
  curPresent = false;
  subBtn.css("opacity", "1");
  delBtn.css("opacity", "0.5");

  //Deletes the current numbers displayed on the screen
  for(var i = 0; i < rates.length; i++){
    var removeItems = $(".delete");
    removeItems.remove();
  }
}
