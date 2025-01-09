const SkeletonPizzaCard = () => {
  return (
    <div className="flex h-full w-full animate-out flex-col gap-5 dark:bg-gray-800 bg-slate-300 p-4 rounded-md">
      <div className="animate-pulse w-full h-full xl:py-20 lg:py-[110px] md:py-32 sm:py-24 py-14 rounded-full duration-1000 dark:bg-gray-600 bg-slate-400">
        <div className="animate-pulse w-full h-full rounded-full duration-1000 dark:bg-gray-600 bg-slate-400"></div>
      </div>
      <div className="animate-pulse w-1/2 h-7 py-3 duration-1000 rounded-md dark:bg-gray-600 bg-slate-400"></div>
      <div className="animate-pulse w-full h-20 py-3 duration-700 rounded-md dark:bg-gray-600 bg-slate-400"></div>
      <div className="flex justify-between">
        <div className="animate-pulse w-1/4 h-7 py-3 duration-700 rounded-md dark:bg-gray-600 bg-slate-400"></div>
        <div className="animate-pulse w-1/3 h-7 py-3 duration-1000 rounded-md dark:bg-gray-600 bg-slate-500"></div>
      </div>
    </div>
  );
};

export default SkeletonPizzaCard;
