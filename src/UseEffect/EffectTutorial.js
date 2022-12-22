import React, { useEffect } from  "react";
import axios from "axios";

function EffectTutorial() {
    useEffect(() =>{
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((response) =>{
            console.log(response.data);
        });
    });

    return <div>Hello World</div>;
}

export default EffectTutorial;