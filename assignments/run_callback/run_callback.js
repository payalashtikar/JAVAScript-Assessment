function RunCallback(a, b, cb) { // a=10 , b=25 , cb=function(val){return val+100}
    // 
    
    // Write you code here, you need to add a and b, 
    // pass the result into callback function cb as argument return the result

    let sum = a+b; // sum = 35
    return cb(sum); // cb(35)=35+100=135

}


module.exports = RunCallback;
