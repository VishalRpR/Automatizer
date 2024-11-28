import React from 'react'

export const Checkfeature = ({lable}:{lable:string}) => {
  return (
    <div>
      <div className="flex items-center gap-2 pb-3 text-xl font-normal text-slate-700">
        <Check />
        <div>
            {lable}
        </div>
      </div>
    </div>
  );
}


export function Check() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="green"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="white"
      className="size-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
}

