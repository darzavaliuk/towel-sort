
// You should implement your task here.

module.exports = function towelSort(array) {
    var vector = [];
    if (!array || array.length === 0) {
    return [];
   }
    let i = 0;
    while (array.length) {
        if (i % 2 == 0)
            vector.push(...array.shift())
        else
            vector.push(...array.shift().reverse())
        i = i + 1
    }
    return vector;
}
