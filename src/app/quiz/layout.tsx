import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full bg-[url('/assets/background-quiz.png')] bg-no-repeat bg-cover bg-bottom">
      {/* <Image src="/assets/background-quiz.png" className="fixed w-screen bottom-0 left-0 -z-50" quality={100} width={1000} height={500} alt="quiz-background" /> */}
      <div className="fixed w-screen h-screen top-0 left-0 -z-50 bg-black/30" />
      {children}
    </div>
  );
}
