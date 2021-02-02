import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as dat from 'dat.gui';

/**
 * Base
 */
// Debug
const gui = new dat.GUI();

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader();

const fontLoader = new THREE.FontLoader();

let text;

// let text2;

fontLoader.load('/fonts/07YasashisaGothic_Regular.json', (font) => {
  const textGeometry = new THREE.TextBufferGeometry('ほどほどに', {
    font,
    size: 10,
    height: 2,
    bevelEnabled: true,
    bevelThickness: 1,
    bevelSize: 1,
    bevelOffset: 0,
    bevelSegments: 2,
  });
  textGeometry.computeBoundingBox();
  textGeometry.translate(
    -textGeometry.boundingBox.max.x * 0.5,
    -textGeometry.boundingBox.max.y * 0.5,
    -textGeometry.boundingBox.max.z * 0.5
  );

  const textMaterial = new THREE.MeshNormalMaterial();
  text = new THREE.Mesh(textGeometry, textMaterial);
  scene.add(text);
});

// setInterval(() => {
//   scene.remove(text);
//   fontLoader.load('/fonts/07YasashisaGothic_Regular.json', (font) => {
//     const textGeometry2 = new THREE.TextBufferGeometry('ちゃんと寝ろよ', {
//       font,
//       size: 10,
//       height: 2,
//       bevelEnabled: true,
//       bevelThickness: 1,
//       bevelSize: 1,
//       bevelOffset: 0,
//       bevelSegments: 2,
//     });
//     textGeometry2.computeBoundingBox();
//     textGeometry2.translate(
//       -textGeometry.boundingBox.max.x * 0.5,
//       -textGeometry.boundingBox.max.y * 0.5,
//       -textGeometry.boundingBox.max.z * 0.5
//     );
//     const textMaterial = new THREE.MeshNormalMaterial();
//     text2 = new THREE.Mesh(textGeometry2, textMaterial);
//     scene.add(text2);
//   });
// }, 2000);

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener('resize', () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
camera.position.x = 1;
camera.position.y = 1;
camera.position.z = 50;
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/**
 * Animate
 */
const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();
  if (text) {
    text.rotation.z = elapsedTime * 0.1;
    // text.rotation.y = elapsedTime * 0.1;
  }
  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
