import { useState } from "react"

const Select = ({ items, value, onSelect, visualizor }) => {
    const [open, setOpen] = useState(false)
    const [selectedItem, setSelectedItem] = useState(value)

    const handleSelect = (item) => {
        setSelectedItem(item)
        setOpen(false)
        onSelect(item)
    }

    const handleToggle = () => {
        setOpen(!open)
    }

    return (
        <div className="btn-group dropstart">
            <button className="btn btn-outline-secondary btn-sm dropdown-toggle" style={{width: 130}}
                type="button" onClick={handleToggle}>
                { visualizor(selectedItem) }
            </button>
            <ul className="dropdown-menu" style={{display: open ? 'block' : 'none'}}>
                { items.map(item => (
                    <li key={item.id}><a className="dropdown-item fs-6" onClick={() => handleSelect(item)}>{ visualizor(item) }</a></li>
                ))}
            </ul>
        </div>
    )
}

export default Select
