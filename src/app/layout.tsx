import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VOCs 废气治理售前助手",
  description:
    "把客户说不清需求、现场参数不完整、报价前不知道怎么问，整理成可沟通的工况信息、风险提示和初步方案框架。"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
