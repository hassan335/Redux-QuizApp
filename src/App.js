import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";

import DenseAppBar from "./component/header";
import { useSelector } from "react-redux";
import React, { useState } from "react";

function App() {
  const state = useSelector((e) => e);
  const [questions, setquestions] = useState(state);
  const [questionInd, setQuestionInd] = useState(0);
  const [marks, setmarks] = useState(0);

  const CheckAnswer = (valuee, c) => {
    if (valuee == c) {
      setmarks(marks + 1);
      nextQuestion();
    }
    nextQuestion();
  };
  const nextQuestion = () => {
    if (questions.length - 1 == questionInd) {
      Showmarks();
    } else {
      setQuestionInd(questionInd + 1);
    }
  };
  const Showmarks = () => {
    debugger;
    return marks;
  };

  return (
    <div className="App">
      <DenseAppBar />
      <Grid>
        <Grid spacing={3} container>
          <Grid md={12}>
            <Typography className="py-5" variant="h5">
              {questions[questionInd].question}
            </Typography>
          </Grid>

          {questions[questionInd].options.map((valu, ind) => (
            <Grid className="pt-5" md={6}>
              <Button
                variant="contained"
                onClick={() =>
                  CheckAnswer(questions[questionInd].correctAnswer, valu)
                }
              >
                {valu}
              </Button>
            </Grid>
          ))}

          <Grid
            className=" "
            style={{ padding: "150px 0px 0px 350px" }}
            md={12}
          >
            <Button variant="outlined" onClick={() => nextQuestion()}>
              Next
            </Button>
          </Grid>
        </Grid>

        <Typography variant="h3">{Showmarks()} </Typography>
      </Grid>
    </div>
  );
}

export default App;
