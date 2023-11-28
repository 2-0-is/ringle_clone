"use clients";
import SlotItem from "./slotItem";
import useConsts from "./useConsts";
interface ISlotProps {
  slot: number;
  day: number;
  selectedDay: number;
  selectedTime: number;
  selectSlot: (day: number, time: number) => void;
  selectedTutor: number;
  setDeleteOpen: (arg0: boolean) => void;
}

const DaySlots = ({
  slot,
  day,
  selectedDay,
  selectedTime,
  selectSlot,
  selectedTutor,
  setDeleteOpen,
}: ISlotProps) => {
  const { time_list } = useConsts();
  return (
    <div className="day w-24 border-r border-gray-300">
      {time_list.map((elem) => {
        return (
          <SlotItem
            day={day}
            time={elem.time}
            slot={slot}
            hour_text={elem.hour_text}
            half_text={elem.half_text}
            blocked={elem.blocked}
            selectedDay={selectedDay}
            selectedTime={selectedTime}
            selectSlot={selectSlot}
            selectedTutor={selectedTutor}
            setDeleteOpen={setDeleteOpen}
          />
        );
      })}
    </div>
  );
};

export default DaySlots;
