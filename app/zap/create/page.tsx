"use client";
import { Appbar } from "@/components/Appbar";
import { Secondarybutton } from "@/components/buttons/Secondarybutton";
import { Zapcell } from "@/components/Zapcell";
import { useState } from "react";

export default function CreateZap() {
  const [selectedTrigger, setSelectedTrigger] = useState("");
  const [selecteAction, setSelectedAction] = useState<
    {
      availableActionId: string;
      availableActionName: string;
    }[]
  >([
    { availableActionId: "", availableActionName: "" },
    { availableActionId: "", availableActionName: "" },
   
  ]);
  return (
    <div>
      <Appbar user={"Vishal"} />
      <div className="flex justify-end px-10 py-5">
        <Secondarybutton lable="publish" type="small" onClick={()=>{}} />
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col h-screen justify-center">
          <Zapcell name={selectedTrigger ? selectedTrigger : 1 + " Trigger"} />
          {selecteAction.map((action, index) => (
            <Zapcell name={2 + index + " Action"} />
          ))}
          <div
            className="flex justify-center border bg-white hover:bg-gray-300  text-3xl font-bold"
            onClick={() => {
              setSelectedAction((a) => [
                ...a,
                {
                  availableActionId: "",
                  availableActionName: "",
                },
              ]);
            }}
          >
            +
          </div>
        </div>
      </div>
    </div>
  );
}
