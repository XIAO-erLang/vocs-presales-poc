import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "环保售前平台 | VOCs 废气治理售前助手",
  description:
    "面向环保销售、工程师、环保公司负责人和企业甲方的轻量售前平台，提供计算工具、标准模板、初步方案生成、工程师对接和优质供应商专栏。"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
