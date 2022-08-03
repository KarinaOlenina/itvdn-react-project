//Рендер строки и картинки

const Text = props => {
    return <h1>{props.text}</h1>;
}

const Img = props => {
    return <img src={props.src}/>
}

function HelloImg() {
    return (
        <div>
            <Text text='Hello'/>
            <Img src='https://static.tildacdn.com/tild3165-3964-4936-b837-346665326130/unnamed.jpg'/>
            <p>
                <Text text='Bay'/>
            </p>
        </div>
    )
}

export default HelloImg;