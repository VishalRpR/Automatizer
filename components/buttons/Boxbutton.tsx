

export const Boxbutton = ({lable,onClick}:{lable:string,onClick?:()=>void}) => {
  return (
    <div className="px-3 py-1 cursor-pointer hover:bg-slate-200 rounded-sm"
    onClick={onClick}>
       {lable} 
    </div>
  )
}
