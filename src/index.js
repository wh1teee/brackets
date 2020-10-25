module.exports = function check(str, bracketsConfig) {
    let strSymbols = str.split(''),
        bracketsSymbols = [],
        stackArr = []

    for( let i = 0; i < bracketsConfig.length; i++ ) {
        bracketsSymbols[bracketsConfig[i][0]] = bracketsConfig[i][1]
    }

    for( let i = 0; i < strSymbols.length; i++ ) {
        if(strSymbols[i] === stackArr[stackArr.length - 1]) {
            stackArr.pop()
        } else {
            if( bracketsSymbols[strSymbols[i]] !== undefined ) {
                stackArr.push(bracketsSymbols[strSymbols[i]])
            } else return false
        }
    }
    return stackArr.length === 0;
}
