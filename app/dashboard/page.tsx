"use client";
import { Appbar } from "@/components/Appbar";
import { Secondarybutton } from "@/components/buttons/Secondarybutton";
import { useState } from "react";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  return (
    <div>
      <Appbar />
      <div className="flex justify-center pt-5">
        <div className="max-w-screen-lg w-full  border-b-2 pb-5">
          <div className="flex justify-between ">
            <div className="text-2xl font-bold">My Zaps</div>
            <div>
              <Secondarybutton lable="Create" type="small" onClick={() => {}} />
            </div>
          </div>
        </div>
      </div>

      {loading ? (
        "loading....."
      ) : (
        <div>
          <ZapTable />
        </div>
      )}
    </div>
  );
}

function ZapTable() {
  return <div>table</div>;
}
