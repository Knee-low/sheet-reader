import { type Dispatch, type SetStateAction, useState } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from '@mui/icons-material/Close';

type SearchBarProps = {
  searchBarParams: {
    searchText: string;
    setSearchText: Dispatch<SetStateAction<string>>;
  };
};
const SearchBar = ({ searchBarParams }: SearchBarProps) => {
  const { searchText, setSearchText } = searchBarParams;
  const [isSearchActive, setIsSearchActive] = useState(false);

  return (
    <div>
      {!isSearchActive ? (
        <IconButton
          onClick={() => setIsSearchActive(true)}
          aria-label="search"
          sx={{ margin: 1 }}
        >
          <SearchIcon />
        </IconButton>
      ) : (
        <TextField
          autoFocus
          label="Search"
          variant="outlined"
          fullWidth
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          sx={{ marginBottom: 2 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => {
                    setSearchText("");
                    setIsSearchActive(false);
                  }}
                  aria-label="clear search"
                >
                  <CloseIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      )}
    </div>
  );
};

export default SearchBar;
