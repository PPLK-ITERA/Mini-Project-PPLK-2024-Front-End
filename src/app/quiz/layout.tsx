import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full">
      <Image src="/assets/background-quiz.png" className="fixed w-screen top-0 left-0 -z-50 -translate-y-1/2" quality={100} width={1000} height={500} alt="quiz-background" />
      {children}
    </div>
  );
}