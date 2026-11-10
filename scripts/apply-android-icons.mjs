import sharp from "sharp";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const source = path.join(root, "assets", "haal-khoob-icon.webp");
const res = path.join(root, "android", "app", "src", "main", "res");
const densities = {
  mdpi: { legacy: 48, adaptive: 108 },
  hdpi: { legacy: 72, adaptive: 162 },
  xhdpi: { legacy: 96, adaptive: 216 },
  xxhdpi: { legacy: 144, adaptive: 324 },
  xxxhdpi: { legacy: 192, adaptive: 432 }
};

for (const [density, sizes] of Object.entries(densities)) {
  const dir = path.join(res, `mipmap-${density}`);
  await mkdir(dir, { recursive: true });

  const legacy = await sharp(source)
    .resize(sizes.legacy, sizes.legacy, { fit: "cover" })
    .png()
    .toBuffer();

  await writeFile(path.join(dir, "ic_launcher.png"), legacy);
  await writeFile(path.join(dir, "ic_launcher_round.png"), legacy);

  const foregroundSize = Math.round(sizes.adaptive * 0.66);
  const foreground = await sharp(source)
    .resize(foregroundSize, foregroundSize, { fit: "contain" })
    .png()
    .toBuffer();

  const adaptive = await sharp({
    create: {
      width: sizes.adaptive,
      height: sizes.adaptive,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
    .composite([{
      input: foreground,
      left: Math.round((sizes.adaptive - foregroundSize) / 2),
      top: Math.round((sizes.adaptive - foregroundSize) / 2)
    }])
    .png()
    .toBuffer();

  await writeFile(path.join(dir, "ic_launcher_foreground.png"), adaptive);
}

const adaptiveDir = path.join(res, "mipmap-anydpi-v26");
await mkdir(adaptiveDir, { recursive: true });
const adaptiveXml = `<?xml version="1.0" encoding="utf-8"?>
<adaptive-icon xmlns:android="http://schemas.android.com/apk/res/android">
    <background android:drawable="@color/haal_khoob_launcher_bg" />
    <foreground android:drawable="@mipmap/ic_launcher_foreground" />
</adaptive-icon>
`;
await writeFile(path.join(adaptiveDir, "ic_launcher.xml"), adaptiveXml);
await writeFile(path.join(adaptiveDir, "ic_launcher_round.xml"), adaptiveXml);

const valuesDir = path.join(res, "values");
await mkdir(valuesDir, { recursive: true });
await writeFile(path.join(valuesDir, "haal_khoob_icon_colors.xml"), `<?xml version="1.0" encoding="utf-8"?>
<resources>
    <color name="haal_khoob_launcher_bg">#F6F3E9</color>
</resources>
`);

console.log("Android launcher icons generated from the owner's supplied image.");
