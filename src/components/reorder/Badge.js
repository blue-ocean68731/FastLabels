const Badge = ({title, content, image}) => {
    return(
        <div className="flex flex-row w-full xl:w-1/5 items-center gap-2">
            <img className="inline-block" src={image} />
            <div className="flex flex-col text-left">
                <h6 className="text-2xl font-medium">{title}</h6>
                <p className="text-sm">We are prompt and timely</p>
            </div>
            
        </div>
    )
}

export default Badge;