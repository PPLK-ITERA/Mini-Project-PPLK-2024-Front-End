'use client'

import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ArrowRight } from 'lucide-react';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { Montserrat } from 'next/font/google';

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
  },{
    question: "Who wrote 'To Kill a Mockingbird'?",
    answers: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"],
  },
  {
    question: "What is the capital of Japan?",
    answers: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
  },
];

const montserrat = Montserrat({subsets: ['latin']})

export default function Page() {
  const router = useRouter();

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)

  const handleAnswerOptionClick = (answerIndex: number) => {
    setSelectedAnswer(answerIndex)
  }

  function submitAnswer() {
    if (selectedAnswer === null) return

    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
    } else {
      router.push('/answer')
    }
  }

  return (
    <div className={`${montserrat.className} mx-auto px-8 flex flex-col items-center justify-center h-full w-full max-w-3xl text-start place-content-center text-white gap-4`}>
        <div className='max-md:grow'></div>

        <span className="text-xl font-semibold w-full">Question {currentQuestion + 1}/{quizData.length}</span>  
        <Progress value={((currentQuestion + 1) * 100 / quizData.length)} />
        <div className="w-full p-4 rounded-lg shadow-inner bg-black/30">
          <h2 className="text-lg font-bold">{quizData[currentQuestion].question}</h2>
        </div>

        <ul className="w-full flex flex-col gap-2 mt-8">
          {quizData[currentQuestion].answers.map((answer, answerIndex) => (
            <li key={answerIndex}>
              <Button
                onClick={() => handleAnswerOptionClick(answerIndex)}
                className={clsx({
                  'bg-white text-candlelight-800 hover:bg-jaffa-100': answerIndex !== selectedAnswer,
                  'bg-gradient-to-r from-candlelight-800 to-candlelight-950': answerIndex === selectedAnswer,
                }, 'w-full font-medium')}
              >
                {answer}
              </Button>
            </li>
          ))}
        </ul>

        <div className='max-md:grow'></div>

        <Button
          onClick={submitAnswer}
          className="w-full bg-jaffa-600 my-8"
        >
          {currentQuestion < quizData.length - 1 ? 'Next' : 'Submit'}
          <ArrowRight />
        </Button>
    </div>
  );
};