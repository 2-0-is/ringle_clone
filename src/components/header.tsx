"use client";
import AngleIcon from "@/../public/icons/left_angle.svg";
import NextIcon from "@/../public/next.svg";
import "tailwindcss/tailwind.css";
import SlotModal from "./slotModal";

interface IHeaderProps {
  slotOpen: boolean;
  setSlotOpen: (arg0: boolean) => void;
  timeSize: number;
  setTimeSize: (arg0: number) => void;
  reset: () => void;
}
const Header = ({
  slotOpen,
  setSlotOpen,
  timeSize,
  setTimeSize,
  reset,
}: IHeaderProps) => {
  return (
    <div>
      <div className={"header-wrapper inline-flex px-4 bg-gray-50 w-full"}>
        <div className="right-item flex items-center justify-center mr-auto">
          <div className="flex items-center justify-center cursor-pointer">
            <AngleIcon width={14} height={14} />
            <div className={"text-xs m-4 text-purple-600"}>{"나가기"}</div>
          </div>
          <NextIcon width={70} height={70} className={"mx-4"} />
          <div className="text-l font-bold mx-2">{"수업 예약"}</div>
          <div className="text-sm text-gray-600 mx-4">
            {"STEP 1.튜터 및 시간 선택"}
          </div>
          <div
            className="border rounded-[4px] border-gray-300"
            onClick={() => setSlotOpen(true)}
          >
            <div className="border-1 flex max-h-[40px] w-auto cursor-pointer items-center justify-between rounded-md border-gray-300 bg-white px-[16px] py-[8px]">
              {timeSize === 1 && (
                <div className="text-[14px] font-medium">
                  <div className="mr-3 bg-blue-50 text-blue-500 text-[12px] inline-block rounded-md px-2 font-medium">
                    20분
                  </div>
                  1회 패키지(20분)
                  <span className="ml-2 text-gray-700 mr-4">(1회 남음)</span>
                </div>
              )}
              {timeSize === 2 && (
                <div className="text-[14px] font-medium">
                  <div className="mr-3 bg-green-50 text-green-500 text-[12px] inline-block rounded-md px-2 font-medium">
                    40분
                  </div>
                  1회 패키지(40분)
                  <span className="ml-2 text-gray-700 mr-4">(1회 남음)</span>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="left-item flex items-center justify-center ml-auto text-xs font-bold text-gray-500">
          <div>{"예약 신청한 수업 "}</div>
          <div className="text-purple-500 mx-4">{0}</div>
          <button className="w-40 h-10 mx-4 bg-gray-300 rounded-md">
            {"다음"}
          </button>
        </div>
      </div>
      {slotOpen && (
        <SlotModal
          setSlotOpen={setSlotOpen}
          timeSize={timeSize}
          setTimeSize={setTimeSize}
          reset={reset}
        />
      )}
    </div>
  );
};

export default Header;
