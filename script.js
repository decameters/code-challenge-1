$(document).ready(readyNow);

var clickCount = 0;

function readyNow() {
    // console.log('in readyNow');
    $('#generateButton').on('click', createDiv);
}

function createDiv() {
    // console.log('in createDiv');
    clickCount++;
    $('body').append('<div id="generatedDiv">' +
    '<p>' + clickCount + '</p>' +
    '<button id="submitButton">Submit</button>' +
    '<button id="deleteButton">Delete</button></div>');


    $('#submitButton').on('click', changeDivColor);
    $('#deleteButton').on('click', deleteDiv);
    
}

function changeDivColor() {
    // console.log('in color change');
    
    backgroundColor = "red";

    if (backgroundColor = "red"){
        $('#generatedDiv').css('background-color', 'yellow');
    }

}

function deleteDiv() {
    // console.log('in delete');
    
    $(this).parent().remove();
}

// everything is only working on my first div -
// is it a CLASS vs ID issue?

// i spent the last 15 minutes unbreaking everything i broke trying to figure this out
// i didn't think i had testing anxiety until i realized i wasn't going to finish
