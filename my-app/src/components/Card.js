import React from "react";
import { Box, Grid, Logo } from "./Styles";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

const Card = props => {
    console.log("This is props", props);
    return (
        <Grid>
        <h1>My Followers</h1>
        <Slider>
            {props.followers.map((item, index) => {
                return (
            <div key={index}>

                    <Box>
                        <p>{item.login}</p>
                        <a href={item.html_url}><Logo src="./GitHub_Logo.png"></Logo></a>
                    </Box>
            </div>

                );
            })}
        </Slider>
        </Grid>
    );
};

export default Card;