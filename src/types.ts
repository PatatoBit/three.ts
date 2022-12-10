import { Texture } from "three";

export interface CubeSource {
  name: string;
  type: string;
  path: string[];
}

export interface EnvironmentMapConfig {
  intensity: number;
  texture: Texture;
  updateMaterials: () => void;
}
