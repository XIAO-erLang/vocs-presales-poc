import type { Metadata } from "next";
import { SplashScreen } from "@/components/SplashScreen";
import "./globals.css";

export const metadata: Metadata = {
  title: "源解 | 环境工程技术支持与资源协同平台",
  description:
    "源解以 VOCs 废气治理为切入口，提供计算工具、标准模板、方案框架、工程师对接、机械设计协作与供应商资料库。"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <SplashScreen />
        {children}
      </body>
    </html>
  );
}
