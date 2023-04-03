// A express server, which will handle api requests coming in and respond back with a json object.
// It will use body parser as well as cors
const OpenAI = require("openai");
const { Configuration, OpenAIApi } = OpenAI;


const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3001;

const configuration = new Configuration({
    organization: "org-1tHwOsImlAF3VVvFrbGUKbNP",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);

app.use(bodyParser.json());
app.use(cors());

app.post("/", async(req, res) => {
    const { message } = req.body;
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Hello, this is ChatGPT. How can I can you today? 
        Person: I want some motivation.
        ChatGPT: You are amazing! You can do anything you want.
        ${message}`,
        max_tokens: 500,
        temperature: 0,
    });
    console.log(response.data)
    if(response.data.choices[0].text){
    res.json({ 
        message: response.data.choices[0].text})
    };
});

app.listen(port, () => {
  console.log("Example app listening");
});
