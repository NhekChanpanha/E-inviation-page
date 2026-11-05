import type { Metadata, Viewport } from "next";
import { Noto_Serif_Khmer, Kantumruy_Pro, Moul, Pinyon_Script } from "next/font/google";
import "./globals.css";

const notoSerifKhmer = Noto_Serif_Khmer({
  variable: "--font-noto-khmer",
  subsets: ["khmer"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const kantumruyPro = Kantumruy_Pro({
  variable: "--font-kantumruy",
  subsets: ["khmer"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const moul = Moul({
  variable: "--font-moul",
  subsets: ["khmer"],
  weight: "400",
  display: "swap",
});

const pinyonScript = Pinyon_Script({
  variable: "--font-pinyon",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "សិរីមង្គលអាពាហ៍ពិពាហ៍ | Wedding Invitation",
  description: "You are invited to celebrate our wedding",
};

export const viewport: Viewport = {
  themeColor: "#2e1c14",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="km"
      className={`${notoSerifKhmer.variable} ${kantumruyPro.variable} ${moul.variable} ${pinyonScript.variable} h-full`}
    >
      <body className="min-h-full antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
