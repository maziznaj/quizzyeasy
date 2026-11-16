export function saveResult(title, category, score) {
  const old = JSON.parse(localStorage.getItem("results") || "[]");

  const newResult = {
    title,
    category,
    score,
    date: new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }),
  };

  localStorage.setItem("results", JSON.stringify([newResult, ...old]));
}