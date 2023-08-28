const { Configuration, OpenAIApi } = require("openai");

const config = new Configuration({
    apiKey: "",
});

const openai = new OpenAIApi(config);

const runPrompt = async () => {

    const param1 = "weekly";
    const param2 = "maintenance";
    const param3 = "AC";
    const param4 = "manufacturing";
    

    const prompt1 = [`Create a title for a ${param1} ${param2} checklist for a ${param3} used in ${param4} industry`,
        `Create a short description for ${param1} ${param2}  for a ${param3} used in ${param4} industry `,  
        `Create a  list for ${param1} ${param2} checklist for a ${param3} used in ${param4} industry`];
    
    prompt1.map(async(arg) => {
        console.log(arg)

        const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: arg,
        max_tokens: 2048,
        temperature: 1,
        });

        console.log(response.data.choices[0].text);
    })
};

runPrompt();