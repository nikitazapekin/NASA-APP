import "./moonPics.scss"
import Moon3 from "../../asserts/space3.jpg"
const MoonPics = () => {
    return (
        <div className="moonPics">
            <img className="moonPic" alt="moon" src={Moon3} />
            <img className="moonPic" alt="moon" src={Moon3} style={{ scale: "-1" }} />
            <img className="moonPic" alt="moon" src={Moon3} />
        </div>
    );
}

export default MoonPics;