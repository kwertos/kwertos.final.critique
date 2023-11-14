// CLICK TO CHANGE IMAGE TO GIF

$('.phillippines').click(changeImage1);

function changeImage1(){
    // console.log("image has changed");
    $('.phillippines').attr('src', 'imagery/PhilliNoLoopClear.gif');
}

$('.magnitude').click(changeImage2);

function changeImage2(){
    // console.log("image has changed");
    $('.magnitude').attr('src', 'imagery/magnitudeClearBetter.gif');
}

$('.depth').click(changeImage3);

function changeImage3(){
    // console.log("image has changed");
    $('.depth').attr('src', 'imagery/focalDepthcomplete1.gif');
}

// note that functions cannot share the same name

// function mouseEnter2(){
//     // $(".bubbles").css("bottom", "50%");
//     $('.phillippines').attr('src', 'imagery/nervID');
// }

// function mouseExit2(){
//     // $(".bubbles").css("bottom", "0");
//     $('.phillippines').attr('src', 'imagery/PhilliNoLoopClear.gif');
// }

// $(".phillippines").hover(mouseEnter2, mouseExit2);