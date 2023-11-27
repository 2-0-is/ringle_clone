"use client";
import TriangleIcon from "@/../public/icons/down_triangle.svg";
import TutorItem from "./tutorItem";
import useConsts from "./useConsts";

const Tutors = () => {
  const { tutor_list, time_selected, selected_tutor, toggleSelect } =
    useConsts();

  return (
    <div className="w-full h-[600px] border-l border-gray-300">
      <div className="head py-4 mx-4">
        <div className="pb-4">{"튜터 직접 선택"}</div>
        <div className="buttons flex flex-row">
          <button className="w-1/3 m-1 p-2 flex border border-gray-300 rounded-md">
            <div className="mr-auto">{"성별"}</div>
            <TriangleIcon className="m-1" />
          </button>
          <button className="w-1/3 m-1 p-2 flex justify-start border border-gray-300 rounded-md">
            <div className="mr-auto">{"억양"}</div>
            <TriangleIcon className="m-1" />
          </button>
          <button className="w-1/3 m-1 p-2 flex justify-start border border-gray-300 rounded-md">
            <div className="mr-auto">{"전공"}</div>
            <TriangleIcon className="m-1" />
          </button>
        </div>
      </div>
      {time_selected && (
        <div className="empty-slot flex justify-center items-center">
          <div className="box-wrapper border border-gray-300 flex flex-col justify-center my-32 p-8">
            <div className="text-gray-600 m-auto py-2">
              {"캘린더에서 원하시는 시간을 눌러"}
            </div>
            <div className="text-gray-600 m-auto py-2">
              {"수업을 신청해 주세요"}
            </div>
          </div>
        </div>
      )}
      <div className="tutor-list overflow-auto">
        {tutor_list.map((elem) => {
          return (
            <TutorItem
              key={elem.id}
              id={elem.id}
              name={elem.name}
              major={elem.major}
              selected_tutor={selected_tutor}
              toggleSelect={toggleSelect}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Tutors;
