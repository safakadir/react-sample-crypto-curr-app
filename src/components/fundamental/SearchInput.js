import { useState } from 'react'
import utils from '../../utils'

const SearchInput = ({ onSearch }) => {
    const [search, setSearch] = useState('')
    const [lastSearched, setLastSearched] = useState('')
    const [dirty, setDirty] = useState(false)

    const handleChange = (e) => {
        setSearch(e.target.value)
        setDirty(e.target.value !== lastSearched)
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

            <div className="px-2 d-flex justify-content-between">
                { !utils.isEmpty(lastSearched) && 
                    <div>
                        <span style={{fontWeight: 'bold'}}>Currently viewing:</span> {lastSearched}
                        <button className="btn" style={{marginTop:-2}}><i className="bi-x-circle"></i></button>
                    </div>
                }
                <div className="flex-grow-1" />
                <p className={'input-hint mb-0 mt-1' + (!dirty ? ' invisible' : '')} >Press Enter to Search</p>
            </div>
      </form>
    );
}

export default SearchInput
