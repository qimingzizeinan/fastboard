import { execSync } from "child_process";
import fs from "fs";
import path from "path";

// 获取所有包的路径
const packagesDir = path.join(__dirname, "../packages");
const packageNames = fs.readdirSync(packagesDir);

async function publish(packageName) {
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
  // console.log("packageDir", packageDir);

  // 执行发布命令
  console.log(`发布 ${packageName}...`);
  try {
    execSync("pnpm run publish", { cwd: packageDir, stdio: "inherit" });
  } catch (error) {
    console.error(error);
  }
}

for (const item of packageNames) {
  await publish(item);
}
