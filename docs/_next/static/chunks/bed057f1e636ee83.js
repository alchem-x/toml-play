(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,52683,e=>{"use strict";let t;var a=e.i(43476),l=e.i(71645);let s=e=>{let t,a=new Set,l=(e,l)=>{let s="function"==typeof e?e(t):e;if(!Object.is(s,t)){let e=t;t=(null!=l?l:"object"!=typeof s||null===s)?s:Object.assign({},t,s),a.forEach(a=>a(t,e))}},s=()=>t,r={setState:l,getState:s,getInitialState:()=>i,subscribe:e=>(a.add(e),()=>a.delete(e))},i=t=e(l,s,r);return r},r=e=>{let t=e?s(e):s,a=e=>(function(e,t=e=>e){let a=l.default.useSyncExternalStore(e.subscribe,l.default.useCallback(()=>t(e.getState()),[e,t]),l.default.useCallback(()=>t(e.getInitialState()),[e,t]));return l.default.useDebugValue(a),a})(t,e);return Object.assign(a,t),a},i=[{id:"1",title:"字符串",category:"基础类型",toml:`string = "hello world"
multiline = """
This is a
multiline string
""`,json:`{
  "string": "hello world",
  "multiline": "This is a\\nmultiline string"
}`},{id:"2",title:"整数与浮点数",category:"基础类型",toml:`integer = 42
hex = 0xDEADBEEF
octal = 0o755
binary = 0b101010
float = 3.14159
scientific = 6.626e-34`,json:`{
  "integer": 42,
  "hex": 3735928559,
  "octal": 493,
  "binary": 42,
  "float": 3.14159,
  "scientific": 6.626e-34
}`},{id:"3",title:"布尔值",category:"基础类型",toml:`bool1 = true
bool2 = false`,json:`{
  "bool1": true,
  "bool2": false
}`},{id:"4",title:"DateTime",category:"基础类型",toml:`date1 = 1979-05-27
time1 = 07:32:00
datetime1 = 1979-05-27T07:32:00Z
datetime2 = 1979-05-27T07:32:00-07:00`,json:`{
  "date1": "1979-05-27",
  "time1": "07:32:00",
  "datetime1": "1979-05-27T07:32:00Z",
  "datetime2": "1979-05-27T07:32:00-07:00"
}`},{id:"5",title:"Array",category:"数据结构",toml:`fruits = ["apple", "banana", "cherry"]
numbers = [1, 2, 3]
mixed = [1, "two", 3.0]`,json:`{
  "fruits": ["apple", "banana", "cherry"],
  "numbers": [1, 2, 3],
  "mixed": [1, "two", 3.0]
}`},{id:"6",title:"Inline Table",category:"数据结构",toml:`point = { x = 1, y = 2 }
person = { name = "John", age = 30 }`,json:`{
  "point": { "x": 1, "y": 2 },
  "person": { "name": "John", "age": 30 }
}`},{id:"7",title:"Table (Object)",category:"数据结构",toml:`[server]
host = "localhost"
port = 8080

[database]
name = "mydb"
enabled = true`,json:`{
  "server": {
    "host": "localhost",
    "port": 8080
  },
  "database": {
    "name": "mydb",
    "enabled": true
  }
}`},{id:"8",title:"Nested Table",category:"数据结构",toml:`[product.table]
name = "Widget"
price = 29.99`,json:`{
  "product": {
    "table": {
      "name": "Widget",
      "price": 29.99
    }
  }
}`},{id:"9",title:"Array of Tables",category:"数据结构",toml:`[[products]]
name = "Widget"
price = 9.99

[[products]]
name = "Gadget"
price = 19.99`,json:`{
  "products": [
    { "name": "Widget", "price": 9.99 },
    { "name": "Gadget", "price": 19.99 }
  ]
}`},{id:"10",title:"Array of Nested Objects",category:"数据结构",toml:`[[users]]
name = "Alice"
role = "admin"

[[users.contacts]]
email = "alice@example.com"

[[users]]
name = "Bob"
role = "user"`,json:`{
  "users": [
    {
      "name": "Alice",
      "role": "admin",
      "contacts": [
        { "email": "alice@example.com" }
      ]
    },
    {
      "name": "Bob",
      "role": "user"
    }
  ]
}`},{id:"11",title:"Comment",category:"高级特性",toml:`# This is a comment
key = "value" # inline comment
# Multiline
# comments
key2 = "value2"`,json:`{
  "key": "value",
  "key2": "value2"
}`},{id:"12",title:"Special Characters",category:"高级特性",toml:`escape = "line1\\nline2"
tab = "col1\\tcol2"
quote = "He said \\"Hello\\""
backslash = "path\\\\to\\\\file"`,json:`{
  "escape": "line1\\nline2",
  "tab": "col1\\tcol2",
  "quote": "He said \\"Hello\\"",
  "backslash": "path\\\\to\\\\file"
}`},{id:"13",title:"Literal String",category:"高级特性",toml:`literal = 'no escaping needed'
path = 'C:\\Users\\John\\Documents'`,json:`{
  "literal": "no escaping needed",
  "path": "C:\\\\Users\\\\John\\\\Documents"
}`},{id:"14",title:"Multiline Literal",category:"高级特性",toml:`content = '''
This is raw text.
No escaping needed.
\\n stays as \\n
''`,json:`{
  "content": "This is raw text.\\nNo escaping needed.\\n\\\\n stays as \\\\n"
}`},{id:"15",title:"Empty Values",category:"高级特性",toml:`empty-string = ""
empty-array = []
empty-table = {}`,json:`{
  "empty-string": "",
  "empty-array": [],
  "empty-table": {}
}`}],o=(t=e=>({examples:i}))?r(t):r;function n({code:e,label:t,color:s,delay:r}){let[i,o]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{let e=setTimeout(()=>o(!0),r);return()=>clearTimeout(e)},[r]),(0,a.jsxs)("div",{className:`flex flex-col flex-1 min-w-0 transition-all duration-700 ease-out ${i?"opacity-100 translate-y-0":"opacity-0 translate-y-4"}`,children:[(0,a.jsx)("div",{className:`px-4 py-2.5 text-sm font-bold text-white rounded-t-xl ${s} shadow-md`,children:t}),(0,a.jsx)("pre",{className:"flex-1 p-5 overflow-auto text-sm bg-[#1e1e2e] rounded-b-xl border-x border-b border-white/5 leading-relaxed whitespace-pre-wrap break-all font-mono",children:(0,a.jsx)("code",{className:"text-[#cdd6f4]",children:e})})]})}function c({example:e,index:t}){let[s,r]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{let e=setTimeout(()=>r(!0),80*t+150);return()=>clearTimeout(e)},[t]),(0,a.jsxs)("div",{className:`flex flex-col lg:flex-row gap-4 p-5 lg:p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-orange-100/50 hover:border-orange-200/80 transition-all duration-500 hover:shadow-xl hover:shadow-orange-100/50 hover:-translate-y-1 ${s?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`,children:[(0,a.jsx)("div",{className:"flex-1 min-w-0",children:(0,a.jsx)(n,{code:e.toml,label:"TOML",color:"bg-gradient-to-r from-orange-500 to-amber-500",delay:0})}),(0,a.jsx)("div",{className:"flex-1 min-w-0",children:(0,a.jsx)(n,{code:e.json,label:"JSON",color:"bg-gradient-to-r from-teal-500 to-emerald-500",delay:50})})]})}function d({category:e,examples:t,categoryIndex:s}){let[r,i]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{let e=setTimeout(()=>i(!0),120*s);return()=>clearTimeout(e)},[s]),(0,a.jsxs)("section",{className:"mb-16",children:[(0,a.jsxs)("div",{className:`flex items-center gap-4 mb-8 transition-all duration-700 delay-100 ${r?"opacity-100":"opacity-0 -translate-x-4"}`,children:[(0,a.jsx)("div",{className:"h-px flex-1 bg-gradient-to-r from-transparent via-orange-300 to-transparent"}),(0,a.jsxs)("h2",{className:"text-2xl font-bold text-slate-800 px-4 flex items-center gap-3",children:[(0,a.jsx)("span",{className:"text-2xl",children:{基础类型:"🔰",数据结构:"🗂️",高级特性:"⚡"}[e]||"📌"}),e]}),(0,a.jsx)("div",{className:"h-px flex-1 bg-gradient-to-r from-transparent via-orange-300 to-transparent"})]}),(0,a.jsx)("div",{className:"flex flex-col gap-6",children:t.map((e,t)=>(0,a.jsx)(c,{example:e,index:t},e.id))})]})}function m(){let{examples:e}=o(),[t,s]=(0,l.useState)(!1);(0,l.useEffect)(()=>{s(!0)},[]);let r=e.reduce((e,t)=>(e[t.category]||(e[t.category]=[]),e[t.category].push(t),e),{}),i=Object.keys(r);return(0,a.jsxs)("div",{className:"min-h-screen bg-[#fff8f0] relative overflow-hidden",children:[(0,a.jsx)("div",{className:"absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-100 via-[#fff8f0] to-[#fff8f0]"}),(0,a.jsx)("div",{className:"absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybilpIi8+CjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25VcmUiPgo8cGF0aCBkPSJNMCAwIEwgNjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJvcmFuZ2UtNTAwLzEwIiBzdHJva2Utd2lkdGg9IjAuNSIvPgo8L3BhdHRlcm4+Cjwvc3ZnPg==')] opacity-40"}),(0,a.jsx)("header",{className:`sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-orange-100 transition-all duration-500 ${t?"opacity-100 translate-y-0":"opacity-0 -translate-y-4"}`,children:(0,a.jsx)("div",{className:"max-w-7xl mx-auto px-6 py-4",children:(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsxs)("div",{className:"flex items-center gap-4",children:[(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)("div",{className:"w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-400 via-amber-400 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-200",children:(0,a.jsx)("span",{className:"text-white font-black text-xl",children:"T"})}),(0,a.jsx)("div",{className:"absolute -inset-1 rounded-2xl bg-gradient-to-br from-orange-400 to-amber-400 opacity-30 blur-md -z-10"})]}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("h1",{className:"text-2xl font-bold text-slate-900 tracking-tight",children:["TOML ",(0,a.jsx)("span",{className:"text-orange-500",children:"Play"})]}),(0,a.jsx)("p",{className:"text-xs text-slate-500 tracking-wide uppercase",children:"TOML ↔ JSON 对照表"})]})]}),(0,a.jsxs)("a",{href:"https://toml.io/",target:"_blank",rel:"noopener noreferrer",className:"group px-4 py-2 text-sm text-slate-600 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all duration-300 border border-transparent hover:border-orange-200",children:[(0,a.jsx)("span",{className:"group-hover:mr-1 transition-all",children:"TOML 文档"}),(0,a.jsx)("span",{className:"ml-1 group-hover:translate-x-1 inline-block transition-transform",children:"→"})]})]})})}),(0,a.jsxs)("main",{className:"relative z-10 max-w-7xl mx-auto px-6 py-12",children:[(0,a.jsxs)("div",{className:`text-center mb-16 transition-all duration-700 delay-200 ${t?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`,children:[(0,a.jsxs)("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100/80 border border-orange-200/50 text-orange-600 text-sm mb-6",children:[(0,a.jsx)("span",{className:"w-2 h-2 rounded-full bg-orange-500 animate-pulse"}),"交互式参考指南"]}),(0,a.jsx)("h2",{className:"text-5xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight",children:"TOML 对照 JSON"}),(0,a.jsx)("p",{className:"text-slate-600 max-w-xl mx-auto text-lg",children:"展示常见的 TOML 语法及其对应的 JSON 表示形式。"})]}),(0,a.jsxs)("div",{className:`hidden lg:grid grid-cols-2 gap-8 mb-12 transition-all duration-500 delay-300 ${t?"opacity-100":"opacity-0"}`,children:[(0,a.jsx)("div",{className:"flex items-center justify-end pr-4",children:(0,a.jsx)("div",{className:"px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-2xl font-bold text-lg shadow-lg shadow-orange-200",children:"← TOML 语法"})}),(0,a.jsx)("div",{className:"flex items-center justify-start pl-4",children:(0,a.jsx)("div",{className:"px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-2xl font-bold text-lg shadow-lg shadow-teal-200",children:"JSON 输出 →"})})]}),i.map((e,t)=>(0,a.jsx)(d,{category:e,examples:r[e],categoryIndex:t},e))]}),(0,a.jsx)("footer",{className:"border-t border-orange-100 mt-20 relative z-10 bg-white/30",children:(0,a.jsx)("div",{className:"max-w-7xl mx-auto px-6 py-10 text-center",children:(0,a.jsxs)("p",{className:"text-slate-500 text-sm",children:["使用 ",(0,a.jsx)("span",{className:"text-slate-700",children:"Next.js"})," + ",(0,a.jsx)("span",{className:"text-slate-700",children:"Zustand"})," + ",(0,a.jsx)("span",{className:"text-slate-700",children:"TailwindCSS"})," 构建"]})})})]})}e.s(["default",()=>m],52683)}]);