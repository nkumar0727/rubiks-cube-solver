import {COLORS} from './Colors.js';
import {
    rotate2DArrayAntiClockwise as rotateAnticlock,
    rotate2DArrayClockwise as rotateClock,
    set2DArrayColorAndReturnOriginal as setReturn
} from './arrayUtil.js';

export class RubiksCube {

    // Western coloring scheme: https://ruwix.com/the-rubiks-cube/japanese-western-color-schemes/
    constructor() {
        this.cubeFaces = {
            "up": [
                [COLORS.WHITE, COLORS.WHITE, COLORS.WHITE],
                [COLORS.WHITE, COLORS.WHITE, COLORS.WHITE],
                [COLORS.WHITE, COLORS.WHITE, COLORS.WHITE]
            ],
            "front": [
                [COLORS.GREEN, COLORS.GREEN, COLORS.GREEN],
                [COLORS.GREEN, COLORS.GREEN, COLORS.GREEN],
                [COLORS.GREEN, COLORS.GREEN, COLORS.GREEN]
            ],
            "down": [
                [COLORS.YELLOW, COLORS.YELLOW, COLORS.YELLOW],
                [COLORS.YELLOW, COLORS.YELLOW, COLORS.YELLOW],
                [COLORS.YELLOW, COLORS.YELLOW, COLORS.YELLOW]
            ],
            "left": [
                [COLORS.ORANGE, COLORS.ORANGE, COLORS.ORANGE],
                [COLORS.ORANGE, COLORS.ORANGE, COLORS.ORANGE],
                [COLORS.ORANGE, COLORS.ORANGE, COLORS.ORANGE]
            ],
            "right": [
                [COLORS.RED, COLORS.RED, COLORS.RED],
                [COLORS.RED, COLORS.RED, COLORS.RED],
                [COLORS.RED, COLORS.RED, COLORS.RED]
            ],
            "back": [
                [COLORS.BLUE, COLORS.BLUE, COLORS.BLUE],
                [COLORS.BLUE, COLORS.BLUE, COLORS.BLUE],
                [COLORS.BLUE, COLORS.BLUE, COLORS.BLUE]
            ]
        };
    };

    // setter for custom cube faces
    setCubeFaces (cubeFacesArray) {
        this.cubeFaces = cubeFacesArray;
    }
    
    //////////////////////////////////////////////////////////
    // Cube movement methods
    //////////////////////////////////////////////////////////

    right() {
        console.log("cube.right");
        rotateClock(this.cubeFaces['right']);

        // shift entire right side
        for (let row = 0; row <= 2; ++row) {
            setReturn(
                this.cubeFaces['down'],
                row, 2,
                setReturn(
                    this.cubeFaces['back'],
                    2-row, 0,
                    setReturn(
                        this.cubeFaces['up'],
                        row, 2,
                        setReturn(
                            this.cubeFaces['front'],
                            row, 2,
                            this.cubeFaces['down'][row][2]
                        )
                    )
                )
            )
        }
    }

    rightInverted() {
        console.log("cube.rightInverted");
        rotateAnticlock(this.cubeFaces['right']);

        // shift entire right side
        for (let row = 0; row <= 2; ++row) {
            setReturn(
                this.cubeFaces['up'],
                row, 2,
                setReturn(
                    this.cubeFaces['back'],
                    2-row, 0,
                    setReturn(
                        this.cubeFaces['down'],
                        row, 2,
                        setReturn(
                            this.cubeFaces['front'],
                            row, 2,
                            this.cubeFaces['up'][row][2]
                        )
                    )
                )
            )
        }
    }

    left() {
        console.log("cube.left");
        rotateClock(this.cubeFaces['left']);

        // shift entire left side
        for (let row = 0; row <= 2; ++row) {
            setReturn(
                this.cubeFaces['up'],
                row, 0,
                setReturn(
                    this.cubeFaces['back'],
                    2-row, 2,
                    setReturn(
                        this.cubeFaces['down'],
                        row, 0,
                        setReturn(
                            this.cubeFaces['front'],
                            row, 0,
                            this.cubeFaces['up'][row][0]
                        )
                    )
                )
            )
        }
    }

    leftInverted() {
        console.log("cube.leftInverted");
        rotateAnticlock(this.cubeFaces['left']);
        // shift entire left side
         
        for (let row = 0; row <= 2; ++row) {
            setReturn(
                this.cubeFaces['down'],
                row, 0,
                setReturn(
                    this.cubeFaces['back'],
                    2-row, 2,
                    setReturn(
                        this.cubeFaces['up'],
                        row, 0,
                        setReturn(
                            this.cubeFaces['front'],
                            row, 0,
                            this.cubeFaces['down'][row][0]
                        )
                    )
                )
            )
        }
    }

    front() {
        console.log("cube.front");
        rotateClock(this.cubeFaces['front']);
        // shift entire front side
        
        for (let row = 0; row <= 2; ++row) {
            setReturn(
                this.cubeFaces['down'],
                0, row,
                setReturn(
                    this.cubeFaces['right'],
                    2-row, 0,
                    setReturn(
                        this.cubeFaces['up'],
                        2, 2-row,
                        setReturn(
                            this.cubeFaces['left'],
                            row, 2,
                            this.cubeFaces['down'][0][row]
                        )
                    )
                )
            )
        }
    }

    frontInverted() {
        console.log("cube.frontInverted");
        rotateAntiClock(this.cubeFaces['front']);
        // shift entire front side
        
        for (let row = 0; row <= 2; ++row) {
            setReturn(
                this.cubeFaces['up'],
                2, row,
                setReturn(
                    this.cubeFaces['right'],
                    row, 0,
                    setReturn(
                        this.cubeFaces['down'],
                        0, 2-row,
                        setReturn(
                            this.cubeFaces['left'],
                            2-row, 2,
                            this.cubeFaces['up'][2][row]
                        )
                    )
                )
            )
        }
    }

    back() {
        console.log("cube.back");
        rotateClock(this.cubeFaces['back']);
        // shift entire back side
        
        for (let row = 0; row <= 2; ++row) {
            setReturn(
                this.cubeFaces['down'],
                2, 2-row,
                setReturn(
                    this.cubeFaces['left'],
                    2-row, 0,
                    setReturn(
                        this.cubeFaces['up'],
                        0, row,
                        setReturn(
                            this.cubeFaces['right'],
                            row, 2,
                            this.cubeFaces['down'][2][2-row]
                        )
                    )
                )
            )
        }
    }

    backInverted() {
        console.log("cube.backInverted");
        rotateAntiClock(this.cubeFaces['back']);
        // shift entire back side
        
        for (let row = 0; row <= 2; ++row) {
            setReturn(
                this.cubeFaces['up'],
                0, 2-row,
                setReturn(
                    this.cubeFaces['left'],
                    row, 0,
                    setReturn(
                        this.cubeFaces['down'],
                        2, row,
                        setReturn(
                            this.cubeFaces['right'],
                            2-row, 2,
                            this.cubeFaces['up'][0][2-row]
                        )
                    )
                )
            )
        }
    }

    up() {
        console.log("cube.up");
        rotateClock(this.cubeFaces['up']);
        // shift entire up side
        
        for (let row = 0; row <= 2; ++row) {
            setReturn(
                this.cubeFaces['left'],
                0, row,
                setReturn(
                    this.cubeFaces['front'],
                    0, row,
                    setReturn(
                        this.cubeFaces['right'],
                        0, row,
                        setReturn(
                            this.cubeFaces['back'],
                            0, row,
                            this.cubeFaces['left'][0][row]
                        )
                    )
                )
            )
        }
    }

    upInverted() {
        console.log("cube.upInverted");
        rotateAnticlock(this.cubeFaces['up']);
        // shift entire up side
        
        for (let row = 0; row <= 2; ++row) {
            setReturn(
                this.cubeFaces['left'],
                0, row,
                setReturn(
                    this.cubeFaces['back'],
                    0, row,
                    setReturn(
                        this.cubeFaces['right'],
                        0, row,
                        setReturn(
                            this.cubeFaces['front'],
                            0, row,
                            this.cubeFaces['left'][0][row]
                        )
                    )
                )
            )
        }
    }

    down() {
        console.log("cube.down");
        rotateClock(this.cubeFaces['down']);
        // shift entire down side
        
        for (let row = 0; row <= 2; ++row) {
            setReturn(
                this.cubeFaces['right'],
                2, row,
                setReturn(
                    this.cubeFaces['front'],
                    2, row,
                    setReturn(
                        this.cubeFaces['left'],
                        2, row,
                        setReturn(
                            this.cubeFaces['back'],
                            2, row,
                            this.cubeFaces['right'][2][row]
                        )
                    )
                )
            )
        }
    }

    downInverted() {
        console.log("cube.downInverted");
        rotateAnticlock(this.cubeFaces['down']);
        // shift entire down side
        
        for (let row = 0; row <= 2; ++row) {
            setReturn(
                this.cubeFaces['right'],
                2, row,
                setReturn(
                    this.cubeFaces['back'],
                    2, row,
                    setReturn(
                        this.cubeFaces['left'],
                        2, row,
                        setReturn(
                            this.cubeFaces['front'],
                            2, row,
                            this.cubeFaces['right'][2][row]
                        )
                    )
                )
            )
        }
    }

    //////////////////////////////////////////////////////////
    // Debugging methods
    //////////////////////////////////////////////////////////
    get asString() {
        let cubeString = "";
        for (let face in this.cubeFaces) {
            cubeString += "=========="+face + "==========\n" +
                this.getCubeFace(face) + "\n";
        }
        return cubeString;
    };

    getCubeFace(face)  {
        let cubeFaceArray = this.cubeFaces[face];
        let getFormattedCubeFace = function (face) {
            let faceString = "";
            for (let i = 0; i < cubeFaceArray.length; ++i) {
                for (let j = 0; j < cubeFaceArray[i].length; ++j) {
                    faceString += cubeFaceArray[i][j] + " ";
                }
                faceString += "\n";
            }
            return faceString;
        };
        return getFormattedCubeFace(face);
    };
}
