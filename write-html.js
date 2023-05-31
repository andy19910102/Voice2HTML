const fs = require('fs');
const openai = require("./lib/openai");

const writeHTML = async (transcription) => {
    const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [
            { role: 'system', content: `你是一個專業的網頁設計師，你將會使用我提供給你的敘述幫我寫一個簡單的網頁，包含請將CSS直接包在HTML檔案內，提交給我HTML檔案即可，請直接給我原始碼，原始碼不需要換行，不需要跟我多做解釋。` },
            { role: 'user', content: `請以此主題：「${transcription}」提交網頁的HTML原始碼給我，提交原始碼給我即可，不需多做說明。` }
        ],
        temperature: 0
    });
    const aiMessage = response.data.choices[0].message.content;
    fs.writeFileSync('index.html', aiMessage, 'utf8');
    console.log('🛠 Website finished please check the file: index.html');
};

module.exports = writeHTML;