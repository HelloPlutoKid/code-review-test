import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "딩코딩코 - 코딩 유튜버",
  description: "딩코딩코 공식 팬 페이지입니다. 코딩과 개발에 대한 유익한 콘텐츠를 만나보세요!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        {children}
      </body>
    </html>
  );
}
