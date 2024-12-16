import { useAtom } from "jotai"
import { languageAtom } from "../jotai/atoms"

function NavBar() {
    const [, setLanguage] = useAtom(languageAtom)

    return (
        <div className="navbar">
            <h3>Netflix</h3>
            <div>
                <button className="btn btn-accent btn-active mr-4" onClick={() => setLanguage("id")}>Indonesia</button>
                <button className="active:bg-red-500 hover:bg-yellow-500" onClick={() => setLanguage("en")}>English</button>
            </div>
        </div>
    )
}

export default NavBar