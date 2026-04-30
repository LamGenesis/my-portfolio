import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lê Tùng Lâm — Backend / Fullstack Developer",
  description:
    "Portfolio cá nhân của Lê Tùng Lâm — sinh viên IT năm cuối, chuyên về .NET, Microservices và xây dựng sản phẩm Fullstack với Next.js.",
  keywords: [
    "Lê Tùng Lâm",
    "LamGenesis",
    "Backend Developer",
    "Fullstack Developer",
    ".NET",
    "ASP.NET Core",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Lê Tùng Lâm" }],
  openGraph: {
    title: "Lê Tùng Lâm — Backend / Fullstack Developer",
    description:
      "Sinh viên IT năm cuối — Backend vững (.NET, Microservices) & Frontend mượt (Next.js).",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
