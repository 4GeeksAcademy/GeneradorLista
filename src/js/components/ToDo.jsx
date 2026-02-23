import React, { useState } from "react";

const ToDo = () => {
    const [input, setInput] = useState("");
    const [list, setList] = useState([]);

    function agregarItem() {
        if (input.trim() === "") return;

        setList([...list, input]);
        setInput("");
    }

    const agregarItems = (e) => {
        setInput(e.target.value);
    };

    return (
        <div className="container mx-auto mt-5">
            <input className="form-control" type="text" value={input} onChange={agregarItems}/>

            <ul className="list-group">
                {list.map((item, index) => (
                    <li className="list-group-item" key={index}>{item}</li>
                ))}
                <button className="btn btn-primary" onClick={agregarItem}>Agregar</button>
            </ul>
        </div>
    );
};

export default ToDo;