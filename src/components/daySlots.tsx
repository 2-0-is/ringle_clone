"use clients";
interface ISlotProps {
  slot: number;
}

const DaySlots = ({ slot }: ISlotProps) => {
  return (
    <div className="day w-24 border-r border-gray-300">
      <div className="hour flex flex-col">
        <div className="half-0 h-8 border-t border-gray-300">
          <div
            className={`w-24 text-xs p-1 text-white hover:text-black z-10 relative hover:bg-purple-300 ${
              slot == 1 ? "h-8" : "h-16"
            }`}
          >
            {"자정 0시"}
          </div>
        </div>
        <div className="half-1 h-8 border-dashed border-t border-gray-300">
          <div
            className={`w-24 text-xs p-1 text-white hover:text-black z-10 relative hover:bg-purple-300 ${
              slot == 1 ? "h-8" : "h-16"
            }`}
          >
            {"새벽 0시 30분"}
          </div>
        </div>
      </div>
      <div className="hour flex flex-col">
        <div className="half-0 h-8 border-t border-gray-300">
          <div
            className={`w-24 text-xs p-1 text-white hover:text-black z-10 relative hover:bg-purple-300 ${
              slot == 1 ? "h-8" : "h-16"
            }`}
          >
            {"새벽 1시"}
          </div>
        </div>
        <div className="half-1 h-8 border-dashed border-t border-gray-300">
          <div
            className={`w-24 text-xs p-1 text-white hover:text-black z-10 relative hover:bg-purple-300 ${
              slot == 1 ? "h-8" : "h-16"
            }`}
          >
            {"새벽 1시 30분"}
          </div>
        </div>
      </div>
      <div className="hour flex flex-col">
        <div className="half-0 h-8 border-t border-gray-300">
          <div
            className={`w-24 text-xs p-1 text-white hover:text-black z-10 relative hover:bg-purple-300 ${
              slot == 1 ? "h-8" : "h-16"
            }`}
          >
            {"새벽 2시"}
          </div>
        </div>
        <div className="half-1 h-8 border-dashed border-t border-gray-300">
          <div
            className={`w-24 text-xs p-1 h-8 text-white z-10 relative ${
              slot == 1 ? "hover:text-black hover:bg-purple-300" : ""
            }`}
          >
            {"새벽 2시 30분"}
          </div>
        </div>
      </div>
      <div className="hour-blocked">
        <div className="half-0 h-8 border-t border-gray-300 bg-gray-300"></div>
        <div className="half-1 h-8 border-dashed bg-gray-300"></div>
      </div>
      <div className="hour flex flex-col">
        <div className="half-0 h-8 border-t border-gray-300">
          <div
            className={`w-24 text-xs p-1 text-white hover:text-black z-10 relative hover:bg-purple-300 ${
              slot == 1 ? "h-8" : "h-16"
            }`}
          >
            {"오전 5시"}
          </div>
        </div>
        <div className="half-1 h-8 border-dashed border-t border-gray-300">
          <div
            className={`w-24 text-xs p-1 text-white hover:text-black z-10 relative hover:bg-purple-300 ${
              slot == 1 ? "h-8" : "h-16"
            }`}
          >
            {"오전 5시 30분"}
          </div>
        </div>
      </div>
      <div className="hour flex flex-col">
        <div className="half-0 h-8 border-t border-gray-300">
          <div
            className={`w-24 text-xs p-1 text-white hover:text-black z-10 relative hover:bg-purple-300 ${
              slot == 1 ? "h-8" : "h-16"
            }`}
          >
            {"오전 6시"}
          </div>
        </div>
        <div className="half-1 h-8 border-dashed border-t border-gray-300">
          <div
            className={`w-24 text-xs p-1 text-white hover:text-black z-10 relative hover:bg-purple-300 ${
              slot == 1 ? "h-8" : "h-16"
            }`}
          >
            {"오전 6시 30분"}
          </div>
        </div>
      </div>
      <div className="hour flex flex-col">
        <div className="half-0 h-8 border-t border-gray-300">
          <div
            className={`w-24 text-xs p-1 text-white hover:text-black z-10 relative hover:bg-purple-300 ${
              slot == 1 ? "h-8" : "h-16"
            }`}
          >
            {"오전 7시"}
          </div>
        </div>
        <div className="half-1 h-8 border-dashed border-t border-gray-300">
          <div
            className={`w-24 text-xs p-1 text-white hover:text-black z-10 relative hover:bg-purple-300 ${
              slot == 1 ? "h-8" : "h-16"
            }`}
          >
            {"오전 7시 30분"}
          </div>
        </div>
      </div>
      <div className="hour flex flex-col">
        <div className="half-0 h-8 border-t border-gray-300">
          <div
            className={`w-24 text-xs p-1 text-white hover:text-black z-10 relative hover:bg-purple-300 ${
              slot == 1 ? "h-8" : "h-16"
            }`}
          >
            {"오전 8시"}
          </div>
        </div>
        <div className="half-1 h-8 border-dashed border-t border-gray-300">
          <div
            className={`w-24 text-xs p-1 text-white hover:text-black z-10 relative hover:bg-purple-300 ${
              slot == 1 ? "h-8" : "h-16"
            }`}
          >
            {"오전 8시 30분"}
          </div>
        </div>
      </div>
      <div className="hour flex flex-col">
        <div className="half-0 h-8 border-t border-gray-300">
          <div
            className={`w-24 text-xs p-1 text-white hover:text-black z-10 relative hover:bg-purple-300 ${
              slot == 1 ? "h-8" : "h-16"
            }`}
          >
            {"오전 9시"}
          </div>
        </div>
        <div className="half-1 h-8 border-dashed border-t border-gray-300">
          <div
            className={`w-24 text-xs p-1 text-white hover:text-black z-10 relative hover:bg-purple-300 ${
              slot == 1 ? "h-8" : "h-16"
            }`}
          >
            {"오전 9시 30분"}
          </div>
        </div>
      </div>
      <div className="hour flex flex-col">
        <div className="half-0 h-8 border-t border-gray-300">
          <div
            className={`w-24 text-xs p-1 text-white hover:text-black z-10 relative hover:bg-purple-300 ${
              slot == 1 ? "h-8" : "h-16"
            }`}
          >
            {"오전 10시"}
          </div>
        </div>
        <div className="half-1 h-8 border-dashed border-t border-gray-300">
          <div
            className={`w-24 text-xs p-1 text-white hover:text-black z-10 relative hover:bg-purple-300 ${
              slot == 1 ? "h-8" : "h-16"
            }`}
          >
            {"오전 10시 30분"}
          </div>
        </div>
      </div>
      <div className="hour flex flex-col">
        <div className="half-0 h-8 border-t border-gray-300">
          <div
            className={`w-24 text-xs p-1 text-white hover:text-black z-10 relative hover:bg-purple-300 ${
              slot == 1 ? "h-8" : "h-16"
            }`}
          >
            {"오전 11시"}
          </div>
        </div>
        <div className="half-1 h-8 border-dashed border-t border-gray-300">
          <div
            className={`w-24 text-xs p-1 text-white hover:text-black z-10 relative hover:bg-purple-300 ${
              slot == 1 ? "h-8" : "h-16"
            }`}
          >
            {"오전 11시 30분"}
          </div>
        </div>
      </div>
      <div className="hour flex flex-col">
        <div className="half-0 h-8 border-t border-gray-300">
          <div
            className={`w-24 text-xs p-1 text-white hover:text-black z-10 relative hover:bg-purple-300 ${
              slot == 1 ? "h-8" : "h-16"
            }`}
          >
            {"정오 12시"}
          </div>
        </div>
        <div className="half-1 h-8 border-dashed border-t border-gray-300">
          <div
            className={`w-24 text-xs p-1 text-white hover:text-black z-10 relative hover:bg-purple-300 ${
              slot == 1 ? "h-8" : "h-16"
            }`}
          >
            {"오후 12시 30분"}
          </div>
        </div>
      </div>
      <div className="hour flex flex-col">
        <div className="half-0 h-8 border-t border-gray-300">
          <div
            className={`w-24 text-xs p-1 text-white hover:text-black z-10 relative hover:bg-purple-300 ${
              slot == 1 ? "h-8" : "h-16"
            }`}
          >
            {"오후 13시"}
          </div>
        </div>
        <div className="half-1 h-8 border-dashed border-t border-gray-300">
          <div
            className={`w-24 text-xs p-1 text-white hover:text-black z-10 relative hover:bg-purple-300 ${
              slot == 1 ? "h-8" : "h-16"
            }`}
          >
            {"오후 13시 30분"}
          </div>
        </div>
      </div>
      <div className="hour-blocked">
        <div className="half-0 h-8 border-t border-gray-300 bg-gray-300"></div>
        <div className="half-1 h-8 border-dashed bg-gray-300"></div>
      </div>
      <div className="hour flex flex-col">
        <div className="half-0 h-8 border-t border-gray-300">
          <div
            className={`w-24 text-xs p-1 text-white hover:text-black z-10 relative hover:bg-purple-300 ${
              slot == 1 ? "h-8" : "h-16"
            }`}
          >
            {"저녁 19시"}
          </div>
        </div>
        <div className="half-1 h-8 border-dashed border-t border-gray-300">
          <div
            className={`w-24 text-xs p-1 text-white hover:text-black z-10 relative hover:bg-purple-300 ${
              slot == 1 ? "h-8" : "h-16"
            }`}
          >
            {"저녁 19시 30분"}
          </div>
        </div>
      </div>
      <div className="hour flex flex-col">
        <div className="half-0 h-8 border-t border-gray-300">
          <div
            className={`w-24 text-xs p-1 text-white hover:text-black z-10 relative hover:bg-purple-300 ${
              slot == 1 ? "h-8" : "h-16"
            }`}
          >
            {"저녁 20시"}
          </div>
        </div>
        <div className="half-1 h-8 border-dashed border-t border-gray-300">
          <div
            className={`w-24 text-xs p-1 text-white hover:text-black z-10 relative hover:bg-purple-300 ${
              slot == 1 ? "h-8" : "h-16"
            }`}
          >
            {"저녁 20시 30분"}
          </div>
        </div>
      </div>
      <div className="hour flex flex-col">
        <div className="half-0 h-8 border-t border-gray-300">
          <div
            className={`w-24 text-xs p-1 text-white hover:text-black z-10 relative hover:bg-purple-300 ${
              slot == 1 ? "h-8" : "h-16"
            }`}
          >
            {"저녁 21시"}
          </div>
        </div>
        <div className="half-1 h-8 border-dashed border-t border-gray-300">
          <div
            className={`w-24 text-xs p-1 text-white hover:text-black z-10 relative hover:bg-purple-300 ${
              slot == 1 ? "h-8" : "h-16"
            }`}
          >
            {"저녁 21시 30분"}
          </div>
        </div>
      </div>
      <div className="hour flex flex-col">
        <div className="half-0 h-8 border-t border-gray-300">
          <div
            className={`w-24 text-xs p-1 text-white hover:text-black z-10 relative hover:bg-purple-300 ${
              slot == 1 ? "h-8" : "h-16"
            }`}
          >
            {"저녁 22시"}
          </div>
        </div>
        <div className="half-1 h-8 border-dashed border-t border-gray-300">
          <div
            className={`w-24 text-xs p-1 text-white hover:text-black z-10 relative hover:bg-purple-300 ${
              slot == 1 ? "h-8" : "h-16"
            }`}
          >
            {"저녁 22시 30분"}
          </div>
        </div>
      </div>
      <div className="hour flex flex-col">
        <div className="half-0 h-8 border-t border-gray-300">
          <div
            className={`w-24 text-xs p-1 text-white hover:text-black z-10 relative hover:bg-purple-300 ${
              slot == 1 ? "h-8" : "h-16"
            }`}
          >
            {"저녁 23시"}
          </div>
        </div>
        <div className="half-1 h-8 border-dashed border-t border-gray-300">
          <div
            className={`w-24 text-xs p-1 text-white hover:text-black z-10 relative hover:bg-purple-300 ${
              slot == 1 ? "h-8" : "h-16"
            }`}
          >
            {"저녁 23시 30분"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DaySlots;
