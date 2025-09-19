var isValid = function(s) {
    const stack = [];
    const pairs = {
        ")": "(",
        "]": "[",
        "}": "{"
    };

    for (let char of s) {
        if (["(", "[", "{"].includes(char)) {
            stack.push(char);
        } else if (pairs[char]) {
            if (stack[stack.length - 1] === pairs[char]) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length === 0;
};



//test
let s = "{(})" // false

cost = result = isValid(s);
console.log(result) //false
