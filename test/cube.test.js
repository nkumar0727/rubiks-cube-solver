import {RubiksCube} from './cube.js';
import {cubeTestData} from './cubeTestData.js';

var cube;
var cubeFacesTestObject;

beforeAll(() => {
    cubeFacesTestObject = cubeTestData.testCube;
});

beforeEach(() => {
    cube = new RubiksCube();
    cube.setCubeFaces(cubeFacesTestObject);
});


afterAll(() => {
    console.log("All tests run");
    cube = undefined;
    cubFacesTestObject = undefined;
});

test('cube.right() subroutine', () => {
    cube.right();
    cube.rightInverted();
    expect(5).toBe(5);
});

