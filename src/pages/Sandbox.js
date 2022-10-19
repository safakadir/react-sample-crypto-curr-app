import { useState, useRef } from "react"

const Sandbox = () => {
    const [name, setName] = useState('stranger')
    const nameRef = useRef()

    const handleSend = (e) => {
        setName(nameRef.current.value) 
    }

    return (
        <div>
            <p>Hello, Dear {name}</p>
            <input type="text" ref={nameRef} />
            <button onClick={handleSend}>Send Name</button>
        </div>
    )
}

export default Sandbox
