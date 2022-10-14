import { IMagickImage } from "@imagemagick/magick-wasm";

export interface MagickExample {
    changeImage(image: IMagickImage): void;
  }
