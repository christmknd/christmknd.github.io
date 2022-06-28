import React from "react";
import {BottomNavigation, BottomNavigationAction} from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer (){

    const [value, setValue] = React.useState('github');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div
            style={{color: "gray", position: "fixed", bottom: 0}}
        >
            <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
                <BottomNavigationAction
                    label="github"
                    value="github"
                    icon={<GitHubIcon />}
                />
                <BottomNavigationAction
                    label="linkedin"
                    value="linkedin"
                    icon={<LinkedInIcon />}
                />
            </BottomNavigation>
        </div>

    )
}

export default Footer;
