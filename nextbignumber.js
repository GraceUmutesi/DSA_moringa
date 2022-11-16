// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

// 12 ==> 21
// 513 ==> 531
// 2017 ==> 2071
// nextBigger(num: 12)   // returns 21
// nextBigger(num: 513)  // returns 531
// nextBigger(num: 2017) // returns 2071
// If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift):

// 9 ==> -1
// 111 ==> -1
// 531 ==> -1
// nextBigger(num: 9)   // returns nil
// nextBigger(num: 111) // returns nil
// nextBigger(num: 531) // returns nil
function nextBigger(n){
    //your code here
    //convert to string the split into array
    let convertedN= n.toString().split('')
    console.log(convertedN)
    let len = convertedN.length-1;
    //return index of the digit going from last if 
    //the first digit is small than the last
    while(len > 0) {
        if (convertedN[len]>convertedN[len-1]) break;
        len--;
    }
    if (len===0){
        return -1;
    }
    let sortedNew = convertedN.splice(len).sort();
    let last = convertedN[convertedN.length-1];
    for (len = 0; len < sortedNew.length; ++len) {
        if (sortedNew[len] > last) break;
    }
    convertedN[convertedN.length-1] = sortedNew[len]
    sortedNew[len] = last;
    let nString = convertedN.concat(sortedNew);
    let outputNum = parseInt(nString.join(''));

    console.log(outputNum)
    return outputNum;
      
}
nextBigger(2017)