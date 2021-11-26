const INITIAL_STATE = [{
      question: "Pre Requsites for Learning React",
      options: ["ES6 and HTML", "XML"],
      correctAnswer: "ES6 and HTML",
    },
    {
      question: "who created react",
      options: ["Google", "Amazon", "Facebook", "linkedin"],
      correctAnswer: "Facebook",
    },]
const reducer = (state = INITIAL_STATE) => state;

export default reducer;
