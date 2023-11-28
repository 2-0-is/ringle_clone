interface ISlotProps {
  setSlotOpen: (arg0: boolean) => void;
  timeSize: number;
  setTimeSize: (arg0: number) => void;
  reset: () => void;
}

const SlotModal = ({
  setSlotOpen,
  timeSize,
  setTimeSize,
  reset,
}: ISlotProps) => {
  const changeSlot_1 = () => {
    if (timeSize === 2) {
      setSlotOpen(false);
      setTimeSize(1);
      reset();
    }
  };
  const changeSlot_2 = () => {
    if (timeSize === 1) {
      setSlotOpen(false);
      setTimeSize(2);
      reset();
    }
  };
  return (
    <div
      className="absolute top-0 w-screen h-screen z-40 bg-gray-300 bg-opacity-40 flex"
      onClick={() => setSlotOpen(false)}
    >
      <div
        className="w-96 h-56 p-8 bg-white bg-opacity-100 m-auto flex flex-col justify-center border border-gray-400 rounded-md"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div
          className="cursor-pointer ml-auto mt-4 mr-4"
          onClick={() => setSlotOpen(false)}
        >
          X
        </div>
        <button
          className="w-88 h-16 m-4 p-4 border border-gray-400 rounded-md"
          onClick={changeSlot_1}
        >
          <div className="text-[14px] font-medium">
            <div className="mr-3 bg-blue-50 text-blue-500 text-[12px] inline-block rounded-md px-2 font-medium">
              20분
            </div>
            1회 패키지(20분)
          </div>
        </button>
        <button
          className="w-88 h-16 m-4 p-4 border border-gray-400 rounded-md"
          onClick={changeSlot_2}
        >
          <div className="text-[14px] font-medium">
            <div className="mr-3 bg-green-50 text-green-500 text-[12px] inline-block rounded-md px-2 font-medium">
              40분
            </div>
            1회 패키지(40분)
          </div>
        </button>
      </div>
    </div>
  );
};

export default SlotModal;
