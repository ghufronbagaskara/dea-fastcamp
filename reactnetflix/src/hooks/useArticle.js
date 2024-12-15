import { useState, useEffect } from "react";

function useArticle() {
    const [article, setArticle] = useState("")

    function getArticle(counterClick) {
        return (fetch("https://dummyjson.com/posts/1").then(data => data.json()))
    }

    useEffect(() => {
        getArticle(1).then(result => setArticle(result))
    }, [])

    return { article }
}

export default useArticle