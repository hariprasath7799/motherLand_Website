import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Logo from "../../assets/images/logo.jpeg"
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import PaidIcon from '@mui/icons-material/Paid';
import Navbar from './navbar';

export default function Header() {
  return (
    <div className='animate__animated animate__fadeInDown'>
        <Container maxWidth="lg">
            <Box display={"flex"} justifyContent={"space-between"}>
                <img src={Logo} alt='logo' width={"6%"} height={"6%"}/>
                <Box  display={"flex"} alignItems={"center"} flexDirection={"row"} gap={5}>
                    <Stack direction={"row"} spacing={2} alignItems={"center"}>
                        <CheckBoxIcon sx={{color:""}}/>
                        <div className='text-12'>
                        <p>ISO 9001</p>
                        <p>Certification Company</p>
                        </div>
                    </Stack>
                    <Stack direction={"row"} spacing={2} alignItems={"center"}>
                        <PaidIcon/>
                        <div className='text-12'>
                        <p>Qualified</p>
                        <p>Expert Professional</p>
                        </div>
                    </Stack>
                </Box>
            </Box>
            <div>
                <Navbar/>
            </div>
        </Container>
           
    </div>
  )
}
