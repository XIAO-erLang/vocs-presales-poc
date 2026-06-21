"use client";

import { FormEvent, useState } from "react";
import { intentOptions, projectStatusOptions, roleOptions } from "@/lib/data";
import type { IntentOption, LeadPayload, ProjectStatus, Role } from "@/lib/types";

const defaultPayload: LeadPayload = {
  name: "",
  contact: "",
  role: "sales",
  hasProject: "active",
  desiredContent: "完整资料包",
  intent: "fullPack",
  message: ""
};

export function LeadForm() {
  const [payload, setPayload] = useState<LeadPayload>(defaultPayload);
  const [status, setStatus] = useState<string>("");

  function update<K extends keyof LeadPayload>(key: K, value: LeadPayload[K]) {
    setPayload((current) => ({ ...current, [key]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("正在保存 mock 记录...");
    console.log("lead payload", payload);

    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      setStatus("提交失败，请稍后再试。");
      return;
    }

    setStatus("已记录 mock 意向。第一版会在控制台输出，后续可接 Supabase。");
  }

  return (
    <form className="panel grid gap-4 p-5 sm:p-7" onSubmit={handleSubmit}>
      <label className="grid gap-2 text-sm font-bold">
        姓名或称呼
        <input
          className="rounded-md border border-line bg-paper px-3 py-3 font-normal outline-none focus:border-amber"
          onChange={(event) => update("name", event.target.value)}
          placeholder="例如：张工"
          required
          value={payload.name}
        />
      </label>
      <label className="grid gap-2 text-sm font-bold">
        微信或邮箱
        <input
          className="rounded-md border border-line bg-paper px-3 py-3 font-normal outline-none focus:border-amber"
          onChange={(event) => update("contact", event.target.value)}
          placeholder="用于后续发送样张或确认资料包"
          required
          value={payload.contact}
        />
      </label>
      <label className="grid gap-2 text-sm font-bold">
        身份
        <select
          className="rounded-md border border-line bg-paper px-3 py-3 font-normal outline-none focus:border-amber"
          onChange={(event) => update("role", event.target.value as Role)}
          value={payload.role}
        >
          {roleOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-sm font-bold">
        是否有真实项目
        <select
          className="rounded-md border border-line bg-paper px-3 py-3 font-normal outline-none focus:border-amber"
          onChange={(event) => update("hasProject", event.target.value as ProjectStatus)}
          value={payload.hasProject}
        >
          {projectStatusOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-sm font-bold">
        想获取的内容
        <input
          className="rounded-md border border-line bg-paper px-3 py-3 font-normal outline-none focus:border-amber"
          onChange={(event) => update("desiredContent", event.target.value)}
          value={payload.desiredContent}
        />
      </label>
      <label className="grid gap-2 text-sm font-bold">
        意向选项
        <select
          className="rounded-md border border-line bg-paper px-3 py-3 font-normal outline-none focus:border-amber"
          onChange={(event) => update("intent", event.target.value as IntentOption)}
          value={payload.intent}
        >
          {intentOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-sm font-bold">
        一句话描述需求
        <textarea
          className="min-h-28 rounded-md border border-line bg-paper px-3 py-3 font-normal outline-none focus:border-amber"
          onChange={(event) => update("message", event.target.value)}
          placeholder="例如：客户是喷涂车间，想知道报价前要补哪些参数。"
          value={payload.message}
        />
      </label>
      <button className="btn-primary" type="submit">
        提交意向
      </button>
      {status ? <p className="rounded-md bg-leaf/10 p-3 text-sm text-leaf-dark">{status}</p> : null}
    </form>
  );
}
