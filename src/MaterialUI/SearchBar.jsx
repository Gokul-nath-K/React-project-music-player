import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import { InputBase } from '@material-ui/core';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginTop: 10,
    width: '50%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(40),
        width: 'fixed',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(0)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '20ch',
            '&:focus': {
                width: '63ch',
            },
        },
    },
}));


export default function SearchBar() {
    return (
        <div>
            <Search>
                {/* <SearchIconWrapper>
                    <SearchIcon sx={{ color:'black' }}/>
                </SearchIconWrapper> */}
                <StyledInputBase
                    placeholder="Browse Music....!"
                    inputProps={{ 'aria-label': 'search',color:'white' }}
                    className='place'
                />
            </Search>
        </div >
    )
}
