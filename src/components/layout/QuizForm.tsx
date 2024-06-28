'use client'

import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ArrowRight, Flag } from 'lucide-react';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Montserrat } from 'next/font/google';
import { Question } from '@/lib/types/Question';
import { answerQuestion, getQuestions } from '@/lib/data/question';
import { LoadingSpinner } from '../ui/loading';
import { useToast } from '../ui/use-toast';
import { QuizSkeleton } from '../fragments/QuizSkeleton';
import { motion } from "framer-motion"


const montserrat = Montserrat({subsets: ['latin']})

export default function Page() {
  const router = useRouter();
  const { toast } = useToast();
  const token = window.localStorage.getItem('access_token')

  const [questions, setQuestions] = useState<Question[]>([])
  const [loading, setLoading] = useState(true)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswerId, setSelectedAnswerId] = useState<number | null>(null)

  function mGetQuestions(token: string) {
    setLoading(true)
    getQuestions(token).then((data) => {
      setQuestions(data)
      setLoading(false)
    })
  }

  useEffect(() => {
    if (!token) {
      router.push('/')
      return
    }

    mGetQuestions(token)
  }, [])

  const onAnswerClick = (answerId: number) => {
    setSelectedAnswerId(answerId)
  }

  function submitAnswer() {
    if (selectedAnswerId === null || !token) return

    try {
        answerQuestion(token!, questions[currentQuestion].question_id, selectedAnswerId)
        
        if (currentQuestion === questions.length - 1) {
          router.push('/answer')
          return
        }
        
        setCurrentQuestion(currentQuestion + 1)
        setSelectedAnswerId(null)
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Gagal mengirim jawaban, mohon coba lagi hehe",
        });
      }
  }

  return (
    <motion.div 
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1]}}
    className={`${montserrat.className} mx-auto px-8 flex flex-col items-center justify-center h-full max-w-3xl text-start place-content-center text-white gap-4 overflow-y-auto`}>
        {
          loading ? 
          
          <QuizSkeleton className="w-full" /> :
        
          <div className='flex flex-col gap-4 w-full'>
            <div className='max-md:grow' />
            
            <span className="text-sm md:text-xl font-semibold w-full">Question {currentQuestion + 1}/{questions.length}</span>  
            <Progress value={((currentQuestion + 1) * 100 / questions.length)} />
            <div className="w-full min-h-48 max-h-64 overflow-y-auto p-4 rounded-lg shadow-inner bg-black/30 backdrop-blur">
              <h2 className="max-md:text-sm font-semibold text-justify">{questions[currentQuestion].teks_pertanyaan}</h2>
            </div>
            
            <ul className="w-full flex flex-col gap-2 mt-4 md:mt-8">
              {questions[currentQuestion].answer.map((ans) => (
                <li key={ans.answer_id}>
                  <Button
                    onClick={() => onAnswerClick(ans.answer_id)}
                    className={clsx({
                      'bg-white text-candlelight-800 hover:bg-jaffa-100': ans.answer_id !== selectedAnswerId,
                      'bg-gradient-to-r from-candlelight-800 to-candlelight-950': ans.answer_id === selectedAnswerId,
                    }, 'w-full font-medium text-wrap py-2 max-md:text-sm')}
                  >
                    {ans.teks_jawaban}
                  </Button>
                </li>
              ))}
            </ul>
            
            <div className='max-md:grow'></div>
            
            <Button
              onClick={submitAnswer}
              className="w-full bg-jaffa-600 my-4 md:my-8"
            >
              {currentQuestion < questions.length - 1 ? 'Next' : 'Submit'}
              {currentQuestion < questions.length - 1 ? <ArrowRight className="ml-2" /> : <svg className="ml-2" width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.5 1.62503C0.500012 1.54192 0.516601 1.45964 0.548796 1.38302C0.580991 1.30639 0.628146 1.23696 0.6875 1.17878C1.36865 0.511053 2.27866 0.127987 3.23229 0.107551C4.18592 0.0871153 5.11149 0.430846 5.82063 1.06878L6.04 1.27378C6.49589 1.67322 7.08138 1.89342 7.6875 1.89342C8.29363 1.89342 8.87911 1.67322 9.335 1.27378L9.49063 1.1319C9.87188 0.83003 10.445 1.07128 10.4969 1.5544L10.5 1.62503V7.25003C10.5 7.33314 10.4834 7.41542 10.4512 7.49204C10.419 7.56867 10.3719 7.6381 10.3125 7.69628C9.63135 8.36401 8.72134 8.74707 7.76772 8.76751C6.81409 8.78794 5.88851 8.44421 5.17938 7.80628L4.96 7.60128C4.51846 7.21441 3.95486 6.99526 3.36795 6.98223C2.78104 6.9692 2.20827 7.16313 1.75 7.53003V11.625C1.74982 11.7843 1.68883 11.9376 1.57947 12.0534C1.47011 12.1692 1.32065 12.2389 1.16163 12.2483C1.0026 12.2576 0.846013 12.2059 0.723855 12.1036C0.601697 12.0014 0.52319 11.8563 0.504375 11.6982L0.5 11.625V1.62503Z" fill="white"/>
              </svg>}
            </Button>
          </div>
        }
    </motion.div>
  );
};