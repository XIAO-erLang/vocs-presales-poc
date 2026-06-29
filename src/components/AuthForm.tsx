"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState, useTransition } from "react";
import { useAuth } from "@/components/AuthProvider";
import { useSiteLanguage } from "@/components/LanguageProvider";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";

type AuthMode = "login" | "register";

const copy = {
  login: {
    zh: {
      eyebrow: "账户登录",
      title: "登录你的源解账户",
      description: "登录后可以保存后续方案、订单、复审申请和账户记录。",
      email: "邮箱",
      password: "密码",
      submit: "登录",
      pending: "登录中...",
      alternateLabel: "还没有账户？",
      alternateAction: "注册"
    },
    en: {
      eyebrow: "Account Login",
      title: "Log in to SourceLink",
      description: "Sign in to keep future plans, orders, review requests, and account records under one account.",
      email: "Email",
      password: "Password",
      submit: "Log In",
      pending: "Signing In...",
      alternateLabel: "No account yet?",
      alternateAction: "Create one"
    }
  },
  register: {
    zh: {
      eyebrow: "注册账户",
      title: "创建你的源解账户",
      description: "先完成基础注册，后面再把方案、订单和复审记录都沉淀到同一个账户下。",
      email: "邮箱",
      password: "密码",
      confirmPassword: "确认密码",
      submit: "注册",
      pending: "注册中...",
      alternateLabel: "已经有账户？",
      alternateAction: "去登录",
      success: "注册请求已提交。如果启用了邮箱确认，请先去邮箱完成验证后再登录。"
    },
    en: {
      eyebrow: "Create Account",
      title: "Create your SourceLink account",
      description: "Finish the base account setup first, then connect plans, orders, and review records to the same account.",
      email: "Email",
      password: "Password",
      confirmPassword: "Confirm password",
      submit: "Sign Up",
      pending: "Creating...",
      alternateLabel: "Already have an account?",
      alternateAction: "Log in",
      success: "Registration has been submitted. If email confirmation is enabled, finish verification in your inbox before logging in."
    }
  }
} as const;

export function AuthForm({ mode }: { mode: AuthMode }) {
  const router = useRouter();
  const { language } = useSiteLanguage();
  const { user } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isPending, startTransition] = useTransition();
  const supabase = getSupabaseBrowserClient();
  const content = copy[mode][language];
  const registerContent = copy.register[language];

  const alternateHref = mode === "login" ? "/register" : "/login";

  const setupMessage = useMemo(
    () =>
      language === "zh"
        ? "Supabase 还没有配置完成。请先把 NEXT_PUBLIC_SUPABASE_URL 和 NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY 写入本地环境变量。"
        : "Supabase is not configured yet. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY to the local environment first.",
    [language]
  );

  useEffect(() => {
    if (user) {
      router.replace("/account");
    }
  }, [router, user]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (!supabase) {
      setErrorMessage(setupMessage);
      return;
    }

    if (mode === "register" && password !== confirmPassword) {
      setErrorMessage(language === "zh" ? "两次输入的密码不一致。" : "The passwords do not match.");
      return;
    }

    startTransition(async () => {
      if (mode === "login") {
        const { error } = await supabase.auth.signInWithPassword({ email, password });

        if (error) {
          setErrorMessage(error.message);
          return;
        }

        router.push("/account");
        router.refresh();
        return;
      }

      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/account`
        }
      });

      if (error) {
        setErrorMessage(error.message);
        return;
      }

      if (data.session) {
        router.push("/account");
        router.refresh();
        return;
      }

      setSuccessMessage(registerContent.success);
    });
  }

  return (
    <section className="mx-auto w-full max-w-md rounded-[28px] bg-white p-8 shadow-soft ring-1 ring-black/[0.05]">
      <p className="text-sm font-bold uppercase tracking-[0.1em] text-logo-green">{content.eyebrow}</p>
      <h1 className="mt-4 text-3xl font-extrabold text-ink">{content.title}</h1>
      <p className="mt-3 text-sm leading-7 text-muted">{content.description}</p>

      <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
        <label className="block">
          <span className="mb-2 block text-sm font-bold text-ink">{content.email}</span>
          <input
            className="w-full rounded-2xl border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-sand-soft"
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            required
            type="email"
            value={email}
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-bold text-ink">{content.password}</span>
          <input
            className="w-full rounded-2xl border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-sand-soft"
            onChange={(event) => setPassword(event.target.value)}
            required
            type="password"
            value={password}
          />
        </label>

        {mode === "register" ? (
          <label className="block">
            <span className="mb-2 block text-sm font-bold text-ink">{registerContent.confirmPassword}</span>
            <input
              className="w-full rounded-2xl border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-sand-soft"
              onChange={(event) => setConfirmPassword(event.target.value)}
              required
              type="password"
              value={confirmPassword}
            />
          </label>
        ) : null}

        {errorMessage ? <p className="rounded-2xl bg-[#FFF3F0] px-4 py-3 text-sm leading-6 text-[#A2472B]">{errorMessage}</p> : null}
        {successMessage ? <p className="rounded-2xl bg-[#F3F8F3] px-4 py-3 text-sm leading-6 text-[#48613E]">{successMessage}</p> : null}

        <button className="btn-primary w-full" disabled={isPending} type="submit">
          {isPending ? content.pending : content.submit}
        </button>
      </form>

      <p className="mt-6 text-sm text-muted">
        {content.alternateLabel}{" "}
        <Link className="font-bold text-leaf transition hover:text-leaf-dark" href={alternateHref}>
          {content.alternateAction}
        </Link>
      </p>
    </section>
  );
}
