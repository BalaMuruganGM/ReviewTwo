import '../index.css';

const ReviewCard = (props) => {
    return (
        <div className="profile">
            <div className="leftProfile">
                <img src={props.img1} />
            </div>
            <div className="rightProfile">
                <div className="TopRight">
                    <h3>{props.name}</h3>
                    <img src={props.img2} />
                </div>
                <div className="bottomRight">
                    <p> Your words matter.Honest reviews
                        help small businesses grow and travelers
                        find hidden gems</p>
                </div>
            </div>
        </div>

    )
}

export default ReviewCard;