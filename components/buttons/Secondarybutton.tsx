export const Secondarybutton = ({
  lable,
  type,
  onClick,
}: {
  lable: string;
  type: "small" | "big";
  onClick: () => void;
}) => {
  return (
    <div
      className={`rounded text-white font-bold cursor-pointer bg-purple-700 hover:bg-purple-800 text-center ${
        type == "small" ? "text-sm px-5 py-2" : "text-xl px-10 py-3"
      }`}
      onClick={onClick}
    >
      {lable}
    </div>
  );
};
