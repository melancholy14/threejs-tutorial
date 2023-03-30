import * as THREE from 'three';

function main() {
    console.log('Hello from main');

    const canvas = document.querySelector('#c');
    const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });

    const fov = 75; // field of view ; 75 degrees in the vertical dimension. The most angles in three.js are in radians but for some reason the perspective camera takes degree.
    const aspect = 2;   // the display aspect of the canvas. by default a canvas is 300 x 150 pixels which makes the aspect 300/150 ( = 2)
    const near = 0.1;   // the space in front of the camera this will be rendered
    const far = 5;

    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 2;  // we need to move the camera back a little bit from the origin in order to see anything

    const scene = new THREE.Scene();    // the root of a form of scene graph

    // create a BoxGeometry which contains the data for a box
    const boxWidth = 1;
    const boxHeight = 1;
    const boxDepth = 1;
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

    // create a basic material and set its color
    const material = new THREE.MeshBasicMaterial({ color: 0x44aa88 });

    // create a Mesh which represents the three things; a Geometry, a Material, (the position, the orientation, and scale of that object in the scene relative to its parent)
    const cube = new THREE.Mesh(geometry, material);

    scene.add(cube);

    renderer.render(scene, camera);
}

main();