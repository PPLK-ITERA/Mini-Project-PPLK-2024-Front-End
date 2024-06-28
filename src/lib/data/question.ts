import { Question } from "../types/QuestionsResponse"

export async function getQuestions(token: string): Promise<Question[]> {
    const response = await fetch(`https://c0c7-110-137-38-231.ngrok-free.app/api/v1/questions`, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            Accept: "application/json",
            "ngrok-skip-browser-warning": "69420",
        },
        method: "GET",
    })

    const data: Question[] = Object.values(await response.json())
    return data
}

export async function answerQuestion(token: string, questionId: number, answerId: number): Promise<void> {
    const response = await fetch(
        `https://c0c7-110-137-38-231.ngrok-free.app/api/v1/question/${questionId}/answer/${answerId}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
                Accept: "application/json",
                "ngrok-skip-browser-warning": "69420",
            },
            method: "POST",
        }
    )
}
