const Promises1 = (props) => {
    return(
        <div className=" w-full md:w-[30%] lg:w-[20%] my-[10px] relative float-left px-4 text-white text-left">
            <span>
                <img className="relative float-left" src={props.image}/>
            </span>
            <h5 className="leading-8 text-lg font-bold ml-12 md:text-xl">{props.title}</h5>
            <p className="ml-[55px] leading-8 text-xs md:text-sm font-normal mb-[15px]">{props.content}</p>
        </div>
    )
}

export default Promises1;