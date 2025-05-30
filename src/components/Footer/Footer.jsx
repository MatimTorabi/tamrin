import ico_1 from "../../dist/image/icon-5.svg"
import ico_2 from "../../dist/image/icon-6.svg"
import ico_3 from "../../dist/image/icon-7.svg"
import logo_1 from "../../dist/image/Logo-1.svg"


const Footer = () => {
    return ( 
        <footer className="w-full h-[576px] bg-[#F3F3F3] flex items-center justify-center">
            <div className="laptop:w-[85%] desktop:w-[63%] mobile:gap-10 mobile:w-full laptop:h-[432px] mobile:h-auto bg-[#1E1E1E] mobile:rounded-[0px] laptop:rounded-3xl opacity-90">
                <div className="flex mobile:flex-col-reverse laptop:flex-col">
                    <div className="px-[20px] w-full w- mobile:h-auto laptop:h-[141px] flex laptop:justify-center items-end mobile:justify-end">
                        <div className="mobile:my-[20px] mobile:items-end laptop:items-center laptop:my-0  mobile:flex-col mobile:gap-4 laptop:gap-0 mobile:flex-wrap laptop:flex-row laptop:w-[1120px] mobile:w-full desktop:w-[81%] laptop:h-[101px] mobile:h-auto flex justify-between items-center flex-row-reverse rounded-2xl mobile:border-none laptop:border-[1px] laptop:border-solid laptop:border-[#868686]">
                            <div className="w-[254px] flex h-[69px]">
                                <div className="w-[75%] h-full flex flex-col items-end pr-[20px] justify-center gap-2">
                                    <h1 className="font-[Yekan] text-[#FFFBFB] text-[16px]">ارتباط با ما</h1>
                                    <h2 className="font-[Yekan] text-[#FFFBFB] text-[16px]">0912-21326545</h2>
                                </div>
                                <div className="w-[35%] h-full flex items-center">
                                    <img src={ico_1} alt="" />
                                </div>
                            </div>
                            <div className="mobile:hidden laptop:flex w-[1px] h-[32px] bg-[#868686]"></div>
                            <div className="w-[254px] flex h-[69px]">
                                <div className="w-[75%] h-full flex flex-col items-end pr-[20px] justify-center gap-2">
                                    <h1 className="font-[Yekan] text-[#FFFBFB] text-[16px]">ایمیل</h1>
                                    <h2 className="font-[Yekan] text-[#FFFBFB] text-[16px]">autorent@info.com</h2>
                                </div>
                                <div className="w-[35%] h-full flex items-center">
                                    <img src={ico_2} alt="" />
                                </div>
                            </div>
                            <div className="mobile:hidden laptop:flex w-[1px] h-[32px] bg-[#868686]"></div>
                            <div className="w-[254px] flex h-[69px]">
                                <div className="w-[75%] h-full flex flex-col items-end pr-[20px] justify-center gap-2">
                                    <h1 className="font-[Yekan] text-[#FFFBFB] text-[16px]">آدرس</h1>
                                    <h2 className="font-[Yekan] text-[#FFFBFB] text-[16px]">تهران- خ شادمان</h2>
                                </div>
                                <div className="w-[35%] h-full flex items-center">
                                    <img src={ico_3} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-[20px] w-full mobile:h-auto laptop:h-[200px] flex items-center laptop:flex-row mobile:flex-col-reverse border-b-[1px] border-b-[#868686]">
                        <div className="mobile:w-full laptop:w-[50%] mobile:h-auto mobile:my-[20px] laptop:my-0 laptop:h-[168px] flex mobile:justify-end laptop:justify-center items-center">
                            <div className="w-[320px] h-[80px] flex flex-col justify-between ">
                                <h1 className="font-[Yekan] text-[16px] text-[#FFFFFF] text-end">خبرنامه</h1>
                                <input type="email" value='ایمیل خود را وارد کنید' className="text-end px-4 text-[#C2C2C2] text-[12px] relative font-[Yekan] select-none w-full h-[40px] border-solid border-[1px] border-[#AEAEAE] rounded-[10px]"/>
                                {/* <button className="w-[66px] h-[32px] font-[Yekan] text-[16px] text-[#212121] bg-[#FDB713] rounded-[6px] absolute top-[50%] left-[50%] cursor-pointer">ارسال</button> */}
                            </div>
                        </div>
                        <div className="mobile:w-full laptop:w-[50%] h-[168px] flex mobile:justify-center laptop:justify-start laptop:gap-10 mobile:gap-3">
                            <div className="w-[134px] h-full flex flex-col items-end justify-center gap-5">
                                <a href="#" className="font-[Yekan] text-[#FFFFFF] laptop:text-[14px] mobile:text-[12px]">دسترسی آسان</a>
                                <a href="#" className="font-[Yekan] text-[#FFFFFF] laptop:text-[14px] mobile:text-[12px]">سوالات متداول</a>
                                <a href="#" className="font-[Yekan] text-[#FFFFFF] laptop:text-[14px] mobile:text-[12px]">تماس با ما</a>
                                <a href="#" className="font-[Yekan] text-[#FFFFFF] laptop:text-[14px] mobile:text-[12px]">درباره ما</a>
                            </div>
                            <div className="w-[407px] h-full flex flex-col items-end justify-between">
                                <img src={logo_1} alt="" />
                                <p dir="rtl" className="font-[Yekan] leading-[180%] font-normal text-[#FFFFFF] laptop:text-[14px] mobile:text-[13px] line-clamp-3">اتورنت با رویکرد اعتماد به مشتری، با در اختیار داشتن بزرگترین ناوگان خودرویی متشکل از انواع خودروهای صفر کیلومتر، اقتصادی تا تجاری در سراسر کشور ایران آماده خدمت‌رسانی به مشتریان است.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full mobile:h-auto laptop:h-[90px] flex justify-center items-center mobile:my-[20px] laptop:my-0">
                    <div className="flex">
                        <span className="font-[Yekan] text-[16px] text-[#9A9A9A]">تمامی حقوق این وبسایت متعلق به اتورنت می‌باشد</span>
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;