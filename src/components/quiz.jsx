import { useState } from "react";
function Quiz(){
    const questions = [ 
        { 
        question: "What does JSX short for??",
         options: ["JavaScript XML", "Java Syntax Extension", "JSON XML"], 
         answer: "JavaScript XML" 
        }, 
         { 
        question: "Which hook stores changing data?", 
         options: ["useEffect", "useState", "useRef"],
         answer: "useState" 
        },
         {question: "React is a JavaScript library for building ___" ,
         options: ["Database", "user interface ", "design platform"],
         answer: "user interface " 
        },  
        ]
        const [current, setCurrent] = useState(0);
        const [score, setScore] = useState(0);
        const [feedback, setFeedback] = useState("");
        const [selected, setSelected] = useState(null); 
        function handleQste(option){
            setSelected(option);
            if(option===questions[current].answer){
                setScore(score+1);
                setFeedback("well done!");
            }
            else{
                setFeedback("the right answer is : "+questions[current].answer);
            }
        }
            function handleNext() {
            setSelected(null);
            setFeedback("");
            setCurrent(current + 1);
        } 
        function handleRestart(){
            setFeedback("");
            setScore(null);
            setSelected(null);
            setCurrent(0); 

            
        }
        if(current >= questions.length){
            return(<div classeName>
                <h1>the quiz is finished !</h1>
                <h1>
                     your score: {score} / {questions.length}</h1>
                     <button  className="  text-2xl px-6 py-4 rounded bg-gray-100 font-bold mt-4 hover:bg-blue-300" onClick={()=> handleRestart()}>
                        restart
                     </button>
            </div>)
        }
        const q=questions[current];
       return(
         <div className="flex flex-col items-center gap-4 p-8">
         <p className="text-sm text-gray-500">Question {current + 1} of {questions.length}</p> 
         <h2 className="text-2xl font-bold">{q.question}</h2>

         <div className="flex flex-col gap-2 w-64">
          {q.options.map((option) => (
         <button
          key={option}
          onClick={() => handleQste(option)}
          className={ selected ? option === questions[current].answer ? 
            "bg-green-500 text-white px-4 py-2 rounded" : option === selected ? 
            "bg-red-500 text-white px-4 py-2 rounded" : "bg-gray-200 px-4 py-2 rounded" :
             "bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded" } 
         >
          {option}
        </button>
      ))}

       </div>
            {feedback && <p className="font-bold mt-2">{feedback}</p>}
           {
            feedback && (
                <button onClick={handleNext}
                className="  text-2xl px-6 py-4 rounded bg-gray-100 font-bold mt-4 hover:bg-blue-300">
                    next 
                </button>
            )
           }
     </div>
)
      
}

export default Quiz;
