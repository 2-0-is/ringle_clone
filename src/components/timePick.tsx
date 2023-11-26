"use client";
import DaySlots from "./daySlots";

const TimePick = () => {
  return (
    <div className="max-h-full mr-auto">
      <div className="head inline-flex justify-start my-4">
        <button className="h-fit text-sm text-purple-500 px-2 mx-2 border border-purple-500 rounded-lg">
          {"오늘"}
        </button>
        <button className="h-fit text-sm text-purple-500 px-2 mx-1 border border-purple-500 rounded-lg">
          {"<"}
        </button>
        <button className="h-fit text-sm text-purple-500 px-2 mx-1 border border-purple-500 rounded-lg">
          {">"}
        </button>
        <span className="border-x display-8 mx-[19px] w-0 align-middle text-[12px]" />
        <span className="text-sm font-normal align-middle mx-1">
          {"Asia/Seoul"}
        </span>
        <span className="text-xs translate-y-1 text-gray-500 mx-1">
          {"타임존 변경"}
        </span>
      </div>
      <div className="week-calendar">
        <div className="top-bar flex flex-row items-center justify-center">
          <div className="empty-space w-16" />
          <div className="day-top w-8 flex flex-col items-center justify-center mx-8 text-red-500">
            <div className="text-sm">{"일"}</div>
            <div className="text-2xl font-semibold">{"26"}</div>
          </div>
          <div className="day-top w-8 flex flex-col items-center justify-center mx-8">
            <div className="text-sm">{"월"}</div>
            <div className="text-2xl font-semibold">{"27"}</div>
          </div>
          <div className="day-top w-8 flex flex-col items-center justify-center mx-8">
            <div className="text-sm">{"화"}</div>
            <div className="text-2xl font-semibold">{"28"}</div>
          </div>
          <div className="day-top w-8 flex flex-col items-center justify-center mx-8">
            <div className="text-sm">{"수"}</div>
            <div className="text-2xl font-semibold">{"29"}</div>
          </div>
          <div className="day-top w-8 flex flex-col items-center justify-center mx-8">
            <div className="text-sm">{"목"}</div>
            <div className="text-2xl font-semibold">{"30"}</div>
          </div>
          <div className="day-top w-8 flex flex-col items-center justify-center mx-8">
            <div className="text-sm">{"금"}</div>
            <div className="text-2xl font-semibold">{"1"}</div>
          </div>
          <div className="day-top w-8 flex flex-col items-center justify-center ml-8 mr-16 text-red-500">
            <div className="text-sm">{"토"}</div>
            <div className="text-2xl font-semibold">{"2"}</div>
          </div>
        </div>
        <div className="scroll-calendar flex flex-row h-[500px] overflow-y-scroll">
          <div className="left-bar w-16">
            <div className="hour-slot border-r border-gray-300">
              <div className="text-xs font-light">{"자정 0시"}</div>
              <div className="h-12" />
            </div>
            <div className="hour-slot border-r border-gray-300">
              <div className="text-xs font-light">{"새벽 1시"}</div>
              <div className="h-12" />
            </div>
            <div className="hour-slot border-r border-gray-300">
              <div className="text-xs font-light">{"새벽 2시"}</div>
              <div className="h-12" />
            </div>
            <div className="hour-slot border-r border-gray-300">
              <div className="text-xs font-light">{"새벽 3시"}</div>
              <div className="h-12" />
            </div>
            <div className="hour-slot border-r border-gray-300">
              <div className="text-xs font-light">{"오전 5시"}</div>
              <div className="h-12" />
            </div>
            <div className="hour-slot border-r border-gray-300">
              <div className="text-xs font-light">{"오전 6시"}</div>
              <div className="h-12" />
            </div>
            <div className="hour-slot border-r border-gray-300">
              <div className="text-xs font-light">{"오전 7시"}</div>
              <div className="h-12" />
            </div>
            <div className="hour-slot border-r border-gray-300">
              <div className="text-xs font-light">{"오전 8시"}</div>
              <div className="h-12" />
            </div>
            <div className="hour-slot border-r border-gray-300">
              <div className="text-xs font-light">{"오전 9시"}</div>
              <div className="h-12" />
            </div>
            <div className="hour-slot border-r border-gray-300">
              <div className="text-xs font-light">{"오전 10시"}</div>
              <div className="h-12" />
            </div>
            <div className="hour-slot border-r border-gray-300">
              <div className="text-xs font-light">{"오전 11시"}</div>
              <div className="h-12" />
            </div>
            <div className="hour-slot border-r border-gray-300">
              <div className="text-xs font-light">{"정오 12시"}</div>
              <div className="h-12" />
            </div>
            <div className="hour-slot border-r border-gray-300">
              <div className="text-xs font-light">{"오후 13시"}</div>
              <div className="h-12" />
            </div>
            <div className="hour-slot border-r border-gray-300">
              <div className="text-xs font-light">{"오후 14시"}</div>
              <div className="h-12" />
            </div>
            <div className="hour-slot border-r border-gray-300">
              <div className="text-xs font-light">{"저녁 19시"}</div>
              <div className="h-12" />
            </div>
            <div className="hour-slot border-r border-gray-300">
              <div className="text-xs font-light">{"저녁 20시"}</div>
              <div className="h-12" />
            </div>
            <div className="hour-slot border-r border-gray-300">
              <div className="text-xs font-light">{"저녁 21시"}</div>
              <div className="h-12" />
            </div>
            <div className="hour-slot border-r border-gray-300">
              <div className="text-xs font-light">{"저녁 22시"}</div>
              <div className="h-12" />
            </div>
            <div className="hour-slot border-r border-gray-300">
              <div className="text-xs font-light">{"저녁 23시"}</div>
              <div className="h-12" />
            </div>
          </div>
          <div className="time-box-wrapper">
            <div className="week-hour flex flex-row">
              <DaySlots slot={1} />
              <DaySlots slot={1} />
              <DaySlots slot={1} />
              <DaySlots slot={1} />
              <DaySlots slot={1} />
              <DaySlots slot={1} />
              <DaySlots slot={1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimePick;
