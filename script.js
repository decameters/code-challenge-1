$(document).ready(readyNow);

var clickCount = 0;

function readyNow() {
    // console.log('in readyNow');
    $('.generateButton').on('click', createDiv);
    $(this).on('click', '.swapButton', changeDivColor);
    $(this).on('click', '.deleteButton', deleteDiv);
}

function createDiv() {
    // console.log('in createDiv');
    clickCount++;
    $('body').append('<div>' +
    '<p>' + clickCount + '</p>' +
    '<button class="swapButton">Swap</button>' +
    '<button class="deleteButton">Delete</button></div>');
    
}

function changeDivColor() {
        $(this).parent().toggleClass('buttonClicked');
}   


function deleteDiv() {
    // console.log('in delete');
    
    $(this).parent().remove();
}

// everything is only working on my first div -
// is it a CLASS vs ID issue?

// i spent the last 15 minutes unbreaking everything i broke trying to figure this out
// i didn't think i had testing anxiety until i realized i wasn't going to finish
