##How To Install

```
npm install ytdl-client
    or
npm i ytdl-client
```

##Usage

```
import ytdl-client from "ytdl-client";
    or
const ytdl_client = require("ytdl-client");

ytdl({
    proxyUrl: 'https://cors-anywhere.herokuapp.com/',
    // proxyquireStubs: {}, arguments mapped directly to proxyquireify
    // For more info, see https://www.npmjs.com/package/proxyquireify
})
    .getInfo('https://www.youtube.com/watch?v=WPdbEbwNTcU')
    .then(info=>console.log(info))
    .catch(err=>{throw err;});
```
