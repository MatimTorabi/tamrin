import clock from "../../dist/image/clock.svg"

const InputNumber = () => {
    return ( 
        <div className="laptop:w-[536px] h-[113px] flex-col mobile:px-[20px] laptop:px-0 mobile:w-full ">
            <div className="w-full h-[75%] flex justify-center gap-[16px]">
                <input type="text" className="w-[56px] h-[56px] text-[#2b2b2b] rounded-[10px]  border-[1px] border-[#C2C2C2] border-solid focus:border-sky-500 invalid:border-pink-500 invalid:text-pink-600" />
                <input type="text" className="w-[56px] h-[56px] text-[#2b2b2b] rounded-[10px]  border-[1px] border-[#C2C2C2] border-solid focus:border-sky-500 invalid:border-pink-500 invalid:text-pink-600" />
                <input type="text" className="w-[56px] h-[56px] text-[#2b2b2b] rounded-[10px]  border-[1px] border-[#C2C2C2] border-solid focus:border-sky-500 invalid:border-pink-500 invalid:text-pink-600" />
                <input type="text" className="w-[56px] h-[56px] text-[#2b2b2b] rounded-[10px]  border-[1px] border-[#C2C2C2] border-solid focus:border-sky-500 invalid:border-pink-500 invalid:text-pink-600" />
                <input type="text" className="w-[56px] h-[56px] text-[#2b2b2b] rounded-[10px]  border-[1px] border-[#C2C2C2] border-solid focus:border-sky-500 invalid:border-pink-500 invalid:text-pink-600" />
            </div>
            <div className="w-full h-[25%] flex flex-row-reverse justify-between items-center">
                <div className="flex">
                    <span dir="rtl" className="font-[Yekan] text-[14px] text-[#868686]">تا دریافت مجدد کد</span>
                    <span className="font-[Yekan] text-[14px] text-[#194BF0]">۱:۵۹</span> 
                    <img src={clock} alt="" className="pl-[10px]" />
                </div>
                <span className="font-[Yekan] text-[14px] text-[#194BF0] cursor-pointer">ویرایش شماره موبایل</span>
            </div>
        </div>

    );
}
 
export default InputNumber;