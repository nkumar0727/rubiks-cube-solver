
if (typeof require === 'function') {
    var THREE = require('three')
}

///////////////////////////////////////////////////////////////////////////////
// CREATING THE SCENE
///////////////////////////////////////////////////////////////////////////////

var scene = new THREE.Scene()
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
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000)

/**
 *  WebGLRenderer()
 *      + There are other renderers than this one, in case browser doesn't support WebGL
 */
var renderer = new THREE.WebGLRenderer()

/**
 *  WebGLRenderer.setSize(widthToRender, heightToRender)
 *      --> can modify these two for performance gains
 *  WebGLRenderer.setSize(widthToRender, heightToRender, updateStyle)
 *      + updateStyle -- false: renders app at half resolution, true: renders app at full resolution
 */
renderer.setSize(window.innerWidth, window.innerHeight)

/**
 *   Adds the <canvas> element to the DOM. Renderer uses this element to display scene.
 */
document.body.appendChild(renderer.domElement)



/**
 *  Object contains all vertices and faces of a cube.
 *  BoxGeometry(length, height, width)
 */
var geometry = new THREE.BoxGeometry(1, 1, 1)

/**
 *  Object which helps add color.
 */
var material = new THREE.MeshBasicMaterial({
    color: 0x00ff00
})

/**
 *  Object which takes a geometry, and applies material to it.
 */
var cube = new THREE.Mesh(geometry, material)

/**
 *  By default, scene.add() puts object in coordinates (0, 0, 0)
 */
scene.add(cube)

/**
 *  Move camera out, so that the camera is not inside the cube at (0, 0, 0)
 */
camera.position.z = 5


///////////////////////////////////////////////////////////////////////////////
// RENDERING THE SCENE
// ANIMATING THE CUBE
///////////////////////////////////////////////////////////////////////////////

/**
 *  window.requestAnimationFrame()
 *      + redraws the scene every time the screen is refreshed
 *      + when user navigates to another browser tab, animation pauses (saves processing power)
 */
function animate() {
    requestAnimationFrame(animate)

    cube.rotation.x += 0.01
    cube.rotation.y += 0.01

    renderer.render(scene, camera)
}
animate()
