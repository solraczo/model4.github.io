// public/main.js
AFRAME.registerComponent("gltf-model-loader", {
  init: function () {
    const modelPath = "./models/esfera2.glb"; // Path to your GLTF model
    const el = this.el;
    const loader = new THREE.GLTFLoader();
    loader.load(
      modelPath,
      function (gltf) {
        el.setObject3D("mesh", gltf.scene);
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );
  },
});

document.querySelector("#gltf-model").setAttribute("gltf-model-loader", "");
