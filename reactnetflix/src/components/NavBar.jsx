import { useAtom } from "jotai"
import { languageAtom } from "../jotai/atoms"

function NavBar() {
    const [, setLanguage] = useAtom(languageAtom)

    return (
        <div className="navbar">
            <h3>Netflix</h3>
            <div>
                <button onClick={() => setLanguage("id")}>Indonesia</button>
                <button onClick={() => setLanguage("en")}>English</button>
            </div>
        </div>
    )
}

export default NavBar