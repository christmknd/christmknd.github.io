import React from "react";
import {BottomNavigation, BottomNavigationAction} from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer (){
    return (
            <BottomNavigation
                showLabels
            >
                <BottomNavigationAction label="Linkedin" icon={<LinkedInIcon />} />
                <BottomNavigationAction label="Github" icon={<GitHubIcon />} />
            </BottomNavigation>
    )
}

export default Footer;
