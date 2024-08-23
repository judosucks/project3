import classNames from "classnames";
import {twMerge} from "tailwind-merge";

function Panel({
    children,
    className,
    ...rest
}) {
    const finalClassNames = twMerge(classNames('border rounded p-3 bg-white w-full', className))

    return <div {...rest} className={finalClassNames}>{children}</div>
}

export default Panel;