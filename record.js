const fs = require('fs');
const mic = require('mic');
const { Readable } = require('stream');

const micOptions = {
    rate: '16000',
    channels: '1',
    fileType: 'wav',
}

const record = (audioFilename) => {
    return new Promise((resolve, reject) => {
        const micInstance = mic(micOptions);

        const micInputStream = micInstance.getAudioStream();
        const output = fs.createWriteStream(audioFilename);
        const writable = new Readable().wrap(micInputStream);

        console.log('🎙 Recording now, please describe your website design needs to me, and press \x1b[31mCtrl+C\x1b[0m to end the recording.');

        writable.pipe(output);
        micInstance.start();

        process.on('SIGINT', () => {
            micInstance.stop();
            console.log('💽 Recording completed.');
            resolve();
        });

        micInputStream.on('error', (err) => {
            console.log('error', err);
            reject(err);
        });
    });
};

module.exports = record