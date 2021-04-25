import PropTypes from 'prop-types'

const Table = ({items, columns, onRowClick}) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    {columns.map(column => (
                        <th key={column.key}>{column.title}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {items.map(item => (
                    <tr key={item.id} onClick={() => onRowClick(item)}>
                        {columns.map(column => (
                            <td key={`${item.id}_${column.key}`}>
                                {!!column.enhance ? column.enhance(item[column.key]) : item[column.key]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

Table.propTypes = {
    items: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired,
}

export default Table
