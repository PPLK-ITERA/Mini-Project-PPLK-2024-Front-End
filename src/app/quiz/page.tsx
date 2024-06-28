import Image from "next/image";
import LoginForm from "@/components/layout/LoginForm";
import QuizForm from "@/components/layout/QuizForm";

export default function Home() {
  return (
      <div className="h-full max-w-3xl mx-auto">
        <QuizForm />
      </div>
  );
}
