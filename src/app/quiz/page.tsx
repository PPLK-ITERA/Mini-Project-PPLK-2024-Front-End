'use client'

import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ArrowRight, Flag } from 'lucide-react';
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
          {currentQuestion < quizData.length - 1 ? <ArrowRight className="ml-2" /> : <svg className="ml-2" width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.5 1.62503C0.500012 1.54192 0.516601 1.45964 0.548796 1.38302C0.580991 1.30639 0.628146 1.23696 0.6875 1.17878C1.36865 0.511053 2.27866 0.127987 3.23229 0.107551C4.18592 0.0871153 5.11149 0.430846 5.82063 1.06878L6.04 1.27378C6.49589 1.67322 7.08138 1.89342 7.6875 1.89342C8.29363 1.89342 8.87911 1.67322 9.335 1.27378L9.49063 1.1319C9.87188 0.83003 10.445 1.07128 10.4969 1.5544L10.5 1.62503V7.25003C10.5 7.33314 10.4834 7.41542 10.4512 7.49204C10.419 7.56867 10.3719 7.6381 10.3125 7.69628C9.63135 8.36401 8.72134 8.74707 7.76772 8.76751C6.81409 8.78794 5.88851 8.44421 5.17938 7.80628L4.96 7.60128C4.51846 7.21441 3.95486 6.99526 3.36795 6.98223C2.78104 6.9692 2.20827 7.16313 1.75 7.53003V11.625C1.74982 11.7843 1.68883 11.9376 1.57947 12.0534C1.47011 12.1692 1.32065 12.2389 1.16163 12.2483C1.0026 12.2576 0.846013 12.2059 0.723855 12.1036C0.601697 12.0014 0.52319 11.8563 0.504375 11.6982L0.5 11.625V1.62503Z" fill="white"/>
</svg>}
        </Button>
    </div>
  );
};