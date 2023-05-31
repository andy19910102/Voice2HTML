const fs = require('fs');
const openai = require("./lib/openai");

const transcribe = async (filename) => {
    const transcript = await openai.createTranscription(
        fs.createReadStream(filename),
        'whisper-1'
    );
    const text = transcript.data.text
    console.log("🤖: I'm going to help you design:", text);
    console.log("🤖: Please wait for the AI to generate the webpage content...")
    return text;
};

module.exports = transcribe;