import { DirectionalLight } from "three";
import Experience from "../experience";

export default class Environment {
  experience: Experience;
  scene: Experience["scene"];

  constructor() {
    this.experience = new Experience(null);
    this.scene = this.experience.scene;

    this.setSunLight();
  }

  setSunLight() {
    const directionalLight = new DirectionalLight("#ffffff", 4);
    directionalLight.castShadow = true;
    directionalLight.shadow.camera.far = 15;
    directionalLight.shadow.mapSize.set(1024, 1024);
    directionalLight.shadow.normalBias = 0.05;
    directionalLight.position.set(3.5, 2, -1.25);
    this.scene.add(directionalLight);
  }
}
