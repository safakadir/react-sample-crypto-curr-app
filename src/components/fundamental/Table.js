import PropTypes from 'prop-types'
import ProgressBar from './ProgressBar'

const Table = ({items, columns, onRowClick, loading, dark}) => {

    return (
        <>
        <table className={'table table-responsive table-hover'+(dark ? ' table-dark' : '')}>
            <thead>
                <tr>
                    {columns.map(column => (
                        <th key={column.key}>{column.title}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {items.map(item => (
                    <tr key={item.id} onClick={() => !!onRowClick && onRowClick(item)} className={!!onRowClick ? 'clickable' : ''}>
                        {columns.map(column => (
                            <td key={`${item.id}_${column.key}`}>
                                {!!column.enhance ? column.enhance(item[column.key]) : item[column.key]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
        { loading && <ProgressBar /> }
        </>
    )
}

Table.propTypes = {
    items: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired,
    loading: PropTypes.bool,
    dark: PropTypes.bool
}

Table.defaultProps = {
    loading: false,
    dark: false
}

export default Table
