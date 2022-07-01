import React from "react";
import Data from "../data.json"
import Box from '@mui/material/Box'
import Container from '@mui/material/Container';
import Typography from "@mui/material/Typography";
import Card from '@mui/material/Card';
import CardContent from "@mui/material/CardContent";
import Link from '@material-ui/core/Link';



function Portfolio () {
    return (
        <div className="portfolio">
            <h1>Portfolio</h1>
            <Container>
                <Box>
                    {Data.map((data) => {
                        return (
                            <Card style={{marginBottom:"25px"}}>
                            <Typography variant={"h5"}>
                                {data.titre}
                            </Typography>
                            <Typography>
                                {data.langage}
                            </Typography>
                                <Typography sx={{ fontSize: 14 }}>
                                    {data.technos}
                                </Typography>
                            <CardContent>
                                {data.description}
                            </CardContent>
                            <Typography>
                                <Link href={data.lien_git} underline="none" target={"_blank"}> Lien github </Link>
                            </Typography>
                            </Card>
                        )
                    })}
                </Box>
            </Container>
        </div>
    )
}

export default Portfolio;
