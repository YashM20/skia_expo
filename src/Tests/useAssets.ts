import {
  useImage,
  useImageAsTexture,
  useTypeface,
} from "@shopify/react-native-skia";
import { useCallback, useState } from "react";
import { Platform } from "react-native";

const SkiaLogo =
  Platform.OS === "web" ? require("@/assets/images/skia/skia_logo.png") : "skia_logo";
const SkiaLogoJpeg =
  Platform.OS === "web"
    ? require("@/assets/images/skia/skia_logo_jpeg.jpg")
    : "skia_logo_jpeg";

// NotoColorEmoji.ttf is only available on iOS
const NotoColorEmojiSrc =
  Platform.OS === "ios"
    ? require("@/assets/fonts/Roboto-Medium.ttf")
    : require("@/assets/fonts/NotoColorEmoji.ttf");

// on Web because of CORS we need to use a local video
const videoURL =
  Platform.OS === "web"
    ? require("@/assets/videos/BigBuckBunny.mp4").default
    : "https://bit.ly/skia-video-short";

export const useAssets = () => {
  const [error, setError] = useState<Error | null>(null);
  const errorHandler = useCallback((e: Error) => setError(e), []);
  const mask = useImage(require("@/assets/images/skia/mask.png"), errorHandler);
  const oslo = useImageAsTexture(require("@/assets/images/skia/oslo.jpg"));
  const skiaLogoJpeg = useImage(SkiaLogoJpeg, errorHandler);
  const skiaLogoPng = useImage(SkiaLogo, errorHandler);
  const RobotoMedium = useTypeface(
    require("@/assets/fonts/Roboto-Medium.ttf"),
    errorHandler
  );
  const NotoColorEmoji = useTypeface(NotoColorEmojiSrc, errorHandler);
  const UberMoveMediumMono = useTypeface(
    require("@/assets/fonts/UberMove-Medium_mono.ttf"),
    errorHandler
  );
  const NotoSansSCRegular = useTypeface(
    require("@/assets/fonts/NotoSansSC-Regular.otf"),
    errorHandler
  );
  const DinMedium = useTypeface(
    require("@/assets/fonts/DIN-Medium.ttf"),
    errorHandler
  );
  if (error) {
    throw new Error("Failed to load assets: " + error.message);
  }
  if (
    !RobotoMedium ||
    !oslo ||
    !NotoColorEmoji ||
    !NotoSansSCRegular ||
    !UberMoveMediumMono ||
    !DinMedium ||
    !skiaLogoJpeg ||
    !skiaLogoPng ||
    !mask
  ) {
    return null;
  }
  return {
    localAssets: [videoURL],
    RobotoMedium,
    NotoColorEmoji,
    NotoSansSCRegular,
    UberMoveMediumMono,
    DinMedium,
    oslo,
    skiaLogoJpeg,
    skiaLogoPng,
    mask,
  };
};