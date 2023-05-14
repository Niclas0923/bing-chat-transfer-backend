import fs from "fs"
import server from "./mod/server.js";

// 读取配置文件
const data = JSON.parse(String(fs.readFileSync("./config.json")))

// 开启监听
if(data.cookie.length === 0) console.error("config.json文件中的cookie值没有设置，请根据md文件中的描述进行设置")
else server(data)