import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import {BingChat} from 'bing-chat'

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
    app.post('/bing' , async (req , res)=>{
        // 获取数据对象
        let { model, val , api} = await req.body;
        const mod = await {
            0: 'Creative',
            1: 'Balanced',
            2: 'Precise'
        }[parseInt(model)];

        await console.log(val)

        // 测试是否发送了api
        api = await api==="null"?new BingChat({cookie: cookie}):api

        const data0 =  await api.sendMessage(val,{variant: mod})

        await console.log(data0.text)

        if (data0){
            await res.send({back:data0,api:api})
        }else {
            await res.status(500).send('<h1>访问失败</h1>');
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