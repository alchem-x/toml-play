import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TOML Play - TOML 对照 JSON",
  description: "TOML 语法与 JSON 对照表，展示常见的 TOML 语法及其对应的 JSON 表示形式",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
