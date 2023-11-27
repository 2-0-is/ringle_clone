import { useState } from "react";
import useConsts from "./useConsts";

interface ITutorInfo {
  id: number;
  name: string;
  major: string;
  selected_tutor: number;
  toggleSelect: (id: number) => void;
}

const TutorItem = ({
  id,
  name,
  major,
  selected_tutor,
  toggleSelect,
}: ITutorInfo) => {
  return (
    <div
      className="border border-gray-300 flex cursor-pointer"
      onClick={() => {
        toggleSelect(id);
      }}
    >
      <div className="right flex flex-row justify-start mr-auto">
        <img
          src="https://d38emex6h5e12i.cloudfront.net/web/202210/ic-auto-matching.png"
          className="w-[72px] p-2 m-2"
        ></img>
        <div className="info m-4">
          <div className="font-semibold">{name}</div>
          <div className="text-gray-600">{major}</div>
        </div>
      </div>
      <div className="check flex items-center">
        {selected_tutor !== id && (
          <img
            src="https://d38emex6h5e12i.cloudfront.net/new-theme/new-icons/adult/icon/check-circle/incomplete.svg"
            className="m-4"
          ></img>
        )}
        {selected_tutor === id && (
          <img
            alt="icon_check_circle_complete_primary"
            src="https://d38emex6h5e12i.cloudfront.net/new-theme/new-icons/adult/icon/check-circle/complete/primary.svg"
            className="m-4 h-[24px] w-[24px]"
          ></img>
        )}
      </div>
    </div>
  );
};

export default TutorItem;
