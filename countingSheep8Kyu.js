/* Consider an array/list of sheep where some sheep may be missing from their place.
 We need a function that counts the number of sheep present in the array (true means present). */

//Title: counting sheep ... 

function countSheeps(arrayOfSheep) {
    let sheep = arrayOfSheep.filter(i => i === true);
    return sheep.length;
}