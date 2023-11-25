import Header from "../components/header";
import DayPick from "@/components/dayPick";
import "react-day-picker/dist/style.css";

export default function Home() {
  return (
    <div>
      <main className="flex min-h-screen min-w-full flex-col items-center container">
        <Header />
        <div className="flex flex-row items-center relative h-full w-full">
          <DayPick />
          <div />
        </div>
      </main>
    </div>
  );
}
