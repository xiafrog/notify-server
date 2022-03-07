import dotenv from 'dotenv'
import LoveMsg from './libs/LoveMsg'
import moment from "moment"

dotenv.config()

moment.locale('zh-cn')


// 早安、午安、晚安 => 由环境变量控制
LoveMsg()
