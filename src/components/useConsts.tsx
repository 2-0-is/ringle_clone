import { useState } from "react";

const useConsts = () => {
  const [timeSize, setTimeSize] = useState<number>(1);
  const [time_selected, setTimeSelected] = useState<boolean>(false);
  const [selected_tutor, setTutor] = useState<number>(-1);
  const toggleSelect = (id: number) => {
    if (selected_tutor === -1 && time_selected) {
      setTutor(id);
    } else if (selected_tutor === id) {
      setTutor(-1);
    }
  };
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

  return {
    timeSize,
    setTimeSize,
    tutor_list,
    time_selected,
    setTimeSelected,
    selected_tutor,
    setTutor,
    toggleSelect,
  };
};

export default useConsts;
