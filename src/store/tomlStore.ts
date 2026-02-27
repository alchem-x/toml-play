"use client";

import { create } from "zustand";

export interface Example {
  id: string;
  title: string;
  toml: string;
  json: string;
  category: string;
}

interface TomlStore {
  examples: Example[];
}

const examples: Example[] = [
  {
    id: "1",
    title: "字符串",
    category: "基础类型",
    toml: `string = "hello world"
multiline = """
This is a
multiline string
""`,
    json: `{
  "string": "hello world",
  "multiline": "This is a\\nmultiline string"
}`,
  },
  {
    id: "2",
    title: "整数与浮点数",
    category: "基础类型",
    toml: `integer = 42
hex = 0xDEADBEEF
octal = 0o755
binary = 0b101010
float = 3.14159
scientific = 6.626e-34`,
    json: `{
  "integer": 42,
  "hex": 3735928559,
  "octal": 493,
  "binary": 42,
  "float": 3.14159,
  "scientific": 6.626e-34
}`,
  },
  {
    id: "3",
    title: "布尔值",
    category: "基础类型",
    toml: `bool1 = true
bool2 = false`,
    json: `{
  "bool1": true,
  "bool2": false
}`,
  },
  {
    id: "4",
    title: "DateTime",
    category: "基础类型",
    toml: `date1 = 1979-05-27
time1 = 07:32:00
datetime1 = 1979-05-27T07:32:00Z
datetime2 = 1979-05-27T07:32:00-07:00`,
    json: `{
  "date1": "1979-05-27",
  "time1": "07:32:00",
  "datetime1": "1979-05-27T07:32:00Z",
  "datetime2": "1979-05-27T07:32:00-07:00"
}`,
  },
  {
    id: "5",
    title: "Array",
    category: "数据结构",
    toml: `fruits = ["apple", "banana", "cherry"]
numbers = [1, 2, 3]
mixed = [1, "two", 3.0]`,
    json: `{
  "fruits": ["apple", "banana", "cherry"],
  "numbers": [1, 2, 3],
  "mixed": [1, "two", 3.0]
}`,
  },
  {
    id: "6",
    title: "Inline Table",
    category: "数据结构",
    toml: `point = { x = 1, y = 2 }
person = { name = "John", age = 30 }`,
    json: `{
  "point": { "x": 1, "y": 2 },
  "person": { "name": "John", "age": 30 }
}`,
  },
  {
    id: "7",
    title: "Table (Object)",
    category: "数据结构",
    toml: `[server]
host = "localhost"
port = 8080

[database]
name = "mydb"
enabled = true`,
    json: `{
  "server": {
    "host": "localhost",
    "port": 8080
  },
  "database": {
    "name": "mydb",
    "enabled": true
  }
}`,
  },
  {
    id: "8",
    title: "Nested Table",
    category: "数据结构",
    toml: `[product.table]
name = "Widget"
price = 29.99`,
    json: `{
  "product": {
    "table": {
      "name": "Widget",
      "price": 29.99
    }
  }
}`,
  },
  {
    id: "9",
    title: "Array of Tables",
    category: "数据结构",
    toml: `[[products]]
name = "Widget"
price = 9.99

[[products]]
name = "Gadget"
price = 19.99`,
    json: `{
  "products": [
    { "name": "Widget", "price": 9.99 },
    { "name": "Gadget", "price": 19.99 }
  ]
}`,
  },
  {
    id: "10",
    title: "Array of Nested Objects",
    category: "数据结构",
    toml: `[[users]]
name = "Alice"
role = "admin"

[[users.contacts]]
email = "alice@example.com"

[[users]]
name = "Bob"
role = "user"`,
    json: `{
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
}`,
  },
  {
    id: "11",
    title: "Comment",
    category: "高级特性",
    toml: `# This is a comment
key = "value" # inline comment
# Multiline
# comments
key2 = "value2"`,
    json: `{
  "key": "value",
  "key2": "value2"
}`,
  },
  {
    id: "12",
    title: "Special Characters",
    category: "高级特性",
    toml: `escape = "line1\\nline2"
tab = "col1\\tcol2"
quote = "He said \\"Hello\\""
backslash = "path\\\\to\\\\file"`,
    json: `{
  "escape": "line1\\nline2",
  "tab": "col1\\tcol2",
  "quote": "He said \\"Hello\\"",
  "backslash": "path\\\\to\\\\file"
}`,
  },
  {
    id: "13",
    title: "Literal String",
    category: "高级特性",
    toml: `literal = 'no escaping needed'
path = 'C:\\Users\\John\\Documents'`,
    json: `{
  "literal": "no escaping needed",
  "path": "C:\\\\Users\\\\John\\\\Documents"
}`,
  },
  {
    id: "14",
    title: "Multiline Literal",
    category: "高级特性",
    toml: `content = '''
This is raw text.
No escaping needed.
\\n stays as \\n
''`,
    json: `{
  "content": "This is raw text.\\nNo escaping needed.\\n\\\\n stays as \\\\n"
}`,
  },
  {
    id: "15",
    title: "Empty Values",
    category: "高级特性",
    toml: `empty-string = ""
empty-array = []
empty-table = {}`,
    json: `{
  "empty-string": "",
  "empty-array": [],
  "empty-table": {}
}`,
  },
];

export const useTomlStore = create<TomlStore>((set) => ({
  examples,
}));
