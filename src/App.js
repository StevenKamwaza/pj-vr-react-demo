
import 'aframe';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import carpark from './models/generic_passenger_car_pack.glb';
import ab from './images/ab.jpg';
import { useRef } from 'react';
import { useEffect } from 'react';

function App() {
  const aframeRef = useRef(null);
  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(carpark, (d) => {
      const entity = document.getElementById("banner");
      entity.object3D.add(d.scene);

      const camera = aframeRef.current.sceneEL.camera;
      camera.position = { x: 4, y: 4.5, z: 3.5 }
      camera.rotation = { x: 0, y: 0, z: 0 }
    })
  })
  return (
    <div className="">
      <a-scene ref={aframeRef}>
        <a-assets>
          <img alt='' src={ab} id='bg' />
        </a-assets>
        <a-sky
          color="#ffffff"
          material="src: #bg"
          rotation="0 0 0" />
        <a-text
          value="PJ Space Car Park"
          position="-3 4 5"
          scale="4  4 4"
        />
        <a-entity
          id="banner"
          position="0 0 0"
          geometry="primitive: plane"
          material="color: #fafafa"
        />
      </a-scene>
    </div>
  );
}

export default App;
