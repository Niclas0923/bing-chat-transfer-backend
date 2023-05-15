import fs from "fs"
import server from "./mod/server.js";

// 读取配置文件
const data = JSON.parse(String(fs.readFileSync("./config.json")))

// 开启监听
if(data.cookie.length === 0) console.log("config.json文件中的cookie值没有设置，请根据md文件中的描述进行设置，如果不设置cookie值那么需要你传入cookie值来使用。")
server(data)