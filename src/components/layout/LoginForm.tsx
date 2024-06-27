import { Button } from "../ui/button";
import { Input } from "../ui/input";

const LoginForm = () => { 
    return (
        <div>
            <form className="flex flex-col items-center justify-between p-24">
                <h1 className="text-4xl font-bold mb-8">Login</h1>

                <Input className="w-96 h-12 mb-4 px-4 rounded-md border border-gray-300" type="text" placeholder="Email" />
                <Input className="w-96 h-12 mb-4 px-4 rounded-md border border-gray-300" type="text" placeholder="Password" />

                <Button className="w-96 h-12 mb-4 px-4 rounded-md border border-gray-300" type="submit">Login</Button>
            </form>
        </div>
    )
}

export default LoginForm;