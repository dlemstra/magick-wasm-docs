import { IMagickImage } from "@imagemagick/magick-wasm/magick-image";

export interface MagickExample {
    changeImage(image: IMagickImage): void;
  }
