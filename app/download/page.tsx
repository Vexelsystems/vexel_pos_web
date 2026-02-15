import { generatePageMetadata } from "@/lib/seo";
import DownloadClient from "./DownloadClient";

export async function generateMetadata() {
  return await generatePageMetadata({
    title: "Download Vexel Systems POS | Apps for All Devices",
    description:
      "Get the Vexel POS application for Windows, macOS, and mobile. Powerful business management software with seamless real-time synchronization.",
    keywords: [
      "download Vexel POS",
      "POS software for Windows",
      "POS app for macOS",
      "Vexel desktop software",
      "mobile POS app Sri Lanka",
      "business app download",
    ],
    path: "/download",
  });
}

export default function DownloadPage() {
  return <DownloadClient />;
}
