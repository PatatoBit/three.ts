import { BoxGeometry, Mesh, MeshStandardMaterial } from "three";
import Experience from "../experience";
import Environment from "./environment";
import Floor from "./floor";

export default class World {
  experience: Experience;
  environment!: Environment;
  scene: Experience["scene"];
  resources: Experience["resources"];

  floor!: Floor;

  constructor() {
    this.experience = new Experience(null);
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    // Test mesh
    const testMesh = new Mesh(
      new BoxGeometry(1, 1, 1),
      new MeshStandardMaterial()
    );
    this.scene.add(testMesh);

    this.resources.on("loaded", () => {
      console.log("Resources ready");
      this.floor = new Floor();
      this.environment = new Environment();
    });
  }
}
