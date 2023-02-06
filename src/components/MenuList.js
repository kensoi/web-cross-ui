import TextFieldsIcon from '@mui/icons-material/TextFields';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import AddBoxIcon from '@mui/icons-material/AddBox';
import TuneIcon from '@mui/icons-material/Tune';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import GridViewIcon from '@mui/icons-material/GridView';
import LogoDevIcon from '@mui/icons-material/LogoDev';

const MenuList = [
    {  
        "icon": <HelpOutlineIcon/>,
        "title": "Как работать",
        "action": () => {window.location.pathname = "/get-started/"},
    },
    {
        "icon": <GridViewIcon/>,
        "title": "Компоненты",
        "action": () => {window.location.pathname = "/components/"},
        "x-dropdown": [
            {  
                "icon": <AddBoxIcon />,
                "title": "XButton",
                "action": () => {window.location.pathname = "/components/xbutton"},
            },
            {  
                "icon": <ArrowDropDownCircleIcon />,
                "title": "XDropdown",
                "action": () => {window.location.pathname = "/components/xdropdown"},
            },
            {  
                "icon": <TextFieldsIcon />,
                "title": "XField",
                "action": () => {window.location.pathname = "/components/xfield"},
            },
            {  
                "icon": <TuneIcon />,
                "title": "XSlider",
                "action": () => {window.location.pathname = "/components/xslider"},
            },
            {  
                "icon": <ToggleOnIcon />,
                "title": "XTumble",
                "action": () => {window.location.pathname = "/components/xtumble"},
            },
        ]
    },
    {
        "icon": <LogoDevIcon />,
        "title": "Github",
        "action": () => {window.location.href = "https://github.com/kensoi/"},
    },
]

export default MenuList;