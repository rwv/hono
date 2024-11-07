import { Hono } from '../src'
import { handle } from '../src/adapter/aliyun-fc3'
import type { AliyunFCContext, AliyunFCEvent } from '../src/adapter/aliyun-fc3'

interface Env {
  Bindings: {
    event: AliyunFCEvent
    context: AliyunFCContext
  }
}

const app = new Hono<Env>()

app.all('*', (c) => {
  const { event, context } = c.env
  return c.json({ event, context })
})

const handler = handle(app)

export { handler }
