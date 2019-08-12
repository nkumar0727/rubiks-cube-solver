/**
 * Rotates 3x3 array clockwise, in place.
 */
export function rotate2DArrayClockwise(array) {
    let arrayCopy = Array.from(array);
    for (let row = 0; row < array.length; ++row) {
        for (let col = 0; col < array[row].length; ++col) {
            if (row == 0) {
                array[col][2] = arrayCopy[row][col];
            } else {
                array[col][row % 2] = arrayCopy[row][col];
            }
        }
    }
};

/**
 * Rotates 3x3 array anticlockwise, in place.
 */
export function rotate2DArrayAntiClockwise(array) {
    let arrayCopy = Array.from(array);
    for (let row = 0; row < array.length; ++row) {
        for (let col = 0; col < array[row].length; ++col) {
            array[2-col][row] = arrayCopy[row][col];
        }
    }
     
};

export function set2DArrayColorAndReturnOriginal(array, row, col, color) {
    let original = array[row][col];
    array[row][col] = color;
    return original;
};

