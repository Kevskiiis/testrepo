type SetCardProps = {
    title: string;
    description: string;
    setCount: number;
    author: string;
}

function SetCard({title, description, setCount, author} : SetCardProps) {
  return (
    <div
      className={`
        flex flex-col items-center justify-center gap-4
        bg-amber-400 h-60 w-80
        rounded-lg border-5 border-red-300
      `}
    >   
        <div className="flex items-center justify-center w-full">
            <h1 className="truncate bg-amber-500 h-15 w-full text-left pt-1 pl-5 pr-5 font-extrabold text-xl">{title}</h1>
        </div>
        <div className="flex items-center justify-center w-full">
            <p className="truncate bg-purple-300 h-15 w-full text-left pt-1 pl-5 pr-5 font-medium text-base">{description}</p>
        </div>
        <div className="flex justify-around items-center bg-amber-300 h-15 w-full">
            <p className="truncate pl-2 pr-2 max-w-30 min-w-20">{author}</p>
            <span className="truncate pl-2 pr-2 max-w-35 min-w-20">{setCount} terms</span>
        </div>
    </div>
  );
}
export default SetCard; 