import { DirectionalLight, Mesh, MeshStandardMaterial, Texture } from "three";
import Experience from "../experience";

export default class Environment {
  experience: Experience;
  scene: Experience["scene"];
  resources: Experience["resources"];
  environmentMap: {
    intensity: number;
    texture: Texture;
    updateMaterials: () => void;
  };

  constructor() {
    this.experience = new Experience(null);
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    this.setSunLight();
    this.setEnvironmentMap();
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

  setEnvironmentMap() {
    this.environmentMap = {
      intensity: 0.4,
      texture: this.resources.items.environmentMapTexture,
      updateMaterials: () => {},
    };

    this.environmentMap.intensity = 0.4;
    this.environmentMap.texture = this.resources.items.environtmentMapTexture;
    this.scene.environment = this.environmentMap.texture;

    this.environmentMap.updateMaterials = () => {
      this.scene.traverse((child) => {
        if (
          child instanceof Mesh &&
          child.material instanceof MeshStandardMaterial
        ) {
          child.material.envMap = this.environmentMap.texture;
          child.material.envMapIntensity = this.environmentMap.intensity;
          child.material.needsUpdate = true;
        }
      });
    };

    this.environmentMap.updateMaterials();
  }
}
