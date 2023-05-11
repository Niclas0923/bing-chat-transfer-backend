import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import { BingChat } from 'bing-chat'

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
        const api = new BingChat({cookie: cookie})
        let mod = ""
        switch (model) {
            case 0: mod = 'Creative'; break
            case 1: mod = "Balanced"; break
            case 2: mod = "Precise"; break
        }

        const data = api.sendMessage(text, {variant: mod})

        if (data){
            res.send(data)
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