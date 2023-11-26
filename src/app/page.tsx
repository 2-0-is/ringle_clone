import Header from "../components/header";
import DayPick from "@/components/dayPick";
import TimePick from "@/components/timePick";
import "react-day-picker/dist/style.css";

export default function Home() {
  return (
    <div>
      <main className="flex max-h-screen min-w-full flex-col items-center container">
        <Header />
        <div className="flex flex-row items-center relative h-full w-full">
          <DayPick />
          <TimePick />
        </div>
      </main>
    </div>
  );
}
