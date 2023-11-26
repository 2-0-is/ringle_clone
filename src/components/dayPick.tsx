"use client";
import { useState } from "react";
import "react-day-picker/dist/style.css";
import { DateRange, DayPicker } from "react-day-picker";

const DayPick = () => {
  const defaultSelected: DateRange = {
    from: new Date("2023.11.26"),
    to: new Date("2023.12.2"),
  };
  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);

  return (
    <div className="flex-col justify-center mr-4">
      <div className="h-[110px]" />
      <DayPicker
        mode="range"
        modifiersClassNames={{ selected: "bg-purple-300" }}
        selected={defaultSelected}
        onSelect={setRange}
        showOutsideDays
      />
      <div className="mt-[48px] pt-[16px] text-center">
        <div className="text-xs text-gray-300">신청 방식 변경</div>
        <button className="border border-gray-500 p-2 mx-auto mt-2 text-sm w-fit rounded-md">
          <div>튜터 먼저 선택</div>
        </button>
      </div>
    </div>
  );
};

export default DayPick;
