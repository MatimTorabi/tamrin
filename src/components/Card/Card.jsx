import pic_1 from "../../dist/image/pic-1.png"
import pic_2 from "../../dist/image/pic-2.png"
import pic_3 from "../../dist/image/pic-3.png"
import arrow from "../../dist/image/arrow-left.svg"


const Card = () => {
    return ( 
        <section className="w-full laptop:h-[470px] mobile:mb-[80px] laptop:mb-0 my-[40px] bg-[#F3F3F3] mobile:h-auto flex justify-between flex-col items-center ">
            <div className="laptop:w-[85%] desktop:w-[63%] h-[80px] flex flex-col justify-center items-center relative">
                <h1 className="text-[#5E5E5E] text-2xl font-[Yekan]">مقالات ما</h1>
                <h2 className="text-[#353535] text-[32px] font-[Yekan]">مجله <span className="text-[#D79C10] text-[32px] font-[Yekan]">خودرو</span> </h2>
                <div className="absolute left-6 top-[50%] mobile:hidden laptop:flex gap-2.5">
                    <img src={arrow} alt="" />
                    <a href="#" className="text-[#194BF0] text-[18px] font-[Yekan]">مشاهده همه</a>
                </div>
            </div>
            <div className="laptop:w-[85%] desktop:w-[63%] laptop:h-[370px] mobile:h-auto flex justify-between laptop:flex-row-reverse mobile:flex-col-reverse gap-4 "> 
                <div className="flex flex-col mobile:w-[371px] mobile:h-[360px] laptop:w-[391px] laptop:h-[370px] gap-[16px] border-[1px] border-[#D7D7D7] border-solid p-[16px] rounded-2xl">
                    <img src={pic_1} alt="" className="rounded-[12px]" />
                    <h1 className="font-[Yekan] text-[#414141] text-[16px] text-end">روش های مختلف برای اجاره خودرو </h1>
                    <p dir="rtl" className="font-[Yekan] text-[#757575] text-[12px] line-clamp-2 "> امروزه با تغییراتی که در سبک زندگی مردم و شرایط اقتصادی جوامع به وجود آمده است نیازهای افراد و نحوه دسترسی به آنها نیز دچار تحولاتی شده است.</p>
                    <div className="flex justify-end gap-[16px]">
                        <div className="">
                            <img src="" alt="" />
                            <span className="font-[Yekan] text-[#757575] text-[12px]">1,213</span>
                        </div>
                        <div className="">
                            <img src="" alt="" />
                            <span className="font-[Yekan] text-[#757575] text-[12px]">3دقیقه</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col mobile:w-[371px] mobile:h-[360px] laptop:w-[391px] laptop:h-[370px] gap-[16px] border-[1px] border-[#D7D7D7] border-solid p-[16px] rounded-2xl">
                    <img src={pic_2} alt="" className="rounded-[12px]" />
                    <h1 className="font-[Yekan] text-[#414141] text-[16px] text-end">روش های مختلف برای اجاره خودرو </h1>
                    <p dir="rtl" className="font-[Yekan] text-[#757575] text-[12px] line-clamp-2"> امروزه با تغییراتی که در سبک زندگی مردم و شرایط اقتصادی جوامع به وجود آمده است نیازهای افراد و نحوه دسترسی به آنها نیز دچار تحولاتی شده است.</p>
                    <div className="flex justify-end gap-[16px]">
                        <div className="">
                            <img src="" alt="" />
                            <span className="font-[Yekan] text-[#757575] text-[12px]">1,213</span>
                        </div>
                        <div className="">
                            <img src="" alt="" />
                            <span className="font-[Yekan] text-[#757575] text-[12px]">3دقیقه</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col mobile:w-[371px] mobile:h-[360px] laptop:w-[391px] laptop:h-[370px] gap-[16px] border-[1px] border-[#D7D7D7] border-solid p-[16px] rounded-2xl">
                    <img src={pic_3} alt="" className="rounded-[12px]" />
                    <h1 className="font-[Yekan] text-[#414141] text-[16px] text-end">روش های مختلف برای اجاره خودرو </h1>
                    <p dir="rtl" className="font-[Yekan] text-[#757575] text-[12px] line-clamp-2"> امروزه با تغییراتی که در سبک زندگی مردم و شرایط اقتصادی جوامع به وجود آمده است نیازهای افراد و نحوه دسترسی به آنها نیز دچار تحولاتی شده است.</p>
                    <div className="flex justify-end gap-[16px]">
                        <div className="">
                            <img src="" alt="" />
                            <span className="font-[Yekan] text-[#757575] text-[12px]">1,213</span>
                        </div>
                        <div className="">
                            <img src="" alt="" />
                            <span className="font-[Yekan] text-[#757575] text-[12px]">3دقیقه</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
  
 export default Card;