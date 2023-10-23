import Navigation from "./navigation";
import ButtonDarkMode from "./button-switch-colorscheme";

export default function Header() {
  return (
    <header className="flex justify-between items-center mb-6">
      <Navigation />
      <h1 className="text-stone-700 font-bold text-xl ">Expense Tracker App</h1>
      <ButtonDarkMode />
    </header>
  );
}
