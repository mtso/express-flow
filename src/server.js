import app from './app'

const listener = app.listen(process.env.PORT, () => {
  console.log(`Listening on ${listener.address().port}`)
})
