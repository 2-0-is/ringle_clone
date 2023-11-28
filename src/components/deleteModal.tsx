import useConsts from "./useConsts";

interface IDeleteProps {
  selectedDay: number;
  selectedTime: number;
  selectedTutor: number;
  setDeleteOpen: (arg0: boolean) => void;
  reset: () => void;
}

const DeleteModal = ({
  selectedDay,
  selectedTime,
  selectedTutor,
  setDeleteOpen,
  reset,
}: IDeleteProps) => {
  const { tutor_list, time_list } = useConsts();
  const day_text: string =
    selectedDay === 1
      ? "11월 26일 (일) "
      : selectedDay === 2
      ? "11월 27일 (월) "
      : selectedDay === 3
      ? "11월 28일 (화) "
      : selectedDay === 4
      ? "11월 29일 (수) "
      : selectedDay === 5
      ? "11월 30일 (목) "
      : selectedDay === 6
      ? "12월 1일 (금) "
      : "12월 2일 (토) ";
  return (
    <div
      className="absolute top-0 w-screen h-screen z-40 bg-gray-300 bg-opacity-40 flex"
      onClick={() => setDeleteOpen(false)}
    >
      <div
        className="w-96 h-56 p-4 bg-white bg-opacity-100 m-auto flex flex-col justify-center border border-gray-400 rounded-md"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div
          className="cursor-pointer ml-auto mt-4 mr-4"
          onClick={() => setDeleteOpen(false)}
        >
          X
        </div>
        <div className="mx-4 my-2">
          <span>
            {"2023년 "}
            {day_text}
          </span>
          <span>{`${
            selectedTime % 2 == 1
              ? time_list.at(Math.floor(selectedTime / 2))?.half_text
              : time_list.at(Math.floor(selectedTime / 2))?.hour_text
          } `}</span>
        </div>
        <div className="mx-4 my-1">
          {tutor_list.at(selectedTutor - 1)?.name}
        </div>
        <div className="mx-4 my-1">{"수업을 삭제하시겠습니까?"}</div>
        <div className="ml-auto my-4 mr-4">
          <button
            className="mx-2 px-4 py-1 border border-purple-400 rounded-md"
            onClick={() => setDeleteOpen(false)}
          >
            {"취소"}
          </button>
          <button
            className="mx-2 px-4 py-1 bg-purple-400 rounded-md text-white"
            onClick={reset}
          >
            {"확인"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
