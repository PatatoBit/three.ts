import { AnimationMixer, Mesh } from "three";
import Experience from "../experience";

export default class Fox {
  experience: Experience;
  scene: Experience["scene"];
  resources: Experience["resources"];
  time: Experience["time"];

  resource: any;
  model!: Mesh;
  animation: any;

  constructor() {
    this.experience = new Experience(null);
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.time = this.experience.time;

    // Setup
    this.resource = this.resources.items.foxModel;

    this.setModel();
    this.setAnimation();
  }

  setModel() {
    this.model = this.resource.scene;
    this.model.scale.set(0.02, 0.02, 0.02);
    this.scene.add(this.model);

    this.model.traverse((child: any) => {
      if (child instanceof Mesh) {
        child.castShadow = true;
      }
    });
  }

  setAnimation() {
    this.animation = {};
    this.animation.mixer = new AnimationMixer(this.model);
    this.animation.action = this.animation.mixer.clipAction(
      this.resource.animations[0]
    );
    this.animation.action.play();
  }

  update() {
    this.animation.mixer.update(this.time.delta / 1000);
  }
}
