/******************
 * YOUR CODE HERE *
 ******************/

// Grabs first item in array
function getFirstItemFrom(arr) {
  const firstItem = arr[0];
  return firstItem;
}

// Grabs last item in array
function getLastItemFrom(arr) {
  const lastItem = arr.length - 1;
  return arr[lastItem];
}

// Get the third index of array
// If no third index, grab last index of array

function getIndex3(arr) {
  const thirdIndex = arr[3];
  if (arr.length >= 4) {
    return thirdIndex;
  }// return the last index of an array with fewer than 4 items
  else {
    return arr[arr.length -1];
  }
}

// Checks to see if array list is longer than or equal to ten items
function isLongList(arr) {
  if (arr.length >= 10) {
    return true;
  } else {
    return false;
  }
};

// Checks to see if first item is a number

function firstItemIsNumber(arr) {
  const firstArray = arr[0];
  if (typeof firstArray !== NaN) {
    return true;
  } else {
    return false;
  }
}

// Grabs the second character of the third string in an array
function secondCharOfThirdString(arr) {
  const thirdItem = arr[2];
  const secondCharacter = thirdItem[1];
    return secondCharacter;
}


/********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/



if (typeof getFirstItemFrom === 'undefined') {
  getFirstItemFrom = undefined;
}


if (typeof getLastItemFrom === 'undefined') {
  getLastItemFrom = undefined;
}



if (typeof getIndex3 === 'undefined') {
  getIndex3 = undefined;
}


if (typeof firstItemIsNumber === 'undefined') {
  firstItemIsNumber = undefined;
}


if (typeof isLongList === 'undefined') {
  isLongList = undefined;
}


if (typeof secondCharOfThirdString === 'undefined') {
  secondCharOfThirdString = undefined;
}




module.exports = {
  getLastItemFrom,
  getFirstItemFrom,
  getIndex3,
  firstItemIsNumber,
  isLongList,
  secondCharOfThirdString,
}
