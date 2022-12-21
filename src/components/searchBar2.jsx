import React, { useEffect, useState } from "react";
import { makeStyles, TextField } from "@material-ui/core";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import Records from "../Data/homePage_db.json";

const useStyles = makeStyles({
  h6: {
    color: "#ffffff",
    fontSize: "16px",
    textAlign: "center",
  },
  h5: {
    color: "white",
  },
  searchField: {
    padding: '1 %',
    borderRadius: 50,
    backgroundColor: 'white',
    width:'600',
  },
});

function SearchBar2() {
  const [searchInput, setSearchInput] = useState("");

  let handleChange = (e) => {
    e.preventDefault();
    let lowerCase = e.target.value.toLowerCase();
    setSearchInput(lowerCase);
  };

  const filteredData = Records.filter((el) => {
    if (searchInput === "") {
      return el;
    }
    else {
      return el.name.toLowerCase().includes(searchInput);
    }
    // else {

    // }
  });

  const classes = useStyles();
  return (
    <>
      <TextField
        id="outlined-basic"
        onChange={handleChange}
        variant='filled'
        // fullWidth
        // label="Search"
        placeholder="Search"
        className={classes.searchField}
      />
      <br />
      <br />
      <div className="row" id="row">
        {filteredData &&
          filteredData.map((record) => {
            return (
              <>
                <div className="col-md-3" key={record.id} style={{color:"white"}}>
                  <Card
                    sx={{
                      maxWidth: 200,
                      maxHeight: 250,
                      bgcolor: "#212121",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="170"
                      image= "Pictures/pathala.jpg"
                      // image={record.image}
                      sx={{ padding: "10px", paddingBottom: "0px" }}
                    />
                    <CardContent>
                      <Typography variant="h6" classes={{ h6: classes.h6 }}>
                        {record.name}
                      </Typography>
                    </CardContent>
                  </Card>
                  <br />
                  <br />
                </div>
              </>
            );
          })}
      </div>
    </>
  );
}

export default SearchBar2;
