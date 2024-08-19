const IntroTeam = (props) => {
    return(
        <div className="w-full text-left">
            <img className="my-6" src={props.image}/>
            <h3 className="text-lg font-bold xl:text-2xl">{props.title}</h3>
            <p className="text-base">{props.content}</p>
        </div>
    )
}

export default IntroTeam;