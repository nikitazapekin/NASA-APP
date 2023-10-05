import "./roversPhotosComponentItem.scss"
interface  RoversPhotosComponentItemProps {
    date: string,
    src: string
}
const RoversPhotosComponentItem=({date, src}: RoversPhotosComponentItemProps)=> {
    return (
        <div className="roversPhotosComponentItem">
         <div className="roversPhotosComponentItemTitle">{date}</div>
            <img className="roversPhotosComponentItemImage" src={src} alt="mars" />

        </div>
    )
}
export default RoversPhotosComponentItem