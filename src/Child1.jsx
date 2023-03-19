import React from "react";

const styledText = {
    fontSize: '2rem',
    textAlign: 'center',
    border: '2px solid red'
}
export default function Child1() {
    return(
        <div style={styledText}>
            Child1
        </div>
    )
}