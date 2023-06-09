
// 1 To 10 Counting.
// for (i = 1; i <= 10; i++) {

//     console.log(i);
// }


// Table of (2):
// for (i = 2; i <= 20; i = i + 2) {

//     console.log(i);
// }



// Table of (3):
// for (i = 3; i <= 30; i = i + 3) {

//     console.log(i);
// }


// var start = +prompt('where to start from?');
// var end = +prompt('where to end loop?');

// for (var i = start; i <= end; i++) {
//     console.log(i);
// }





    // Table of any number which you want.
    var table = +prompt("Enter your table number");
    var end = +prompt("Where you want to stop table");

    for (var i = 1; i <= end; i++) {
        console.log(table + "x" + i + "=" + table * i);
    }



