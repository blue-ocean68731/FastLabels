const Taskreview = ({image, states, user, date, title, content}) => {
    return(
        <div className="flex flex-col items-start text-left text-gray-600">
            <p className="flex">
                <img src={image} className="w-[110px] h-5 mr-2"/>
                <span className="text-sm font-medium">{states}</span>
            </p>
            
            <p>
                <span className="text-sm font-medium">{user}</span>
                <span className="text-sm text-gray-400 ml-2">{date}</span>
            </p>
            <p>
                <span className="text-sm font-bold text-black">{title}</span>
            </p>
            <p>
                <span className="text-sm">{content}</span>
            </p>
        </div>
    )
}

export default Taskreview;