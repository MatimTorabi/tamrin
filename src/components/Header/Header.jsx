import Logo from "../Logo/Logo"
import serch from '../../dist/image/search.svg'

const Header = () => {
    return ( 
        <header className="fixed z-[1000]  w-full h-[96px] flex justify-center items-center mobile:px-[20px] laptop:px-0">
            <div className="laptop:w-[85%] mobile:w-full h-full flex bg-[#FFFF23] rounded-b-[8px]">
                <div className="w-[15%] h-full flex items-center">
                    <a href="#" className="laptop:pl-[32px]">
                        <div className="w-[122px] h-[40px] bg-[#194BF0] rounded-[8px] flex justify-center items-center">
                            <span className="font-[Yekan] text-[#FFFFFF] text-[16px]">ورود / ثبت‌نام</span>
                        </div>    
                    </a>
                </div>
                <div className="w-[70%] h-full flex items-center justify-center gap-[40px] flex-row-reverse">
                    <a href="#" className="font-[Yekan] text-[16px] text-[#353535]">رزرو خودرو</a>
                    <a href="#" className="font-[Yekan] text-[16px] text-[#353535]">خدمات ما</a>
                    <a href="#" className="font-[Yekan] text-[16px] text-[#353535]">بلاگ</a>
                    <a href="#" className="font-[Yekan] text-[16px] text-[#353535]">درباره ما</a>
                    <a href="#" className="font-[Yekan] text-[16px] text-[#353535]">تماس با ما</a>
                    <img src={serch} alt="" className="cursor-pointer" />
                </div>
                <div className="w-[15%] h-full flex items-center justify-end laptop:pr-[32px]">
                    <Logo/>
                </div>
            </div>
        </header>
    );
}
 
export default Header;