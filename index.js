
if (typeof require === 'function') {
    var THREE = require('three');
}

/**
 *  PerspectiveCamera(fieldOfView, aspectRatio, nearClippingPane, farClippingPane)
 *      + fieldOfView -- extent of the seen seen on display @ given moment (degrees)
 *      + aspectRatio -- ratio of width to height of an image on screen
 *
 *      + nearClippingPane -- objects closer than this distance from camera will NOT be rendered
 *      + farClippingPane -- objects farther than this distance from camera will NOT be rendered
 *          --> can modify these two for performance gains
 * 
 */
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 3;
var renderer = new THREE.WebGLRenderer({
    alpha: false
});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


var cubeMesh;
var cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
let cubeColor = new THREE.Color("#7833aa");


let textureLoader = new THREE.TextureLoader();
textureLoader.setCrossOrigin("anonymous");
textureLoader.load('https://s3.us-east-2.amazonaws.com/aws-practice-nikhil-bucket/brick-texture.gif', function (texture) {
    let material = new THREE.MeshPhongMaterial({
        color: cubeColor.getHex(),
        bumpMap: texture
    });
    cubeMesh = new THREE.Mesh(cubeGeometry, material);
    scene.add(cubeMesh);
    render();
});

let lightArr = [];
for (let i = 0; i < 4; ++i) {
    lightArr.push(new THREE.PointLight('white', 0.8));
    lightArr[i].position.set((i % 2) * 10, 10, ((i+1) % 2) * 10);
    scene.add(lightArr[i]);
}


var render = function () {
    requestAnimationFrame(render);
    cubeMesh.rotation.x += 0.01;
    cubeMesh.rotation.y += 0.01;
    renderer.render(scene, camera);
}
