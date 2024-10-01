import { Link } from "react-router-dom"

export function Bottom({label, buttonText, to}) {
    return <div className="py-2 text-sm flex justify-center">
      <div>
        {label}
      </div>
      <Link  className="pointer underline pl-1 hover:cursor-pointer" to={to}>
        {buttonText}
      </Link>
    </div>
}