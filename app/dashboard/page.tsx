"use client";
import { Appbar } from "@/components/Appbar";
import { Boxbutton } from "@/components/buttons/Boxbutton";
import { Secondarybutton } from "@/components/buttons/Secondarybutton";
import { BACKEND_URL } from "@/config";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Zap {
  id: string;
  triggerId: string;
  userId: number;
  actions: {
    id: string;
    zapId: string;
    actionId: string;
    sortingOrder: number;
    type: {
      id: string;
      name: string;
    };
  }[];
  trigger: {
    id: string;
    zapId: string;
    triggerId: string;
    type: {
      id: string;
      name: string;
    };
  };
}

function useZaps() {
  const [loading, setLoading] = useState(true);
  const [zaps, setZaps] = useState<Zap[]>([]);
  const [user,setUser]=useState(null)

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/zap/`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setZaps(res.data.zaps);
        setLoading(false);
      });



      axios
        .get(`${BACKEND_URL}/api/v1/user/`, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((res) => {
         setUser(res.data.user.name)
        });
  }, []);

  return {
    zaps,
    loading,
    user
  };
}

export default function Dashboard() {
  const { zaps, loading,user } = useZaps();
      
  const router = useRouter();

  return (
    <div>
      <Appbar user={user}/>
      <div className="flex justify-center pt-5">
        <div className="max-w-screen-lg w-full  border-b-2 pb-5">
          <div className="flex justify-between ">
            <div className="text-2xl font-bold">My Zaps</div>
            <div>
              <Secondarybutton
                lable="Create"
                type="small"
                onClick={() => {
                  router.push("/zap/create");
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {loading ? (
        "loading....."
      ) : (
        <div>
          <ZapTable zaps={zaps} />
        </div>
      )}
    </div>
  );
}

function ZapTable({ zaps }: { zaps: Zap[] }) {
  const router = useRouter();
  return (
    <div className="p-8 max-w-screen-lg w-full ">
      <div className="flex">
        <div className="flex-1">Name</div>
        <div className="flex-1">Last Edit</div>
        <div className="flex-1">Running</div>
        <div className="flex-1">Go</div>
      </div>
      {zaps.map((z) => (
        <div className="flex border-b border-t py-4" key={z.id}>
          <div className="flex-1">
            {z.trigger.type.name} {z.actions.map((x) => x.type.name + " ")}
          </div>
          <div className="flex-1">{z.id}</div>
          <div className="flex-1">Nov 13, 2023</div>
          <div className="flex-1">
            <Boxbutton
              lable={"Go"}
              onClick={() => {
                router.push("/zap/" + z.id);
              }}
            >
              
            </Boxbutton>
          </div>
        </div>
      ))}
    </div>
  );
}
