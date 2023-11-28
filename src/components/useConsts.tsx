import { useState } from "react";

const useConsts = () => {
  // timeSize: class length (20min = 1, 40min = 2)
  const [timeSize, setTimeSize] = useState<number>(1);

  // is_time_selected: if selected time exists
  const [is_time_selected, setTimeSelected] = useState<boolean>(false);

  // selectedTutor: id of selected tutor
  const [selectedTutor, setTutor] = useState<number>(0);
  // toggleSelect: change selected tutor
  const toggleSelect = (id: number) => {
    if (is_time_selected) {
      if (selectedTutor !== id) setTutor(id);
      else setTutor(0);
    }
  };

  // selectedDay: Sun = 1 ~ Sat = 7
  const [selectedDay, setDay] = useState<number>(0);
  // selectedTime: 00:00 = 0 ~ 23:30 = 47 (1 = 30min)
  const [selectedTime, setTime] = useState<number>(48);
  const selectSlot = (day: number, time: number) => {
    setTimeSelected(true);
    setDay(day);
    setTime(time);
  };

  // dummy tutor list
  const tutor_list = [
    {
      id: 1,
      name: "Steve",
      major: "Economics",
    },
    {
      id: 2,
      name: "Jeremy",
      major: "Computer Science",
    },
    {
      id: 3,
      name: "Sungmin",
      major: "Physical Education",
    },
  ];

  // time list
  const time_list = [
    {
      time: 0,
      hour_text: "자정 0시",
      half_text: "새벽 0시 30분",
      blocked: false,
    },
    {
      time: 2,
      hour_text: "새벽 1시",
      half_text: "새벽 1시 30분",
      blocked: false,
    },
    {
      time: 4,
      hour_text: "새벽 2시",
      half_text: "새벽 2시 30분",
      blocked: false,
    },
    {
      time: 6,
      hour_text: "새벽 3시",
      half_text: "새벽 3시 30분",
      blocked: true,
    },
    {
      time: 10,
      hour_text: "오전 5시",
      half_text: "오전 5시 30분",
      blocked: false,
    },
    {
      time: 12,
      hour_text: "오전 6시",
      half_text: "오전 6시 30분",
      blocked: false,
    },
    {
      time: 14,
      hour_text: "오전 7시",
      half_text: "오전 7시 30분",
      blocked: false,
    },
    {
      time: 16,
      hour_text: "오전 8시",
      half_text: "오전 8시 30분",
      blocked: false,
    },
    {
      time: 18,
      hour_text: "오전 9시",
      half_text: "오전 9시 30분",
      blocked: false,
    },
    {
      time: 20,
      hour_text: "오전 10시",
      half_text: "오전 10시 30분",
      blocked: false,
    },
    {
      time: 22,
      hour_text: "오전 11시",
      half_text: "오전 11시 30분",
      blocked: false,
    },
    {
      time: 24,
      hour_text: "정오 12시",
      half_text: "오후 12시 30분",
      blocked: false,
    },
    {
      time: 26,
      hour_text: "오후 13시",
      half_text: "오후 13시 30분",
      blocked: false,
    },
    {
      time: 28,
      hour_text: "오후 14시",
      half_text: "오후 14시 30분",
      blocked: true,
    },
    {
      time: 38,
      hour_text: "저녁 19시",
      half_text: "저녁 19시 30분",
      blocked: false,
    },
    {
      time: 40,
      hour_text: "저녁 20시",
      half_text: "저녁 20시 30분",
      blocked: false,
    },
    {
      time: 42,
      hour_text: "저녁 21시",
      half_text: "저녁 21시 30분",
      blocked: false,
    },
    {
      time: 44,
      hour_text: "저녁 22시",
      half_text: "저녁 22시 30분",
      blocked: false,
    },
    {
      time: 46,
      hour_text: "저녁 23시",
      half_text: "저녁 23시 30분",
      blocked: false,
    },
  ];

  // modal open flag
  const [deleteOpen, setDeleteOpen] = useState<boolean>(false);
  const [slotOpen, setSlotOpen] = useState<boolean>(false);

  // reset all values (for delete class / change class length)
  const reset = () => {
    setDay(0);
    setTime(48);
    setDeleteOpen(false);
    setTimeSelected(false);
    setTutor(0);
  };
  return {
    timeSize,
    setTimeSize,
    tutor_list,
    is_time_selected,
    setTimeSelected,
    selectedTutor,
    setTutor,
    toggleSelect,
    time_list,
    selectSlot,
    selectedDay,
    selectedTime,
    deleteOpen,
    setDeleteOpen,
    slotOpen,
    setSlotOpen,
    reset,
  };
};

export default useConsts;
