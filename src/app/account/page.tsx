"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { useAuth } from "@/components/AuthProvider";
import { Header } from "@/components/Header";
import { useSiteLanguage } from "@/components/LanguageProvider";

const copy = {
  zh: {
    eyebrow: "我的账户",
    title: "账户中心",
    description: "这一步先把账户闭环搭起来，后面再把方案、订单、复审申请和交付记录接进来。",
    loading: "正在读取账户状态...",
    setup: "Supabase 还没有配置完成。先补齐环境变量，再继续测试注册和登录。",
    guestTitle: "还没有登录",
    guestDescription: "先登录或注册一个账户，后面的网站记录才能和你的身份绑定。",
    login: "去登录",
    register: "去注册",
    email: "当前邮箱",
    status: "当前状态",
    confirmed: "已登录",
    signOut: "退出登录",
    signingOut: "退出中...",
    nextTitle: "下一步会接到这里",
    nextItems: ["我的方案", "我的订单", "我的工程师复审申请"]
  },
  en: {
    eyebrow: "My Account",
    title: "Account Center",
    description: "This first pass builds the account loop. Plans, orders, review requests, and delivery records can connect here next.",
    loading: "Loading account state...",
    setup: "Supabase is not configured yet. Finish the environment variables before testing sign-up and sign-in.",
    guestTitle: "You are not signed in",
    guestDescription: "Log in or create an account first so future website records can attach to your identity.",
    login: "Log In",
    register: "Sign Up",
    email: "Current email",
    status: "Status",
    confirmed: "Signed in",
    signOut: "Sign Out",
    signingOut: "Signing Out...",
    nextTitle: "What connects here next",
    nextItems: ["My plans", "My orders", "My engineering review requests"]
  }
} as const;

export default function AccountPage() {
  const router = useRouter();
  const { language } = useSiteLanguage();
  const { isConfigured, isLoading, signOut, user } = useAuth();
  const [isPending, startTransition] = useTransition();
  const content = copy[language];

  function handleSignOut() {
    startTransition(async () => {
      const result = await signOut();

      if (!result.error) {
        router.push("/");
        router.refresh();
      }
    });
  }

  return (
    <>
      <Header />
      <main className="container-page py-16 sm:py-20">
        <section className="mx-auto max-w-3xl rounded-[28px] bg-white p-8 shadow-soft ring-1 ring-black/[0.05]">
          <p className="text-sm font-bold uppercase tracking-[0.1em] text-logo-green">{content.eyebrow}</p>
          <h1 className="mt-4 text-4xl font-extrabold text-ink">{content.title}</h1>
          <p className="mt-4 text-base leading-7 text-muted">{content.description}</p>

          {!isConfigured ? <p className="mt-8 rounded-2xl bg-[#FFF6EA] px-4 py-3 text-sm leading-6 text-[#8E6532]">{content.setup}</p> : null}
          {isLoading ? <p className="mt-8 text-sm font-bold text-muted">{content.loading}</p> : null}

          {!isLoading && isConfigured && !user ? (
            <div className="mt-8 rounded-[24px] bg-field p-6">
              <h2 className="text-2xl font-extrabold text-ink">{content.guestTitle}</h2>
              <p className="mt-3 text-sm leading-7 text-muted">{content.guestDescription}</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link className="btn-primary" href="/login">
                  {content.login}
                </Link>
                <Link className="btn-secondary" href="/register">
                  {content.register}
                </Link>
              </div>
            </div>
          ) : null}

          {!isLoading && user ? (
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <article className="rounded-[24px] bg-field p-6">
                <p className="text-xs font-bold uppercase tracking-[0.1em] text-logo-green">{content.email}</p>
                <p className="mt-5 text-lg font-bold text-ink">{user.email}</p>
              </article>
              <article className="rounded-[24px] bg-field p-6">
                <p className="text-xs font-bold uppercase tracking-[0.1em] text-logo-green">{content.status}</p>
                <p className="mt-5 text-lg font-bold text-ink">{content.confirmed}</p>
              </article>
              <article className="rounded-[24px] bg-field p-6 md:col-span-2">
                <p className="text-xs font-bold uppercase tracking-[0.1em] text-logo-green">{content.nextTitle}</p>
                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {content.nextItems.map((item) => (
                    <div className="rounded-2xl border border-line bg-white px-4 py-4 text-sm font-bold text-ink" key={item}>
                      {item}
                    </div>
                  ))}
                </div>
                <button className="btn-secondary mt-6" disabled={isPending} onClick={handleSignOut} type="button">
                  {isPending ? content.signingOut : content.signOut}
                </button>
              </article>
            </div>
          ) : null}
        </section>
      </main>
    </>
  );
}
