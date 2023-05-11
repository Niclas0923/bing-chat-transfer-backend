import {BingChat} from 'bing-chat'

async function send(cookie,text,mod) {
    const api = new BingChat({
        cookie: cookie
    })

    return await api.sendMessage(text,{variant: mod})
}

export default send