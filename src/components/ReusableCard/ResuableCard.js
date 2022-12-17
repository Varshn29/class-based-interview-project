import { Box, CardMedia, Typography } from '@mui/material';
import React, { Component } from 'react';


class ReusableCard extends Component {

    constructor(props) {
        super(props)
    } 

    render () {
        return (
            <Box>
                {<CardMedia
                    component="img"
                    height="250"
                    image={this.props.image}
                    alt="Product-image"
                    width="200" />}
                {<Typography>{this.props.title}</Typography>}
                {<Typography>{this.props.category}</Typography>}
                {<Typography>$ {this.props.price}</Typography>}
            </Box>
        );
    }
}

export default ReusableCard;