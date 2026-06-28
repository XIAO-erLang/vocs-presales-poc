import type { Metadata } from "next";
import { LanguageProvider } from "@/components/LanguageProvider";
import { SplashScreen } from "@/components/SplashScreen";
import "./globals.css";

export const metadata: Metadata = {
  title: "源解环保 | 网站内测中",
  description: "源解环保 VOCs 工程预售平台正在进行 V1 内测与产品闭环验证，正式访问入口将在测试完成后开放。",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false
    }
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <LanguageProvider>
          <SplashScreen />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
