"use client";

import { useTomlStore, Example } from "@/store/tomlStore";
import { useEffect, useState } from "react";

function CodeBlock({ code, label, color, delay }: { code: string; label: string; color: string; delay: number }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`flex flex-col flex-1 min-w-0 transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className={`px-4 py-2.5 text-sm font-bold text-white rounded-t-xl ${color} shadow-md`}>
        {label}
      </div>
      <pre className="flex-1 p-5 overflow-auto text-sm bg-[#1e1e2e] rounded-b-xl border-x border-b border-white/5 leading-relaxed whitespace-pre-wrap break-all font-mono">
        <code className="text-[#cdd6f4]">{code}</code>
      </pre>
    </div>
  );
}

function ExampleCard({ example, index }: { example: Example; index: number }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), index * 80 + 150);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div 
      className={`flex flex-col lg:flex-row gap-4 p-5 lg:p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-orange-100/50 hover:border-orange-200/80 transition-all duration-500 hover:shadow-xl hover:shadow-orange-100/50 hover:-translate-y-1 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="flex-1 min-w-0">
        <CodeBlock code={example.toml} label="TOML" color="bg-gradient-to-r from-orange-500 to-amber-500" delay={0} />
      </div>
      <div className="flex-1 min-w-0">
        <CodeBlock code={example.json} label="JSON" color="bg-gradient-to-r from-teal-500 to-emerald-500" delay={50} />
      </div>
    </div>
  );
}

function CategorySection({ category, examples, categoryIndex }: { category: string; examples: Example[]; categoryIndex: number }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), categoryIndex * 120);
    return () => clearTimeout(timer);
  }, [categoryIndex]);

  const categoryEmojis: Record<string, string> = {
    "基础类型": "🔰",
    "数据结构": "🗂️",
    "高级特性": "⚡",
  };

  return (
    <section className="mb-16">
      <div className={`flex items-center gap-4 mb-8 transition-all duration-700 delay-100 ${
        visible ? "opacity-100" : "opacity-0 -translate-x-4"
      }`}>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-orange-300 to-transparent" />
        <h2 className="text-2xl font-bold text-slate-800 px-4 flex items-center gap-3">
          <span className="text-2xl">{categoryEmojis[category] || "📌"}</span>
          {category}
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-orange-300 to-transparent" />
      </div>
      <div className="flex flex-col gap-6">
        {examples.map((example, idx) => (
          <ExampleCard key={example.id} example={example} index={idx} />
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  const { examples } = useTomlStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const groupedExamples = examples.reduce((acc, example) => {
    if (!acc[example.category]) {
      acc[example.category] = [];
    }
    acc[example.category].push(example);
    return acc;
  }, {} as Record<string, Example[]>);

  const categories = Object.keys(groupedExamples);

  return (
    <div className="min-h-screen bg-[#fff8f0] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-100 via-[#fff8f0] to-[#fff8f0]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybilpIi8+CjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25VcmUiPgo8cGF0aCBkPSJNMCAwIEwgNjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJvcmFuZ2UtNTAwLzEwIiBzdHJva2Utd2lkdGg9IjAuNSIvPgo8L3BhdHRlcm4+Cjwvc3ZnPg==')] opacity-40" />
      
      <header className={`sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-orange-100 transition-all duration-500 ${
        mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-400 via-amber-400 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-200">
                  <span className="text-white font-black text-xl">T</span>
                </div>
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-orange-400 to-amber-400 opacity-30 blur-md -z-10" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
                  TOML <span className="text-orange-500">Play</span>
                </h1>
                <p className="text-xs text-slate-500 tracking-wide uppercase">TOML ↔ JSON 对照表</p>
              </div>
            </div>
            <a
              href="https://toml.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-4 py-2 text-sm text-slate-600 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all duration-300 border border-transparent hover:border-orange-200"
            >
              <span className="group-hover:mr-1 transition-all">TOML 文档</span>
              <span className="ml-1 group-hover:translate-x-1 inline-block transition-transform">→</span>
            </a>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className={`text-center mb-16 transition-all duration-700 delay-200 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100/80 border border-orange-200/50 text-orange-600 text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            交互式参考指南
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">
            TOML 对照 JSON
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-lg">
            展示常见的 TOML 语法及其对应的 JSON 表示形式。
          </p>
        </div>

        <div className={`hidden lg:grid grid-cols-2 gap-8 mb-12 transition-all duration-500 delay-300 ${
          mounted ? "opacity-100" : "opacity-0"
        }`}>
          <div className="flex items-center justify-end pr-4">
            <div className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-2xl font-bold text-lg shadow-lg shadow-orange-200">
              ← TOML 语法
            </div>
          </div>
          <div className="flex items-center justify-start pl-4">
            <div className="px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-2xl font-bold text-lg shadow-lg shadow-teal-200">
              JSON 输出 →
            </div>
          </div>
        </div>

        {categories.map((category, idx) => (
          <CategorySection
            key={category}
            category={category}
            examples={groupedExamples[category]}
            categoryIndex={idx}
          />
        ))}
      </main>

      <footer className="border-t border-orange-100 mt-20 relative z-10 bg-white/30">
        <div className="max-w-7xl mx-auto px-6 py-10 text-center">
          <p className="text-slate-500 text-sm">
            使用 <span className="text-slate-700">Next.js</span> + <span className="text-slate-700">Zustand</span> + <span className="text-slate-700">TailwindCSS</span> 构建
          </p>
        </div>
      </footer>
    </div>
  );
}
