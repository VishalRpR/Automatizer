"use client";
import { Appbar } from "@/components/Appbar";
import { Primarybutton } from "@/components/buttons/Primarybutton";
import { Checkfeature } from "@/components/Checkfeature";
import { Inputbox } from "@/components/Inputbox";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { BACKEND_URL } from "@/config";



export default function Signup() {
  const router = useRouter();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function sendRequest() {
    const res = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, {
      name: name,
      email: email,
      password: password,
    });
    console.log(res);
    if ((res.status = 200)) {
      router.push("/signin");
    }
  }

  return (
    <div>
      <Appbar />
      <div className="grid md:grid-cols-2 lg:px-40 py-20">
        <div className="col-span-1 hidden md:block">
          <div className="text-4xl font-semibold max-w-md pb-10">
            Join millions worldwide who automate their work using Zapier.
          </div>

          <Checkfeature lable="Easy setup, no coding required" />
          <Checkfeature lable="Free forever for core features" />
          <Checkfeature lable="14-day trial of premium features & apps" />
        </div>

        <div className="col-span-1 px-10 ">
          <div className="px-6 py-6 border  rounded-lg border-2 flex-col items-center justify-items-center">
            <Inputbox
              lable={"* Work email"}
              placeholder={"Email"}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <div className="flex gap-4">
              <Inputbox
                lable={"* Name"}
                placeholder={"Name"}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <Inputbox
                lable={"* Password"}
                placeholder={"Password"}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            <div className="pb-3 text-md">
              By signing up, you agree to Zapier's{" "}
              <Link href={"random"} className="text-sky-600 underline">
                terms of service and privacy policy.
              </Link>
            </div>
            <Primarybutton
              lable={"Get started for free"}
              type="big"
              onClick={sendRequest}
            />
            <div className="pt-3">
              Already have an account?{" "}
              <Link href={"signin"} className="text-sky-600 underline">
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
