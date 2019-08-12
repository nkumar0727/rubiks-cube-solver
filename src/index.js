import {RubiksCube} from './cube.js'
import {cubeTestData as testData} from '../test/cubeTestData.js'

let cube = new RubiksCube();
cube.setCubeFaces(testData.testCube);
console.log(cube.asString);
cube.right();
cube.left();
cube.leftInverted();
cube.rightInverted();
console.log(cube.asString);

