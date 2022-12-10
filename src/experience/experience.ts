import Sizes from "./utils/sizes";
import Time from "./utils/time";

declare global {
  interface Window {
    experience: any;
  }
}

export default class Experience {
  canvas: HTMLCanvasElement;
  sizes: Sizes;
  time: Time;

  constructor(canvas: HTMLCanvasElement) {
    window.experience = this;

    // Options
    this.canvas = canvas;

    // Setup
    this.sizes = new Sizes();
    this.time = new Time();

    // Resize event
    this.sizes.on("resize", () => this.resize());
    // Time tick event
    this.time.on("tick", () => this.update());
  }

  resize() {
    // Window resize do what
  }

  update() {
    // Animate
  }
}
