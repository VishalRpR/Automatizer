"use client"
import { useRouter } from "next/navigation";
import { Boxbutton } from "./buttons/Boxbutton"
import { Primarybutton } from "./buttons/Primarybutton"


export const Appbar = () => {
    const router=useRouter();
  return (
    <div className="border-b flex justify-between px-8 py-2">
      <div className="font-black text-3xl">Zapier</div>
      <div className="flex gap-2">
        <Boxbutton lable={"Contact sales"} />
        <Boxbutton lable={"Log in"} />
        <Primarybutton lable={"Sign up"} type={"small"} onClick={()=>router.push("/signup")}/>
      </div>
    </div>
  );
}