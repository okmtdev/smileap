import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "住まいリープ | Smileap",
  description: "住まいの「Smile (笑顔)」と「Leap (飛躍)」をもたらす家庭向け安全管理サービス",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
