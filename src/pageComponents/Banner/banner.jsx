import { Box, Button, Container } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import LinksPage from "./links";
export default function Banner() {
  return (

    <div className="banner-bg ">

        <Box sx={{ transform: "rotate(-90deg)", position:"absolute", left:"-100px", bottom:"450px"}}>
            <LinksPage/>
        </Box>
      <Container maxWidth="lg">
        <Box>
          <Box mb={2}>
            <h5 className="text-white">Duis aute irue dolor in reputa</h5>
          </Box>
          <div className="text-25">
            <p>
              Threads of <span className="color-yellow">Quality ,</span>
            </p>
            <p>Woven with Pride</p>
          </div>
          <Box mt={2}>
            <h5 className="text-white"> dunt aute ireuw reputa</h5>
          </Box>
          <Box mt={2} className="animate__animated animate__fadeInUp">
            <Button
              sx={{ borderRadius: 2, fontSize: "12px", background: "#F33A6A" }}
              variant="contained"
              endIcon={<AddCircleIcon />}
            >
              Know More
            </Button>
          </Box>
        </Box>
      </Container>
      </div>
  );
}
