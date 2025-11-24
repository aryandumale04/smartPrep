const { GoogleGenAI } =  require("@google/genai");
const { conceptExplainPrompt} = require("../utils/prompts");

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY});


//@desc Generate interview questions and answers using Gemini
//@route POST /api/ai/geenrate-questions
//@access Private
const generateInterviewQuestions = async(req, res) => {
    try{

    }catch(error){
        return res.status(500).json({ message: "Failed to generate questions!"
            ,error: error.message
        });
    }
};


//@desc Generate explanation for an interview question
//@route POST /api/ai/generate-explanation
//2access Private
const generateConceptExplanation = async(req, res) => {
    try{

    }catch(error){
        return res.status(500).json({ message: "Failed to generate questions!"
            ,error: error.message
        });
    }
};

module.exports = {generateInterviewQuestions,  generateConceptExplanation };