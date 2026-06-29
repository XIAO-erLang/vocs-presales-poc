"use client";

import { AuthForm } from "@/components/AuthForm";
import { Header } from "@/components/Header";

export default function LoginPage() {
  return (
    <>
      <Header />
      <main className="container-page py-16 sm:py-20">
        <AuthForm mode="login" />
      </main>
    </>
  );
}
