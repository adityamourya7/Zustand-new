import '../../../../src/App.css';

function Card(props) {
    let btncontent;
    let CardColour;

    if (props.isAvailable === true) {
        btncontent = <div className="btn" style={{ backgroundColor: "lime" }}>
            <p>Order Now</p>
        </div >
        CardColour = { backgroundColor: "lightgreen" };
    } else {
        btncontent = <div className="btn" style={{ backgroundColor: "red" }}>
            <p>Out of Stock</p>
        </div>
        CardColour = { backgroundColor: "pink" };
    }
    return (
        <div className="Card" style={CardColour}>
            <div className="Cardimg">
                <img src={props.img}>
                </img>
            </div>
            <div className="info-sec">
                <h1>{props.name}</h1>
                <p>{props.tagline}</p>
                {btncontent}
            </div>
        </div>
    );
}

export default Card;