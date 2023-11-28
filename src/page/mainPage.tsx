"use client";
import Header from "../components/header";
import DayPick from "@/components/dayPick";
import DeleteModal from "@/components/deleteModal";
import TimePick from "@/components/timePick";
import Tutors from "@/components/tutors";
import useConsts from "@/components/useConsts";

const MainPage = () => {
  const {
    timeSize,
    setTimeSize,
    selectSlot,
    selectedDay,
    selectedTime,
    is_time_selected,
    selectedTutor,
    toggleSelect,
    deleteOpen,
    setDeleteOpen,
    slotOpen,
    setSlotOpen,
    reset,
  } = useConsts();
  return (
    <div className="w-full">
      <Header
        slotOpen={slotOpen}
        setSlotOpen={setSlotOpen}
        timeSize={timeSize}
        setTimeSize={setTimeSize}
        reset={reset}
      />
      <div className="flex flex-row items-center relative h-full w-full">
        <DayPick />
        <TimePick
          timeSize={timeSize}
          selectSlot={selectSlot}
          selectedDay={selectedDay}
          selectedTime={selectedTime}
          selectedTutor={selectedTutor}
          setDeleteOpen={setDeleteOpen}
        />
        <Tutors
          time_selected={is_time_selected}
          selected_tutor={selectedTutor}
          toggleSelect={toggleSelect}
        />
        {deleteOpen && (
          <DeleteModal
            selectedDay={selectedDay}
            selectedTime={selectedTime}
            selectedTutor={selectedTutor}
            setDeleteOpen={setDeleteOpen}
            reset={reset}
          />
        )}
      </div>
    </div>
  );
};

export default MainPage;
