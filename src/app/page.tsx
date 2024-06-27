import LoginForm from "@/components/layout/LoginForm";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <LoginForm />
    </div>
  );
}
