const Team_Members = (props) => {
    return(
        <div className="flex flex-col w-[260px] md:w-auto m-auto md:h-[316px] lg:h-[225px] text-left my-[15px] xl:flex-row xl:justify-between">
            <div className="w-[260px] md:w-auto lg:w-1/2">
                <img src={props.image}/>
            </div>
            <div className="w-[260px] md:w-auto lg:w-1/2">
                <h4 className="text-[#bf469c] text-lg lg:text-2xl font-bold mt-[26px] lg:mt-0">{props.title}</h4>
                <span className="text-base mb-[15px] font-semibold lg:mb-0">{props.content}</span>
            </div>            
        </div>
    )
}

export default Team_Members;