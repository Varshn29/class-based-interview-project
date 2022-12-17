import { Box, Container, Grid, Typography } from "@mui/material";
import React, { Component } from "react";
import { connect } from "react-redux";
import { productsList } from '../../redux/action/productsAction';
import ReusableCard from "../ReusableCard/ResuableCard";

class Jewelery extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value: [],
        }
    }

    componentDidMount() {
        this.props.productsList()
    }

    showProductsList = (data) => {
        return data?.map((item, i) => {
            if (item.category === "jewelery") {
                return <Grid key={i} item xs={4}>
                    <ReusableCard {...item} />
                </Grid>
            }
        }
        )
    }

    render() {
        return (
            <Container>
                <Typography variant='h5' sx={{ textAlign: 'center', mt: '30px', mb: '40px' }}>Displaying Jewelery</Typography>
                <Box style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                    {this.showProductsList(this.props.data.productsListData)}
                </Box>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.listOfProducts
    }
}

const mapDispatchToProps = {
    productsList
}

export default connect(mapStateToProps, mapDispatchToProps)(Jewelery)