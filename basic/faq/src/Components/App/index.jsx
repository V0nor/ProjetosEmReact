import React, { useState } from 'react';
import { Question } from '../Question';
import Data from '../Data';
import './style.css';

export function App() {
  const [questions, setQuestion] = useState(Data);
  return (
    <main>
      <div className="container">
        <h2 className="title">F.A.Q</h2>
        {questions.map((question) => {
          return <Question key={question.id} {...question} />;
        })}
      </div>
    </main>
  );
}
