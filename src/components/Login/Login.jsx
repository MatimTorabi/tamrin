import imgCar from '../../dist/image/img-1.png'
import Button from '../Button/Button';
import Input from '../Input/Input';
import Logo from '../Logo/Logo';
import Title from '../Title/Title';
import InputNumber from '../InputNumber/InputNumber';
const Login = () => {
    return ( 
        
            <section className="flex mobile:h-[670px] tablet:h-[900px] laptop:h-[945px] justify-center mobile:px-[20px] laptop:px-0 items-center">
                <div className="laptop:w-[1016px] mobile:w-full laptop:h-[856px] mobile:h-auto flex ">
                    <div className="w-[356px] h-full mobile:hidden laptop:flex">
                        <img src={imgCar} alt="" />
                    </div>
                    <div className="laptop:w-[660px] mobile:w-full h-full ">
                        <div className="h-full flex flex-col justify-center items-center">
                            <div className="w-full h-[35%] pt-[40px]">
                                <Logo/>
                            </div>
                            <div className="w-full h-[65%] flex justify-start flex-col items-center">
                                <Title/>
                                <Input/>
                                <Button/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
     );
}
 
export default Login;