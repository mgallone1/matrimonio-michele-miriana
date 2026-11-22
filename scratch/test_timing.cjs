const http = require('http');
const { spawn } = require('child_process');

async function testAnimationTiming() {
  const chromeProc = spawn('google-chrome', [
    '--headless',
    '--disable-gpu',
    '--remote-debugging-port=9226',
    '--window-size=390,844',
    'http://127.0.0.1:3000/'
  ]);

  await new Promise(r => setTimeout(r, 2000));

  http.get('http://127.0.0.1:9226/json', async (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', async () => {
      const targets = JSON.parse(data);
      const wsUrl = targets[0]?.webSocketDebuggerUrl;
      const ws = new (globalThis.WebSocket || require('ws'))(wsUrl);

      let id = 1;
      function send(method, params = {}) {
        return new Promise((resolve) => {
          const reqId = id++;
          const handler = (msg) => {
            const parsed = JSON.parse(msg.data || msg);
            if (parsed.id === reqId) {
              ws.removeEventListener('message', handler);
              resolve(parsed.result);
            }
          };
          ws.addEventListener('message', handler);
          ws.send(JSON.stringify({ id: reqId, method, params }));
        });
      }

      ws.onopen = async () => {
        console.log('WS connected');
        await new Promise(r => setTimeout(r, 1500));

        // Click the wax seal
        await send('Runtime.evaluate', {
          expression: `
            const seal = document.querySelector('img[alt*="Sigillo"]');
            if (seal) seal.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
          `
        });

        // 1. Capture at 500ms
        await new Promise(r => setTimeout(r, 500));
        let snap1 = await send('Page.captureScreenshot', { format: 'png' });
        require('fs').writeFileSync('/home/michele/.gemini/antigravity/brain/20a753e4-1bb2-4026-a39c-25a920f5782d/artifacts_media/step_01_seal_lift.png', Buffer.from(snap1.data, 'base64'));

        // 2. Capture at 1200ms
        await new Promise(r => setTimeout(r, 700));
        let snap2 = await send('Page.captureScreenshot', { format: 'png' });
        require('fs').writeFileSync('/home/michele/.gemini/antigravity/brain/20a753e4-1bb2-4026-a39c-25a920f5782d/artifacts_media/step_02_3d_unfold.png', Buffer.from(snap2.data, 'base64'));

        // 3. Capture at 2600ms
        await new Promise(r => setTimeout(r, 1400));
        let snap3 = await send('Page.captureScreenshot', { format: 'png' });
        require('fs').writeFileSync('/home/michele/.gemini/antigravity/brain/20a753e4-1bb2-4026-a39c-25a920f5782d/artifacts_media/step_03_site_revealed.png', Buffer.from(snap3.data, 'base64'));

        console.log('Saved all 3 steps!');
        ws.close();
        chromeProc.kill();
      };
    });
  });
}

testAnimationTiming().catch(console.error);
