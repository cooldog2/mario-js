
printPyramid(5);


/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *    ##
 *   ###
 *  ####
 * #####
 *######
 */
function printPyramid(height) {
    // console.log("Uh oh... the pyramid is under construction.");
    // console.log("Check back soon, our developers are hard at work as we speak!");

    // TODO

for(var number = 1; number <= height; number += 1) {
  var hash = number + 1 ;        // increases the has
  var spaces = height - number;  //as spaces decrease the hash will increase

  var row =""       //initilazing; blanking it out every time we start a new row
  for(var number2 = 1; number2 <= hash; number2 +=1)   //hash loop
    row += "#";

  for(var number3 = 1; number3 <= spaces; number3 +=1)    //setting the spaces
    row = " "+ row ;
console.log(row);
}

}
