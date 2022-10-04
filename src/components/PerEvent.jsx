import { ChevronSVG } from "./svgs/ChevronSVG";

const PerEvent = ({ image, date, subData, height }) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center mr-3 space-y-5">
          <img src={image} height={height} width={20} className="mt-3" />
          <div className="ml-4">
            <h3>{date}</h3>
            <p className="text-gray-500 text-sm">{subData}</p>
          </div>
        </div>
        <ChevronSVG />
      </div>
    </>
  );
};

export default PerEvent;
