const Session = require("../models/Session");
const Question = require("../models/Question");
const { create } = require("../models/User");
const User = require("../models/User");


// @desc Create a new session and linked questions
// @route POST/api/sessions/create
// @access Private
exports.createSession = async ( req, res ) =>{
    try{
        const { role, experience, topicsToFocus, description, questions } = req.body;
        const userId = req.user._id; 

        const session = await Session.create({
            user: userId,
            role,
            experience,
            topicsToFocus,
            description
        });

        const questionDocs = await Promise.all(
            questions.map(async (q) => {
                const question = await Question.create({
                    session: session._id,
                    question: q.question,
                    answer: q.answer
                });
                return question._id;
            })
        );

        session.questions = questionDocs;
        await session.save();

        res.status(201).json({ success: true, session });


    }catch( error ){
        res.status( 500 ).json({ success: false, message: "Server Error!"});
    }
};


// @desc Get all sessions of the logged in User
// @route GET /api/sessions/my-sessions
// @acceess Private
exports.getMySessions = async ( req, res ) => {
    try{
        const sessions = await Session.find({ user: req.user._id })
        .sort( { createdAt: -1})
        .populate("questions");
        res.status(200).json(sessions);
        
    }catch( error ){
        res.status( 500 ).json({ success: false, message: "Server Error!"});
    }
};


//@desc Get a session by ID with populated questions 
//@route GET  /api/sessions/:id
//@accesss  Private
exports.getSessionById = async ( req, res ) => {
    try{
        const session = await Session.findById( req.params.id )
        .populate({
            path: "questions",
            options: { sort: { isPinned: -1, createdAt: 1} },
        })
        .exec();

        if( !session ) {
            return res.status(404).json({ success: false, message: "Session not found" });

        }
        res.status(200).json({ success: true, session });

    }catch( error ){
        res.status( 500 ).json({ success: false, message: "Server Error!"});
    }
}; 

//@desc Deleet a session and its questions 
//@route  DELETE /api/sessions/:id
//@access Private
exports.deleteSession = async ( req, res ) => {
    try{
        const session = await Session.findById(req.params.id);

        if( !session ) {
            res.status(404).json({message: "Session not Found!"});
        }

        //Checked if the logged -in user owns this session 
        if( session.user.toString() != req.user._id.toString() ){
            return res.status(401).json({message: "Not authorised to delete the session"});

        }

        //First delete all questions linked to this session 
        await Question.deleteMany({ session: session._id});

        //Then,delete session 

        await session.deleteOne();

        res.status(200).json({message: "Session deleted successfully!"});

    }catch( error ){
        res.status( 500 ).json({ success: false, message: "Server Error!"});
    }
};