"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { Header } from "@/components/Header";
import { SectionTitle } from "@/components/SectionTitle";
import { needOptions, nextActionOptions, projectStatusOptions, roleOptions } from "@/lib/data";
import type { Need, NextAction, ProjectStatus, Role } from "@/lib/types";

export default function FlowPage() {
  const router = useRouter();
  const [role, setRole] = useState<Role>("sales");
  const [need, setNeed] = useState<Need>("ask");
  const [project, setProject] = useState<ProjectStatus>("active");
  const [action, setAction] = useState<NextAction>("sample");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const params = new URLSearchParams({ role, need, project, action });
    router.push(`/result?${params.toString()}`);
  }

  return (
    <>
      <Header />
      <main className="container-page py-10">
        <SectionTitle
          eyebrow="身份/需求分流"
          title="先回答 4 个轻量问题"
          description="不让用户一上来填长表，先判断身份、需求、真实项目和下一步意向。"
        />
        <form className="grid gap-5 lg:grid-cols-2" onSubmit={submit}>
          <Question title="1. 你现在的身份更接近？">
            {roleOptions.map((option) => (
              <Choice checked={role === option.value} key={option.value} label={option.label} onChange={() => setRole(option.value)} />
            ))}
          </Question>

          <Question title="2. 你现在最想解决什么？">
            {needOptions.map((option) => (
              <Choice checked={need === option.value} key={option.value} label={option.label} onChange={() => setNeed(option.value)} />
            ))}
          </Question>

          <Question title="3. 你手上是否有真实 VOCs 项目？">
            {projectStatusOptions.map((option) => (
              <Choice
                checked={project === option.value}
                key={option.value}
                label={option.label}
                onChange={() => setProject(option.value)}
              />
            ))}
          </Question>

          <Question title="4. 你下一步更想要什么？">
            {nextActionOptions.map((option) => (
              <Choice checked={action === option.value} key={option.value} label={option.label} onChange={() => setAction(option.value)} />
            ))}
          </Question>

          <div className="lg:col-span-2">
            <button className="btn-primary w-full sm:w-auto" type="submit">
              查看推荐结果
            </button>
          </div>
        </form>
      </main>
    </>
  );
}

function Question({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <fieldset className="panel grid gap-3 p-5">
      <legend className="px-2 text-lg font-black">{title}</legend>
      {children}
    </fieldset>
  );
}

function Choice({ checked, label, onChange }: { checked: boolean; label: string; onChange: () => void }) {
  return (
    <label className="flex cursor-pointer items-center gap-3 rounded-md border border-line bg-field p-3 text-sm font-bold transition hover:border-leaf">
      <input checked={checked} className="h-4 w-4 accent-leaf" onChange={onChange} type="radio" />
      <span>{label}</span>
    </label>
  );
}
