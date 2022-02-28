import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const createScene = () => {
    const canva = document.getElementById("bg");
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight , 0.1,1000);
    const loader = new GLTFLoader();

    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#bg'), antialias: true ,alpha: true
        
      });
      
      
      renderer.setSize(window.innerWidth, window.innerHeight  );
      renderer.outputEncoding = THREE.sRGBEncoding;
      renderer.setClearColor( 0x000000, 0 );
      
      camera.position.set( -20, -9, 54);
      const pointLight = new THREE.PointLight(0xff7474)
      pointLight.position.set(-120,25,53)
      pointLight.intensity = 1;
      const controls = new OrbitControls(camera,renderer.domElement);
    const ambientLight = new THREE.AmbientLight(0xff7474);
    scene.add(pointLight, ambientLight)

 function animate() {
 


    
    
    
  controls.update();

  renderer.render(scene,camera);
 
}

animate();


}




const initBackgroundHomePage = () => {

  if (document.querySelector('#bg')) {
    createScene();
  }
}


export { initBackgroundHomePage };
