import kia_1 from "../../dist/image/KIA.png"
import kia_2 from "../../dist/image/KIA-1.png"
import kia_3 from "../../dist/image/KIA-2.png"
import toyouta from "../../dist/image/Toyota.png"
import nissan from "../../dist/image/Nissan.png"
import hyunda from "../../dist/image/Hyundai.png"
import hounda from "../../dist/image/Honda.png"
import mercedes from "../../dist/image/Marcedes.png"
import lexus from "../../dist/image/lexus-logo.png"
import bmw from "../../dist/image/BMW.png"


const Logocar = () => {
    return ( 
        <section className="w-full laptop:h-[80px] mobile:h-auto mt-[147px]">
            <div className="w-full h-full flex justify-center items-center gap-[56px] mobile:flex-col-reverse flex-wrap laptop:flex-row-reverse">
                    <a href="#">
                        <img src={kia_1} alt="" className="" />
                    </a>
                    <a href="#">
                        <img src={kia_2} alt="" className="" />
                    </a>
                    <a href="#">
                        <img src={kia_3} alt="" className="" />
                    </a>
                    <a href="#">
                        <img src={toyouta} alt="" className="" />
                    </a>
                    <a href="#">
                        <img src={nissan} alt="" className="" />
                    </a>
                    <a href="#">
                        <img src={hyunda} alt="" className="" />
                    </a>
                    <a href="#">
                        <img src={hounda} alt="" className="" />
                    </a>
                    <a href="#">
                        <img src={mercedes} alt="" className="" />
                    </a>
                    <a href="#">
                        <img src={lexus} alt="" className="" />
                    </a>
                    <a href="#">
                        <img src={bmw} alt="" className="" />
                    </a>
            </div>
        </section>
    );
}
 
export default Logocar;