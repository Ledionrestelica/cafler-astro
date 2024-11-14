import { useState } from "react";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      style={{ userSelect: "none" }}
      className="bg-white border cursor-pointer border-stroke rounded-[6px] px-4 py-[8px] overflow-hidden"
    >
      <div className="extrabold uppercase text-lg flex justify-between items-center">
        <p>What's included?</p>
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          className={`${isOpen ? "" : "rotate-180"}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.6001 4.80005L5.0001 1.20005L1.4001 4.80005"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {isOpen ? (
        <div className="pt-4 space-y-2">
          <div className="w-full flex items-center justify-between py-2">
            <div className="flex gap-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.875 16.75C15.9105 16.75 16.75 15.9105 16.75 14.875C16.75 13.8395 15.9105 13 14.875 13C13.8395 13 13 13.8395 13 14.875C13 15.9105 13.8395 16.75 14.875 16.75Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.125 16.75C6.16053 16.75 7 15.9105 7 14.875C7 13.8395 6.16053 13 5.125 13C4.08947 13 3.25 13.8395 3.25 14.875C3.25 15.9105 4.08947 16.75 5.125 16.75Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13 7H16L18.25 9.25V13H13V7Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13 3.25H1.75V13H13V3.25Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="semibold text-[16px]">Free Shipping</p>
            </div>
            <div className="extrabold bg-[#EBEBEB] text--[#424242] px-3 py-1 rounded-full">
              INCLUDED
            </div>
          </div>
          <div className="w-full flex items-center justify-between py-2">
            <div className="flex gap-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.5 2.5L3.25 5.5V16C3.25 16.3978 3.40804 16.7794 3.68934 17.0607C3.97064 17.342 4.35218 17.5 4.75 17.5H15.25C15.6478 17.5 16.0294 17.342 16.3107 17.0607C16.592 16.7794 16.75 16.3978 16.75 16V5.5L14.5 2.5H5.5Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13 8.5C13 9.29565 12.6839 10.0587 12.1213 10.6213C11.5587 11.1839 10.7956 11.5 10 11.5C9.20435 11.5 8.44129 11.1839 7.87868 10.6213C7.31607 10.0587 7 9.29565 7 8.5"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.25 5.5H16.75"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <p className="semibold text-[16px]">Free Shipping</p>
            </div>
            <div className="extrabold bg-[#EBEBEB] text--[#424242] px-3 py-1 rounded-full">
              INCLUDED
            </div>
          </div>
          <div className="w-full flex items-center justify-between py-2">
            <div className="flex gap-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.25 9.25H4.75C3.92157 9.25 3.25 9.92157 3.25 10.75V16C3.25 16.8284 3.92157 17.5 4.75 17.5H15.25C16.0784 17.5 16.75 16.8284 16.75 16V10.75C16.75 9.92157 16.0784 9.25 15.25 9.25Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.25 9.25V6.25C6.25 5.25544 6.64509 4.30161 7.34835 3.59835C8.05161 2.89509 9.00544 2.5 10 2.5C10.9946 2.5 11.9484 2.89509 12.6517 3.59835C13.3549 4.30161 13.75 5.25544 13.75 6.25V9.25"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <p className="semibold text-[16px]">Free Shipping</p>
            </div>
            <div className="extrabold bg-[#EBEBEB] text--[#424242] px-3 py-1 rounded-full">
              INCLUDED
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
