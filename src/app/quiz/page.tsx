import Image from "next/image";
import LoginForm from "@/components/layout/LoginForm";
import QuizForm from "@/components/layout/QuizForm";

export default function Home() {
  return (
    <main>
      <div className="h-full w-full">
        <QuizForm />
      </div>
    </main>
  );
}
