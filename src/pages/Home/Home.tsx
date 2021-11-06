import { AppBar, Typography, Box, Toolbar, Container, Grid, FormControl, InputLabel, MenuItem, Select, Button, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Home: React.FC = () => {
    return (
        <Box>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ backgroundColor: '#1687A7' }}>
                    <Toolbar>
                        <Typography variant="h6" color="#F6F5F5" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }} >
                            デモアプリ
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <Box sx={{ mt: 4 }}>
                <Container maxWidth="lg" sx={{ mx: 7 }}>
                    <Grid container>
                        <Typography variant="h6" color="#1687A7" component="div" gutterBottom sx={{ fontWeight: 'bold' }}>
                            入力説明
                        </Typography>
                    </Grid>
                    <Grid container spacing={5} alignItems="center">
                        <Grid item xs={2}>
                            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                <InputLabel id="input-one" sx={{ color: "#1687A7", fontWeight: 'bold' }}>入力１*</InputLabel>
                                <Select
                                    labelId="input-one"
                                    value="value1"
                                    label="input-one"
                                >
                                    <MenuItem>One</MenuItem>
                                    <MenuItem>Two</MenuItem>
                                    <MenuItem>Three</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={2}>
                            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                <InputLabel id="input-two" sx={{ color: "#1687A7", fontWeight: 'bold' }}>入力２*</InputLabel>
                                <Select
                                    labelId="input-two"
                                    value="value2"
                                    label="input-two"
                                >
                                    <MenuItem>Sub One</MenuItem>
                                    <MenuItem>Sub Two</MenuItem>
                                    <MenuItem>Sub Three</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={2}>
                            <Button variant="outlined" sx={{ color: '#1687A7', borderColor: '#1687A7' }}>
                                UPLOAD FILE
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button variant="contained" sx={{ color: '#F6F5F5', backgroundColor: '#1687A7', borderColor: '#1687A7' }}>
                                SUBMIT
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
                <Container maxWidth="lg" sx={{ m: 5 }}>
                    <Grid container>
                        <Grid item xs={6} spacing={2} sx={{ p: 2 }}>
                            <Grid container sx={{ mb: 2 }}>
                                <Typography color="#1687A7" sx={{ fontWeight: 'bold' }}>
                                    IMAGE PREVIEW
                                </Typography>
                            </Grid>
                            <Grid container>
                                <Box sx={{ width: '100%' }}>
                                    <img
                                        src="test.JPG"
                                        width="100%"
                                        alt="test_image"
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid item xs={6} sx={{ p: 2 }}>
                            <Grid container sx={{ mb: 2 }}>
                                <Typography color="#1687A7" sx={{ fontWeight: 'bold' }}>
                                    PREDICT RESULT
                                </Typography>
                            </Grid>
                            <Grid container sx={{ backgroundColor: '#F6F5F5' }}>
                                {
                                    [...Array(5)].map((_, i) => {
                                        console.log(i)
                                        return (
                                            <Accordion sx={{ width: "100%", backgroundColor: '#fffff' }} key={i}>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls={`pane${i}a-content`}
                                                >
                                                    <Typography sx={{ color: '#1687A7', fontWeight: 'bold' }}>
                                                        {i}
                                                    </Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography>
                                                        result {i}'s' contents
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>
                                        );
                                    })
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box >
    );
}
export default Home;