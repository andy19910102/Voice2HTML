const fs = require('fs');
const record = require('./record');
const transcribe = require('./transcribe');
const writeHTML = require('./write-html');

async function main(audioFilename = 'audio.wav') {
    await record(audioFilename);
    const transcription = await transcribe(audioFilename);
    await writeHTML(transcription);
}

main();