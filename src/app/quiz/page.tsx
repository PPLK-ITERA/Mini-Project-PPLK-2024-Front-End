'use client'

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const quizData = [
  {
    question: "What is the capital of France?",
    answers: ["Berlin", "Madrid", "Paris", "Rome"],
  },
  {
    question: "What is 2 + 2?",
    answers: ["3", "4", "5", "6"],
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    answers: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"],
  },
  {
    question: "What is the capital of Japan?",
    answers: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
  },
];

export default function Page() {
  const router = useRouter();

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswerOptionClick = (answerIndex: number) => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      router.push('/answer');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
        <div className="mb-4">
          <span className="text-xl font-semibold">Question {currentQuestion + 1}/{quizData.length}</span>
        </div>
        <div className="mb-4">
          <h2 className="text-2xl font-bold">{quizData[currentQuestion].question}</h2>
        </div>
        <ul className="flex flex-col gap-2">
          {quizData[currentQuestion].answers.map((answer, answerIndex) => (
            <li key={answerIndex}>
              <Button
                onClick={() => handleAnswerOptionClick(answerIndex)}
                className='w-full'
              >
                {answer}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};