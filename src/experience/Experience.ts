import Sizes from "./utils/sizes";

declare global {
  interface Window {
    experience: any;
  }
}

export default class Experience {
  canvas: HTMLCanvasElement;
  sizes: Sizes;

  constructor(canvas: HTMLCanvasElement) {
    window.experience = this;

    // Options
    this.canvas = canvas;

    // Setup
    this.sizes = new Sizes();
  }
}
