const express = require('express');
const axios = require('axios');
const app = express();

// Proxy video request to the extracted URL
app.get('/video', async (req, res) => {
  const videoUrl = 'https://rr4---sn-npoe7ne6.googlevideo.com/videoplayback?expire=1736383159&ei=N6p-Z9CaD4iZsfIP9cTBwQg&ip=2a04:3543:1000:2310:30da:13ff:fead:6be6&id=23c21b922ee527c2&itag=18&source=blogger&xpc=Egho7Zf3LnoBAQ==&met=1736354359,&mh=ZW&mm=31&mn=sn-npoe7ne6&ms=au&mv=m&mvi=4&pl=32&rms=au,au&susc=bl&eaua=2ELzA4xTPkY&mime=video/mp4&vprv=1&rqh=1&dur=1441.146&lmt=1730146390749004&mt=1736353998&txp=1311224&sparams=expire,ei,ip,id,itag,source,xpc,susc,eaua,mime,vprv,rqh,dur,lmt&sig=AJfQdSswRQIhAPdkFOb3-7567zK6cwZ50rJyUBwDn1t1lX7jkj7wYf57AiAfmVD3y7Rirx0yxYqQv14xod5qEqKm2niBZ8OaT2Aalg==&lsparams=met,mh,mm,mn,ms,mv,mvi,pl,rms&lsig=AGluJ3MwRAIgJVGHb__OeU0yX2RW1X8HHarfRrptZx_MuT-kJME9FtwCIB-dXge9JUzHT43DABbnLFMKwW7RSDBdrrLLVmuSjMq2'; // This should be the extracted video URL
  
  try {
    // Make the actual request to the video URL
    const videoResponse = await axios.get(videoUrl, {
      headers: {
        'Referer': 'https://desustream.info',
        'Origin': 'https://desustream.info',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'video/webm,video/mp4,video/*;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
        'Range': 'bytes=0-',
        'Sec-Fetch-Dest': 'video',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'cross-site'
      },
      responseType: 'stream', // Stream the video
    });

    // Set the correct response headers
    res.setHeader('Content-Type', 'video/mp4');
    res.setHeader('Accept-Ranges', 'bytes');
    
    // Pipe the video stream from the video URL to the response
    videoResponse.data.pipe(res);
    
  } catch (error) {
    console.error('Error proxying video:', error.message);
    res.status(500).json({ error: 'Failed to proxy video request' });
  }
});

// Run server on localhost:8080 or your domain server
app.listen(8080, () => {
  console.log('Server running on http://localhost:8080');
});
