import { useState } from "react"

const Select = ({ items, value, onSelect, visualizor, variant }) => {
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
            <button className={'btn btn-sm dropdown-toggle btn-outline-'+variant} style={{width: 130}}
                type="button" onClick={handleToggle}>
                { visualizor(selectedItem) }
            </button>
            <ul className="dropdown-menu" style={{display: open ? 'block' : 'none'}}>
                { items.map(item => (
                    <li key={item.id}><span className="dropdown-item fs-6 clickable" onClick={() => handleSelect(item)}>{ visualizor(item) }</span></li>
                ))}
            </ul>
        </div>
    )
}

Select.defaultProps = {
    variant: 'secondary'
}

export default Select
