# Voice2HTML: A Node.js Voice Commands AI Application using OpenAI's Whisper API

This project enables the generation of simple HTML source code through voice commands, using OpenAI's Whisper model.

中文展示片段：[https://youtu.be/BhgsN5zuIGY](https://youtu.be/BhgsN5zuIGY)


## Features

- **Voice Recognition**: The Whisper ASR API provides accurate voice recognition to interpret user instructions.

- **HTML Generation**: The application translates spoken instructions into valid HTML code to create a webpage.

## Setup Instructions

Follow the steps below to set up and run this project:

1. Clone or download the repository.
2. n the root directory of the project, create a .env file. Add the following line, replacing `YOUR_OPENAI_API_KEY` with your actual OpenAI API key:
```
OPENAI_API_KEY=YOUR_OPENAI_API_KEY
```
3. Open your terminal, navigate to the project directory, and run `npm i` to install the necessary dependencies.
4. To start the project, run `npm start` in the terminal.
5. After the AI generates the webpage source code, you will find the updated `index.html` file in the project's root directory. To preview the web page, you can use the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in Visual Studio Code.

## Disclaimer

Please note that this project is experimental in nature. The current AI model does not yet possess the capabilities required to generate code suitable for practical applications. If you are considering its use, please discuss this with your engineering team.

## Author

Name: Huang An-Sheng
Github: [https://github.com/andy19910102](https://github.com/andy19910102)

Contributions, queries, and suggestions are welcome. Feel free to reach out to the author.