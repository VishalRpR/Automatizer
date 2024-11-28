

export const GoogleButton = ({
  lable,
  type,
}: {
  lable: string;
  type: "small" | "big";
}) => {
  return (
    <div
      className={`rounded-full text-black font-bold cursor-pointer border-2 border-slate-400 hover:border-2 hover:border-black text-center ${
        type == "small" ? "text-sm px-5 py-2" : "text-xl px-10 py-3"
      }`}
    >
      {lable}
    </div>
  );
};
