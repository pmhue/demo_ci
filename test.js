const assert = require("assert");
const { sum } = require("./math.js");

console.log("--> Bắt đầu chạy kiểm thử...");

try {
  assert.strictEqual(sum(2, 3), 5, "Lỗi: 2 + 3 phải bằng 5");
  assert.strictEqual(sum(-1, 1), 0, "Lỗi: -1 + 1 phải bằng 0");
  console.log("✔ Toàn bộ bài test thành công!");
  process.exit(0);
} catch (error) {
  console.error("✖ Test thất bại:");
  console.error(error.message);
  process.exit(1);
}