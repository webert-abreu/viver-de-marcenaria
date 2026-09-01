import { removeBackground } from "@imgly/background-removal-node";
import sharp from "sharp";
import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";

async function processEdriano() {
  console.log("Convertendo foto para PNG...");
  const rawJpg = path.resolve("public/WhatsApp Image 2026-06-25 at 19.12.41 (2).jpeg");
  const tempPng = path.resolve("public/temp_edriano.png");
  
  await sharp(rawJpg).png().toFile(tempPng);
  
  console.log("Removendo fundo com IA...");
  const fileUrl = pathToFileURL(tempPng).href;
  const resultBlob = await removeBackground(fileUrl);
  const arrayBuffer = await resultBlob.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  
  fs.writeFileSync("public/edriano_cutout.png", buffer);
  fs.unlinkSync(tempPng);
  console.log("Sucesso absoluto! Edriano recortado e salvo em public/edriano_cutout.png");
}

processEdriano().catch(console.error);
