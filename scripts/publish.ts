import { execSync } from "child_process";
import fs from "fs";
import path from "path";

// 获取所有包的路径
const packagesDir = path.join(__dirname, "../packages");
const packageNames = fs.readdirSync(packagesDir);

// 遍历所有包并执行发布命令
packageNames.forEach(packageName => {
  const packageDir = `${packagesDir}/${packageName}`;
  // 判断是否是文件夹
  if (!fs.statSync(packageDir).isDirectory()) {
    return;
  }
  const packageJsonPath = `${packageDir}/package.json`;
  // 检查是否是私有包
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
  if (packageJson.private) {
    console.log(`${packageName} 是私有包，跳过发布。`);
    return;
  }

  // 执行发布命令
  console.log(`发布 ${packageName}...`);
  execSync("pnpm run publish", { cwd: packageDir, stdio: "inherit" });
});
