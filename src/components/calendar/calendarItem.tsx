import { useEffect } from "react"
import { format } from "date-fns";
const CalendarItem = (item: any) => {
    useEffect(() => {
        console.log(item.item)
    }, [])
    return (
        <div>
            {format(item, "yyyy-MM-dd")}
        </div>
    )
}
export default CalendarItem