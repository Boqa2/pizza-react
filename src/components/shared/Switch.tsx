import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const Switch = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div
      className={`inline-flex h-7 bg-gray-400 text-white  w-14 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background`}
      onClick={toggleTheme} // Обработчик переключения темы
    >
      <div
        className={`relative pointer-events-none shadow-orange-500 dark:shadow-indigo-600 flex items-center p-1 h-6 w-6 shadow-inner rounded-full ring-0 transition-transform  dark:translate-x-7 translate-x-0 bg-orange-600  dark:bg-indigo-600 text-white"
          `}
      >
        {/* Отображаем иконку в зависимости от темы */}
        {theme === "dark" ? <Moon /> : <Sun />}
      </div>
    </div>
  );
};

export { Switch };
