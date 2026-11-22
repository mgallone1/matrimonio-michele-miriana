const http = require('http');
const { spawn } = require('child_process');

async function testMidFlap() {
  const chromeProc = spawn('google-chrome', [
    '--headless',
    '--disable-gpu',
    '--remote-debugging-port=9228',
    '--window-size=390,844',
    'http://127.0.0.1:3000/'
  ]);

  await new Promise(r => setTimeout(r, 2000));

  http.get('http://127.0.0.1:9228/json', async (res) => {
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
        await new Promise(r => setTimeout(r, 1500));

        // Click seal and immediately set GSAP progress to 0.35 (flap rising with seal in 3D)
        await send('Runtime.evaluate', {
          expression: `
            const seal = document.querySelector('img[alt*="Sigillo"]');
            if (seal) seal.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
            setTimeout(() => {
              const tl = window.gsap && window.gsap.globalTimeline.getChildren()[0];
              if (tl) {
                tl.pause();
                tl.progress(0.35);
              }
            }, 50);
          `
        });

        await new Promise(r => setTimeout(r, 600));
        let snap = await send('Page.captureScreenshot', { format: 'png' });
        require('fs').writeFileSync('/home/michele/.gemini/antigravity/brain/20a753e4-1bb2-4026-a39c-25a920f5782d/artifacts_media/seal_mid_flight_3d.png', Buffer.from(snap.data, 'base64'));

        console.log('Saved seal_mid_flight_3d.png');
        ws.close();
        chromeProc.kill();
      };
    });
  });
}

testMidFlap().catch(console.error);
