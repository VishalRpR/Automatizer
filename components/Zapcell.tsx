import React from 'react'

export const Zapcell = ({name}:{name:string}) => {
  return (
    <div>
      <div className="border px-20 py-3 bg-orange-500 text-white font-bold rounded hover:bg-orange-600 mb-5">
        {name}
      </div>
    </div>
  );
}
