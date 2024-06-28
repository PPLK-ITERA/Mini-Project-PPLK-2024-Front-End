export const QuizSkeleton = ({className=''}: {className: string}) => {
  return (
    <div className={`max-md:grow ${className}`}>
      <div className="rounded-lg text-xl font-semibold w-full bg-gray-300 animate-pulse h-6"></div>
      <div className="mt-2 w-full bg-gray-300 animate-pulse h-4 rounded-lg"></div>
      <div className="w-full p-4 rounded-lg shadow-inner bg-gray-300 animate-pulse mt-4 h-16"></div>
      <ul className="w-full flex flex-col gap-2 mt-8">
        {Array.from({ length: 4 }).map((_, index) => (
          <li key={index}>
            <div className="w-full bg-gray-300 animate-pulse h-12 rounded-lg"></div>
          </li>
        ))}
      </ul>
      <div className='max-md:grow'></div>
      <div className="w-full bg-gray-300 animate-pulse h-12 rounded-lg my-8"></div>
    </div>
  );
};
