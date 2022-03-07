import dotenv from 'dotenv'
import LoveMsg from './libs/LoveMsg'
import dayjs from "./utils/dayjs";
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dotenv.config()

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.tz.setDefault('Asia/Beijing')

// 早安、午安、晚安 => 由环境变量控制
LoveMsg()
