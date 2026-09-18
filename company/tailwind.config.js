/** Tailwind 配置：只扫描 index.html，产出最小化 CSS */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      // 你站上用了 animate-blob，但 Tailwind 默认没有这个动画 ——
      // 所以那两个光斑其实一直是静止的。这里补上真正的 keyframes。
      keyframes: {
        blob: {
          "0%":   { transform: "translate(0px, 0px) scale(1)" },
          "33%":  { transform: "translate(30px, -50px) scale(1.1)" },
          "66%":  { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
      },
      animation: {
        blob: "blob 7s infinite",
      },
    },
  },
  plugins: [],
};
