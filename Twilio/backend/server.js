const express = require('express');
const twilio = require('./Twilio');
const cors = require('cors');
const http = require('http');
const soketIo = require('socket.io');
const jwt = require('./utils/Jwt');

const app = express();
const server = http.createServer(app);
const io = soketIo(server);

io.on('connection', (socket) => {
  console.log('socket id', socket.id);
  socket.on('disconnect', () => {
    console.log('socket connection disconnected');
  });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const PORT = 3001;
app.get('/test', (req, res) => {
  res.send('Welcome to Twilio');
});

app.post('/login', async (req, res) => {
  const { to, username, channel } = req.body;
  console.log('process.env.MOBILE', process.env.MOBILE);
  console.log('to', to);
  const data = await twilio.sendVerifyAsync(to, channel);
  res.send('Sent code');
});

app.post('/verify', async (req, res) => {
  console.log('Verify code');
  const { to, code, username } = req.body;
  const data = await twilio.verifyCodeAsync(to, code);
  if (data.status) {
    const token = jwt.createJwt(username);
    return res.send({ token });
  }
  res.status(401).send('invaid token');
});

server.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
