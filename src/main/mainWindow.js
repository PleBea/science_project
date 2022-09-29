import BrowserWinHandler from './BrowserWinHandler'
const path = require('path')

const winHandler = new BrowserWinHandler({
  height: 600,
  width: 450,
  resizable: false,
  icon: path.join(__dirname, 'src/renderer/assets/sunrin.png')
})

winHandler.onCreated(_browserWindow => {
  winHandler.loadPage('/')
  // Or load custom url
  // _browserWindow.loadURL('https://google.com')
})

export default winHandler
