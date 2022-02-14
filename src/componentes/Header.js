import { AppBar, Toolbar, Avatar, makeStyles, InputBase, Typography, IconButton, Drawer, List, ListItem } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import logo from "../imagenes/logo.png";
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

const Header = () => {
    const [tablet, setTablet] = useState(true);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const classes = useStyle();
    const listaMenu = ["mi cuenta", "reservas anteriores", "Cerrar sesión","búsqueda"];

    useEffect(()=> {
        const responsiva = () => window.innerWidth < 900 ? setTablet(true): setTablet(false)
        responsiva();
        window.addEventListener("resize", ()=>responsiva())
    }, [])
    const displayTablet = () => {
        const drawerOpenF = ()=>{
            setDrawerOpen(true)
        }
        const drawerClose = ()=>{
            setDrawerOpen(false)
        }

        const getDrawerChoices = ()=>{
            return listaMenu.map((data)=>{
                return<List>
                    <ListItem>
                   {data}
                    </ListItem>
                </List>
            })
        }
        

        return (
            <Toolbar className={classes.toolbar}>
                <IconButton {...{edge: "start", 
                color:  "#ccc", 
                "aria-label": "menu",
                "aria-haspopup": "true",
                onClick: drawerOpenF,
                }}>
                    <MenuIcon fontSize='large'/>
                </IconButton>
                <Drawer {...{
                    anchor: "left",
                    open: drawerOpen,
                    onClose: drawerClose,
                }}>
                    <div>{getDrawerChoices()}</div>
                </Drawer>
                <Link to="/">
                <img src={logo} className={classes.logo} />
                </Link>
                <div className={classes.right}>
                    <Typography>Iniciar session</Typography>
                    <Avatar className={classes.avatar}></Avatar>
                </div>
            </Toolbar>
        )
    }
    const displayDesktop = () => {
        return (
            <Toolbar className={classes.toolbar}>
                <Link to="/">
                <img src={logo} className={classes.logo} />
                </Link>
                <div className={classes.center}>
                    <InputBase fullWidth placeholder='search here...' inputProps={{ className: classes.input }} />
                    <SearchIcon />
                </div>
                <div className={classes.right}>
                    <Typography>Iniciar session</Typography>
                    <Avatar className={classes.avatar}></Avatar>
                </div>
            </Toolbar>)
    }

    return (
        <AppBar className={classes.root}>
            {
                tablet ? displayTablet() : displayDesktop()
            }
        </AppBar>
    )
}
const useStyle = makeStyles((theme) => ({
    root: {
        position: "sticky",
        top: 0,
        backgroundColor: "#fff",
        zIndex: 99,
        width: "100vw",
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    logo: {
        height: "30px",
        margin: theme.spacing(1, 0, 0, 2),
        objectFit: "contain"
    },

    center: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(1),
        margin: theme.spacing(1),
        border: "1px solid lightgray",
        borderRadius: "999px",
        minWidth: "300px",
    },
    input: {
        fontSize: "1.2rem",
        padding: theme.spacing(1, 5, 1, 5)
    },
    right: {
        display: "flex",
        color: "#333",
        alignItems: "center",
        marginLeft: theme.spacing(2)
    },
    avatar: {
        marginLeft: theme.spacing(2),
    }
}))
export default Header