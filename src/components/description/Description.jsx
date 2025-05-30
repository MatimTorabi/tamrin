const Description = () => {
    return ( 
        <section className="w-full h-[292px] flex justify-center mt-[47px]">
            <div className="laptop:w-[85%] h-full rounded-2xl bg-amber-300 flex justify-center items-center relative">
                <div className="laptop:w-[312px] laptop:h-[186px] bg-blue-500 rounded-2xl absolute left-[212px] top-[210px]"></div>
                <div className="laptop:w-[312px] laptop:h-[186px] bg-pink-500 rounded-2xl absolute left-[654px] top-[210px]"></div>
                <div className="laptop:w-[312px] laptop:h-[186px] bg-green-600 rounded-2xl absolute right-[212px] top-[210px]"></div>
            </div>
        </section>
    );
}
 
export default Description;