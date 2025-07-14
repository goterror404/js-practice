// Create a method `all` which takes two params:
//   1. a sequence (array)
//   2. a function (test condition)
//
// It returns:
//   - true, if the function returns true for EVERY element in the sequence
//   - false, if the function returns false for even ONE element
//   - true, if the sequence is EMPTY (nothing failed, so it's considered valid)


// First attempt: Manual loop
function all(p, fun) {
    if (p.length === 0) {
        return true;
    }

    for (let i = 0; i < p.length; i++) {
        if (!fun(p[i])) {
            return false;
        }
    }

    return true;
}


// Second attempt: Cleaner using .every()
// .every() runs the given function on every element in the array.
function all(sequence, fun) {
    return sequence.every(fun);
}
