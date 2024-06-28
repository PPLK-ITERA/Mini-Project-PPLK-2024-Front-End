import { Question } from "../types/Question"
import { Result } from "../types/Result"

export async function getResult(token: string): Promise<Result> {
    const response = await fetch(`https://c0c7-110-137-38-231.ngrok-free.app/api/v1/result`, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            Accept: "application/json",
            "ngrok-skip-browser-warning": "69420",
        },
        method: "GET",
    })

    console.log(response.body)

    return await response.json()
}

// export async function deleteResult(token: string): Promise<void> {
//     const response = await fetch(`https://c0c7-110-137-38-231.ngrok-free.app/result/{user_id}/delete

// `, {
//         headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//             Accept: "application/json",
//             "ngrok-skip-browser-warning": "69420",
//         },
//         method: "POST",
//     })
// }
