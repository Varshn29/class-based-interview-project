import { Accordion, AccordionDetails, AccordionSummary, AppBar, Box, Button, Card, Divider, FormControl, Grid, InputLabel, MenuItem, Select, Tab, Tabs, TextField, Toolbar, Typography } from '@mui/material';
import React, { Component } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

class Form extends Component {

    constructor() {
        super()
        this.state = {
            type: '',
            invoiceNumber: '',
            invoiceDate: null,
            invoiceRecDate: null,
            baselineDate: null,
        }
    }

    handleChange = (e) => {
        return this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static"
                    sx={{ bgcolor: '#ffffff', borderBottom: '3px solid lightgrey', boxShadow: 'none' }}>
                    <Toolbar>
                        <Box sx={{ ml: '1380px' }}>
                            <Button sx={{ bgcolor: "#551a8b", borderRadius: '8px', color: '#ffffff', minWidth: '80px', textTransform: 'capitalize', fontSize: '16px', fontWeight: '600' }}>Save</Button>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Tabs value={0} aria-label="basic tabs example"
                    textColor="secondary"
                    indicatorColor="secondary"
                    sx={{ bgcolor: '#ffffff' }}>
                    <Tab sx={{ fontSize: '16px', fontWeight: '600', minWidth: '100px', ml: '20px', mr: '200px', textTransform: 'capitalize' }} label="Invoice" />
                    <Tab sx={{ minWidth: '100px', mr: '200px', textTransform: 'capitalize', fontSize: '16px', fontWeight: '600' }} label="Vendor Evaluation" />
                    <Tab sx={{ fontSize: '16px', fontWeight: '600', minWidth: '100px', mr: '200px', textTransform: 'capitalize' }} label="Checklist" />
                    <Tab sx={{ minWidth: '100px', mr: '200px', textTransform: 'capitalize', fontSize: '16px', fontWeight: '600' }} label="PO Details" />
                    <Tab sx={{ fontSize: '16px', fontWeight: '600', minWidth: '100px', mr: '100px', textTransform: 'capitalize' }} label="Action History" />
                </Tabs>
                <Accordion sx={{ boxShadow: 'none', bgcolor: '#f3f4f7' }}>
                    <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                        <KeyboardArrowDownIcon />
                        <Typography sx={{ textTransform: 'uppercase', ml: '20px', fontWeight: '600' }}>Invoice details</Typography>
                    </AccordionSummary>
                </Accordion>
                <form>
                    <Card>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <label style={{ fontSize: '18px', fontWeight: '600' }}>Document Type*:</label>
                                <InfoOutlinedIcon sx={{ fontSize: 18, ml: '5px' }} />
                            </Box>
                            <Select
                                sx={{ width: '900px', my: '20px', mx: '30px' }}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name='type'
                                value={this.state.type}
                                onChange={this.handleChange}
                                displayEmpty
                            >
                                <MenuItem value=''>
                                    <em>Select invoice type....</em>
                                </MenuItem>
                                <MenuItem value={'Tax Invoice'}>Tax Invoice</MenuItem>
                                <MenuItem value={'Sales Invoice'}>Sales Invoice</MenuItem>
                            </Select>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <label style={{ fontSize: '18px', fontWeight: '600' }}>Invoive number*:</label>
                                <InfoOutlinedIcon sx={{ fontSize: 18, ml: '5px' }} />
                            </Box>
                            <TextField
                                sx={{ width: '900px', mx: '30px' }}
                                id="outlined-basic"
                                label="Enter invoice number"
                                variant="outlined"
                                name='invoiceNumber'
                                value={this.state.invoiceNumber}
                                onChange={this.handleChange} />
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <label style={{ fontSize: '18px', fontWeight: '600' }}>Invoive Date*:</label>
                                <InfoOutlinedIcon sx={{ fontSize: 18, ml: '5px' }} />
                            </Box>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    label="Select date"
                                    value={this.state.invoiceDate}
                                    onChange={(newValue) => {
                                        this.setState({
                                            invoiceDate: newValue
                                        });
                                    }}
                                    renderInput={(params) => <TextField {...params} sx={{ width: '900px', my: '20px', mx: '30px' }} />}
                                />
                            </LocalizationProvider>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <label style={{ fontSize: '18px', fontWeight: '600' }}>Invoive Receipt Date*:</label>
                                <InfoOutlinedIcon sx={{ fontSize: 18, ml: '5px' }} />
                            </Box>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    label="Select date"
                                    value={this.state.invoiceRecDate}
                                    onChange={(newValue) => {
                                        this.setState({
                                            invoiceRecDate: newValue
                                        });
                                    }}
                                    renderInput={(params) => <TextField {...params} sx={{ width: '900px', mx: '30px' }} />}
                                />
                            </LocalizationProvider>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <label style={{ fontSize: '18px', fontWeight: '600' }}>Baseline Date*:</label>
                                <InfoOutlinedIcon sx={{ fontSize: 18, ml: '5px' }} />
                            </Box>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    label="Select date"
                                    value={this.state.baselineDate}
                                    onChange={(newValue) => {
                                        this.setState({
                                            baselineDate: newValue
                                        });
                                    }}
                                    renderInput={(params) => <TextField {...params} sx={{ width: '900px', my: '20px', mx: '30px' }} />}
                                />
                            </LocalizationProvider>
                        </Box>
                    </Card>
                </form>
                <Accordion sx={{ boxShadow: 'none', bgcolor: '#f3f4f7' }}>
                    <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                        <KeyboardArrowDownIcon />
                        <Typography sx={{ textTransform: 'uppercase', ml: '20px', fontWeight: '600' }}>Vendor details as per order</Typography>
                    </AccordionSummary>
                </Accordion>
                <Card>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <label style={{ fontSize: '18px', fontWeight: '600' }}>Vendor Name</label>
                            <InfoOutlinedIcon sx={{ fontSize: 18, ml: '5px' }} />
                        </Box>
                        <Typography sx={{ mt: '20px', mx: '440px' }}>Air Care Systems Private Limited</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <label style={{ fontSize: '18px', fontWeight: '600' }}>Vendor Code</label>
                            <InfoOutlinedIcon sx={{ fontSize: 18, ml: '5px' }} />
                        </Box>
                        <Typography sx={{ my: '20px', mx: '445px' }}>0085493048</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <label style={{ fontSize: '18px', fontWeight: '600' }}>Vendor GST</label>
                            <InfoOutlinedIcon sx={{ fontSize: 18, ml: '5px' }} />
                        </Box>
                        <Typography sx={{ mb: '20px', mx: '456px' }}>27AAKTCHL1236995</Typography>
                    </Box>
                </Card>
            </Box >
        )
    }
}

export default Form;