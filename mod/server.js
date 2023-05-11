import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import send from "./send.js";

// 释放网页
const server = (data)=>{
    const point = data["point"]
    const cookie = data["cookie"]
    const app = express()
    // 允许跨域
    app.use(cors());
    // 设置body的接收方式
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    // 接收post命令
    app.post('/bing' , (req , res)=>{
        // 获取数据对象
        const { model, text } = req.body;
        let mod = ""
        switch (parseInt(model)) {
            case 0: mod = 'Creative'; break
            case 1: mod = "Balanced"; break
            case 2: mod = "Precise"; break
        }

        const data0 = send(cookie,text,mod)

        if (data0){
            res.send(data0)
        }else {
            res.status(500).send('<h1>访问失败</h1>');
        }

    })


    // 判断端口的输入
    if (point){
        // 直接发放网页并开启监听
        app.listen(point,function () {
            console.log(point+'端口http协议监听中')
        })
    }else console.log("端口非纯数字，请去config文件修改为数字")

}

export default server