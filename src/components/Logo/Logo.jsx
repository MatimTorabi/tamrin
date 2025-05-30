import textImage from '../../dist/image/Logo-2.svg'

const Logo = () => {
    return ( 
        <div className="flex justify-center mobile:pb-[60px] laptop:pb-0">
            <img src={textImage} alt="" />
        </div>
    );
}
 
export default Logo;