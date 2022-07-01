import React from "react";
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


function About() {
    return (
        <div className="about">
            <h1>A propos de moi</h1>
            <Container style={{marginBottom: "25px"}}>
                <Box>
                    <Card variant={"outlined"}>
                        <CardContent>
                            <Typography variant={"h5"}>
                                Parcours Scolaire
                            </Typography>
                            <Typography color="text.secondary">
                                Master Ingenierie du Web - ESGI
                            </Typography>
                            <Typography sx={{ fontSize: 14 }}
                                        style={{marginBottom : "10px"}}>
                                Janvier 2021 - Présent
                            </Typography>
                            <Typography color="text.secondary">
                                Licence informatique - Université Paris VIII
                            </Typography>
                            <Typography sx={{ fontSize: 14 }}
                                        style={{marginBottom : "10px"}}>
                                2015 - 2019
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Container>

            <Container style={{marginBottom: "25px"}} >
                <Box>
                    <Card variant={"outlined"}>
                        <CardContent>
                            <Typography variant={"h5"}>
                                Experience Professionelle
                            </Typography>
                            <Typography color="text.secondary">
                                Swisslife France

                            </Typography>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Janvier 2021 - Présent
                            </Typography>
                            <Typography variant="body2"
                                        style={{marginBottom : "30px"}}>
                                Outils des ingénieries (travaux sur des projets internes à la DSI)
                            </Typography>
                            <Typography color="text.secondary">
                                Vitriweb
                            </Typography>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Avril 2019 - Mai 2019
                            </Typography>
                            <Typography variant="body2"
                                        style={{marginBottom : "10px"}}>
                                <p>
                                    Développement de maquettes de site en pré-production <br/>
                                    Déploiement de maquettes après validation des clients <br/>
                                    Reprise de site de clients et refonte <br/>
                                    Mise à jour des maquettes et site à effectuer <br/>
                                </p>
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Container>
        </div>
    )
}

export default About;
