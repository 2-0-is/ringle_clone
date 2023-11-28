import { SelectSingleContext } from "react-day-picker";
import DeleteModal from "./deleteModal";

interface ITimeProps {
  day: number;
  time: number;
  slot: number;
  hour_text: string;
  half_text: string;
  blocked: boolean;
  selectedDay: number;
  selectedTime: number;
  selectSlot: (day: number, time: number) => void;
  selectedTutor: number;
  setDeleteOpen: (arg0: boolean) => void;
}

const SlotItem = ({
  day,
  time,
  slot,
  hour_text,
  half_text,
  blocked,
  selectSlot,
  selectedDay,
  selectedTime,
  selectedTutor,
  setDeleteOpen,
}: ITimeProps) => {
  const choose_hour = () => {
    selectSlot(day, time);
  };
  const choose_half = () => {
    selectSlot(day, time + 1);
  };
  return (
    <div>
      {!blocked && (
        <div className="hour flex flex-col">
          <div className="half-0 h-8 border-t border-gray-300">
            {(day !== selectedDay || time !== selectedTime) && (
              <div
                className={`w-24 text-xs p-1 text-white hover:text-black z-10 hover:z-20 relative hover:bg-purple-100 ${
                  slot == 1 ? "h-8" : "h-16"
                }`}
                onClick={choose_hour}
              >
                {hour_text}
              </div>
            )}
            {day === selectedDay &&
              time === selectedTime &&
              selectedTutor === 0 && (
                <div
                  className={`w-24 text-xs p-1 z-30 text-gray-600 relative bg-purple-100 ${
                    slot == 1 ? "h-8" : "h-16"
                  }`}
                >
                  {"튜터 선택"}
                </div>
              )}
            {day === selectedDay &&
              time === selectedTime &&
              selectedTutor !== 0 && (
                <div
                  className={`w-24 text-xs p-1 z-30 text-gray-600 relative bg-purple-300 ${
                    slot == 1 ? "h-8" : "h-16"
                  }`}
                  onClick={() => setDeleteOpen(true)}
                >
                  {"선택 완료"}
                </div>
              )}
          </div>
          <div className="half-1 h-8 border-dashed border-t border-gray-300">
            {((time !== 4 && time !== 26 && slot == 2) || slot == 1) &&
              (day !== selectedDay || time + 1 !== selectedTime) && (
                <div
                  className={`w-24 text-xs p-1 text-white hover:text-black z-10 hover:z-20 relative hover:bg-purple-100 ${
                    slot == 1 ? "h-8" : "h-16"
                  }`}
                  onClick={choose_half}
                >
                  {half_text}
                </div>
              )}
            {day === selectedDay &&
              time + 1 === selectedTime &&
              selectedTutor === 0 && (
                <div
                  className={`w-24 text-xs p-1 z-30 text-gray-600 relative bg-purple-100 ${
                    slot == 1 ? "h-8" : "h-16"
                  }`}
                >
                  {"튜터 선택"}
                </div>
              )}
            {day === selectedDay &&
              time + 1 === selectedTime &&
              selectedTutor !== 0 && (
                <div
                  className={`w-24 text-xs p-1 z-30 text-gray-600 relative bg-purple-300 ${
                    slot == 1 ? "h-8" : "h-16"
                  }`}
                  onClick={() => setDeleteOpen(true)}
                >
                  {"선택 완료"}
                </div>
              )}
          </div>
        </div>
      )}
      {blocked && (
        <div>
          <div className="half-0 h-8 border-t border-gray-300 bg-gray-300" />
          <div className="half-1 h-8 border-dashed bg-gray-300" />
        </div>
      )}
    </div>
  );
};

export default SlotItem;
