import { useState } from "react";

function WebTitle(props) {
    const [title, setTitle] = useState(props.title)
    const description = props.description;
    function changeTitle() {
        setTitle("Netflix🔥#2024")
    }
    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <button onClick={changeTitle}>Ganti Judul Website</button>
        </div>
    )
}

export default WebTitle