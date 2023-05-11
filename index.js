import fs from "fs"
import server from "./mod/server.js";

// 读取配置文件
const data = JSON.parse(String(fs.readFileSync("./config.json")))

// 开启监听
server(data)