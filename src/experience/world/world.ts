import { BoxGeometry, Mesh, MeshBasicMaterial } from "three";
import Experience from "../experience";

export default class World {
  experience: Experience;
  scene: Experience["scene"];

  constructor() {
    this.experience = new Experience(null);
    this.scene = this.experience.scene;

    // Test mesh
    const testMesh = new Mesh(
      new BoxGeometry(1, 1, 1),
      new MeshBasicMaterial({ wireframe: true })
    );
    this.scene.add(testMesh);
  }
}
