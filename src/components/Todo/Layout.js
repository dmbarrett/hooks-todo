import { AppBar, Paper, Toolbar, Typography } from '@material-ui/core'
import React, { memo } from 'react'

const Layout = memo(props => (
    <Paper elevation={0} style={{ padding:0, margin:0, backgroundColor:'#fafafa' }}>
        <AppBar color="primary" position="static" style={{ height:64 }}>
            <Toolbar style={{ height:64 }}>
                <Typography variant="h5" color="inherit">
                    Simple React app using Hooks!
                </Typography>
            </Toolbar>
        </AppBar>
        {props.children}
    </Paper>
))

export default Layout