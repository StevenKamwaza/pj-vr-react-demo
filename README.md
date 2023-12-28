# PJ AR/VR React Demo

## By Steven Kamwaza sponsored by `PJ Educational Consultants`

## Project Overview

This React application integrates A-Frame, a web framework for building virtual reality experiences, to create an immersive 3D space showcasing a generic passenger car park. The project utilizes the GLTFLoader from the Three.js library for loading 3D models and leverages A-Frame's components to build a virtual environment.

## Getting Started

1. Clone the repository:
   `git clone https://github.com/StevenKamwaza/pj-vr-react-demo.git`
2. Install dependencies:
   navigate to _pj-vr-react-demo_ folder by running `cd pj-vr-react-demo`
   `npm install`
3. Run the application:
   `npm start`

4. Open your browser and navigate to [http://localhost:3000/](http://localhost:3000/) to view the VR experience.

## Project Structure

- **App.js:** The main component of the application that renders the A-Frame scene and sets up the 3D environment.
- **models/generic_passenger_car_pack.glb:** The GLB file containing the 3D model of the generic passenger car pack.
- **images/ab.jpg:** An image asset used as the background for the VR scene.

## Implementation Details

The `useEffect` hook in the `App` component loads the 3D car park model using the GLTFLoader when the component mounts. The loaded model is then added to the A-Frame scene.

## Additional Information

- The A-Frame scene includes a sky with a background image, a text element displaying the title "PJ Space Car Park," and a banner entity where the 3D model is positioned.
- The camera position and rotation are adjusted to provide an optimal view of the virtual car park.

Feel free to explore and modify the code to enhance the VR experience or integrate additional features!
