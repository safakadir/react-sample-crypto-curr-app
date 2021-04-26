import { useState } from 'react'

const SearchInput = ({ onSearch }) => {
    const [search, setSearch] = useState('')
    const [lastSearched, setLastSearched] = useState('')
    const [dirty, setDirty] = useState(false)

    const handleChange = (e) => {
        setSearch(e.target.value)
        setDirty(e.target.value !== lastSearched)
        //console.log(`search:{}, lastSearched:{}, dirty:{}`)
    }

    const handleKey = (e) => {
        if(e.keyCode === 13) {
            e.preventDefault()
            onSearch(search)
            setLastSearched(search)
            setSearch('')
            setDirty(false)
        }
    }

    return (
      <form>
        <input
            type="text"
            className="form-control"
            placeholder="Search"
            value={search}
            onChange={handleChange}
            onKeyDown={handleKey} />
        <p className={'input-hint' + (!dirty ? ' invisible' : '')} >Press Enter to Search</p>
      </form>
    );
}

export default SearchInput
