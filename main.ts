import { Hono } from 'hono'

const app = new Hono()

app.post('/', (c) => {
  return c.json(c.req.header())
})

export default app
