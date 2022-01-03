const exp = /^\(?\d{3}\)?\-?\d{3}\-\d{4}$/

function phoneNumCheck(string, exp) {
    if (exp.test(string)) {
        return true
    } else {
        return false
    }
}

// console.log(phoneNumCheck('(123)463-7890', exp))

function replaceStuffinNum(phoneNum) {
    const isValid = phoneNumCheck(phoneNum, exp);
    
    if (isValid) { 
        const remove = /[\(\)-]/g
        const replace = ''
        const newNum = phoneNum.replace(remove, replace)
        console.log(newNum)
        console.log(parseInt(newNum, 10))
    } else {
        return false
    }
}

replaceStuffinNum('(123)463-7890')