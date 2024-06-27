import Image from "next/image";
import LoginForm from "@/components/layout/LoginForm";

export default function Home() {
  return (
    <main>
      <div className="flex min-h-screen flex-col items-center justify-between ">
        <LoginForm/>
      </div>
    </main>
  );
}
