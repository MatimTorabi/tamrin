
import flag from "../../dist/image/Flag.svg"
const Input = () => {
    return ( 
        <div className="input mobile:w-full laptop:w-[536px] h-[105px] gap-[35px] flex flex-col relative ">
            <input type="text" value="9********" className="text-[#9A9A9A] pb-[3px] pl-[110px] w-full h-[48px] bg-[#ffffff] border-[1px] rounded-[6px]  border-solid border-[#C2C2C2] "  />
            <div className="flex justify-center items-center gap-4 absolute left-3 top-[10px]">
                <img src={flag} alt="" className="" />
                <span className="font-[Yekan] text-[14px] text-[#0C0C0C]">+98</span>
                <span className="bg-[#C2C2C2] w-[1px] h-[24px]"></span>
            </div>
            <div className="flex justify-end  gap-4">
                <p dir="rtl" className="text-[#727272] font-[Yekan] mobile:text-[12px] laptop:text-[14px]">با ورود و ثبت‌نام در سایت، با <span className="text-[#194BF0] cursor-pointer text-[14px]">قوانین اتورنت</span> موافقت می‌کنم.</p>
                <input type="checkbox" className=" cursor-pointer w-[24px] font-[Yekan] h-[24px] border-[1px] border-solid border-[#C2C2C2]" />
            </div>
        </div>
    );
}
 
export default Input;