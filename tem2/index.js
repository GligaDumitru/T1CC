const http = require('http');
const PORT = process.env.PORT || 5000;
const router = require('./router')
const routes = require('./routes')

const server = http.createServer(async (req, res) => {
    await router(req, res, routes);
})

server.listen(PORT, () => console.log(`Server is running at port: ${PORT}`))