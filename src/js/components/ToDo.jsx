import React, { useState } from "react";

const ToDo = () => {
    const [input, setInput] = useState("");
    const [list, setList] = useState([]);

    function agregarItem() {
        if (input.trim() === "") return;

        setList([...list, { id: Date.now(), text: input }]);
        setInput("");
    }

    function eliminarItem(id) {
        setList(list.filter(item => item.id !== id));
    }

    return (
        <div className="container mx-auto mt-5">
            <input className="form-control" type="text" value={input} onChange={(e) => setInput(e.target.value)} />

            <button className="btn btn-primary mt-2" onClick={agregarItem} >
                Agregar
            </button>

            <ul className="list-group mt-3">
                {list.map((item) => (
                    <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                        {item.text}
                        <button className="btn btn-danger btn-sm" onClick={() => eliminarItem(item.id)}>
                            X
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ToDo;