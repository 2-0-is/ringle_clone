import MainPage from "../page/mainPage";
import "react-day-picker/dist/style.css";

export default function Home() {
  return (
    <div>
      <main className="flex max-h-screen min-w-full flex-col items-center container">
        <MainPage />
      </main>
    </div>
  );
}
