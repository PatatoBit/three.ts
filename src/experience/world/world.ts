import { BoxGeometry, Mesh, MeshStandardMaterial } from "three";
import Experience from "../experience";
import Environment from "./environment";

export default class World {
  experience: Experience;
  environment: Environment;
  scene: Experience["scene"];

  constructor() {
    this.experience = new Experience(null);
    this.scene = this.experience.scene;

    // Test mesh
    const testMesh = new Mesh(
      new BoxGeometry(1, 1, 1),
      new MeshStandardMaterial()
    );
    this.scene.add(testMesh);

    // Setup
    this.environment = new Environment();
  }
}
