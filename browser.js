const proxyquire = require('proxyquireify')(require); 
const realMiniget = require('miniget');
const m3u8stream = require('m3u8stream');
// We import the library so it cached before using proxyquire
const ytdlCore = require('ytdl-core');

var ytdl_client = (options) => {
    return proxyquire(ytdlCore, {
        miniget(url, opts){
            return realMiniget(options.proxyUrl + url, opts);
        },
        m3u8stream(url, opts){
            return m3u8stream(options.proxyUrl + url, opts);
        },
        ...(options.proxyquireStubs || {})
    });
};

module.exports = ytdl_client;