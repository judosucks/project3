import {useState} from "react";
import {GoChevronDown, GoChevronLeft} from "react-icons/go";
function ExpandablePanel({header, children}) {
    const [expanded,
        setExpanded] = useState(false)

    const handleClick = () => {
        setExpanded(!expanded)
    }
    return (
        <div className="mb-2 border rounded">
            <div className="flex p-2 justify-between items-center">
                <div className="flex flex-row items-center justify-between">
                    {header}
                </div>
                <div
                    onClick={handleClick}
                    className="flex items-center px-2 py-1.5 text-gray-400 hover:text-gray-500 transition-colors duration-200 ease-in-out cursor-pointer">
                    {expanded
                        ? <GoChevronDown/>
                        : <GoChevronLeft/>}
                </div>
            </div>
            {expanded && <div className="p-2 border-t">{children}</div>}

        </div>

    )
}
export default ExpandablePanel;