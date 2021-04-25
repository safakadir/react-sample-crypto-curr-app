// import { useState } from 'react'

// import { makeStyles } from '@material-ui/core/styles';
// import { Paper, InputBase, IconButton, TextField } from '@material-ui/core'
// import SearchIcon from '@material-ui/icons/Search';

// const useStyles = makeStyles((theme) => ({
//     root: {
//       padding: '2px 4px',
//       display: 'flex',
//       alignItems: 'center',
//       width: 400,
//     },
//     input: {
//       marginLeft: theme.spacing(1),
//       flex: 1,
//     },
//     iconButton: {
//       padding: 10,
//     },
//     divider: {
//       height: 28,
//       margin: 4,
//     },
//   }));

// const SearchInput = ({ onClick }) => {
//     const classes = useStyles();

//     const [search, setSearch] = useState('')

//     const handleSearch = (e) => {
//         setSearch(e.target.value)
//     }

//     const handleClick = (e) => {
//         e.preventDefault()
//         onClick(search)
//     }

//     return (
//       <>
//         <TextField
//           className={classes.input}
//           placeholder="Search Coin Assets"
//           value={search}
//           onChange={handleSearch}
//           fullWidth
//         />
//         <IconButton type="submit" className={classes.iconButton} onClick={handleClick}>
//           <SearchIcon />
//         </IconButton>
//       </>
//     );
// }

// export default SearchInput
