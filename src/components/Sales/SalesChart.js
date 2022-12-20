import { Box, Card, CardContent, Container, Divider, Tab, Tabs } from "@mui/material";
import React, { Component } from "react";
import axios from 'axios';
import { BarChart } from "./BarChart";

class SalesChart extends Component {

    constructor() {
        super()
        this.state = {
            data: [],
            isLoading: false,
            errorMsg: ''
        };
    }

    componentDidMount() {
        this.loadData();
    }


    loadData() {
        const { data, errorMsg } = this.state;
        this.setState({ isLoading: true });
        axios
            .get('https://fakestoreapi.com/products')
            .then((response) => {
                this.setState({
                    data: [...data, ...response.data],
                    errorMsg: ''
                });
            })
            .catch((error) =>
                this.setState({
                    errorMsg: 'Error while loading data. Try again later.'
                })
            )
            .finally(() => {
                this.setState({ isLoading: false });
            });
    }

    render() {

        const { data } = this.state;
        return (
            <Container sx={{ mt: '30px', mx: '90px' }}>
                <Card sx={{
                    width: '1140px', height: '350px'
                }} >
                    <CardContent>
                        <Tabs value={0} aria-label="basic tabs example">
                            <Tab label="Sales" />
                            <Tab label="Visits" />
                        </Tabs>
                        <Divider sx={{mb: '30px'}} />
                            <BarChart details={data} />
                    </CardContent>
                </Card>
            </Container>
        )
    }
}

export default SalesChart;