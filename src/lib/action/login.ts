import axios from "axios";

export default async function login(email: string, password: string) {
  try {
    const response = await axios.post(
      process.env.BASE_URL_API + "/api/v1/login",
      {
        email,
        password,
      }
    );

    console.log(response.data);
    return response.data;
  } catch (error) {
    return error;
  }
}
