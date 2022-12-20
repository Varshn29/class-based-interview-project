import { AppBar, Avatar, Box, Container, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import React from "react";
import TotalItems from "../TotalItems/TotalItems";
import SalesChart from "../Sales/SalesChart";
import { BarChartData } from "../Sales/BarChart";

const Dashboard = () => {
    const drawerWidth = 240;

    return (
        <Container>
            <Box sx={{ display: 'flex' }}>
                <AppBar
                    position="fixed"
                    sx={{ bgcolor: '#ffffff', width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
                >
                    <Toolbar sx={{ color: 'black', display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="h6">
                            Dashboard
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                            <NotificationsNoneIcon />
                            <Avatar
                                alt="Remy Sharp" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d29tZW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
                            <Typography>Sarah</Typography>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                            backgroundColor: '#551a8b',
                        },
                    }}
                    variant="permanent"
                    anchor="left"
                    position="fixed"
                >
                    <Toolbar sx={{ bgcolor: '#551a8b' }}>
                    </Toolbar>

                    <List sx={{ color: '#ffffff', bgcolor: '#551a8b' }}>
                        {['Dashboard', 'Tasks list', 'User management', 'Role management', 'Search'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon sx={{ color: '#ffffff' }}>
                                        {index % 5 === 0 ? <DashboardIcon /> : index % 5 === 1 ? <FormatListBulletedIcon /> : index % 5 === 2 ? <ManageAccountsIcon /> : index % 5 === 3 ? <ManageHistoryIcon /> : <SearchIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>

                    <List sx={{ color: '#ffffff', bgcolor: '#551a8b', marginTop: '230px' }}>
                        {['Help', 'Settings'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon sx={{ color: '#ffffff' }}>
                                        {index % 2 === 0 ? <HelpOutlineIcon /> : <SettingsIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider sx={{ bgcolor: '#ffffff' }} />
                    <MenuOpenIcon sx={{ color: '#ffffff', fontSize: '35px', p: '15px' }} />
                </Drawer>
            </Box>
            <TotalItems />
            <SalesChart />
        </Container>
    )
}

export default Dashboard;