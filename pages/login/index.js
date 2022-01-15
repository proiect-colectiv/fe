import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { useDispatch, useSelector } from "react-redux";

import { login as loginApi } from "../../redux/actions/postLogin";

const theme = createTheme();

const login = () => {
    const router = useRouter();

    const dispatch = useDispatch();

    const token = useSelector(state => state.postLoginReducer.token);

    const handleLogin = (username, password) => {
        dispatch(loginApi(username, password));
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const username = data.get('username');
        const password = data.get('password');

        handleLogin(username, password);

        router.push('/home');
    };

    const renderTitle = () => {
        return (
            <>
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
            </>
        );
    }

    const renderInputs = () => {
        return (
            <>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="username"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
            </>
        )
    }

    const renderSubmitButton = () => {
        return (
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Sign In
            </Button>
        )
    }

    const renderInstructions = () => {
        return (
            <Grid container>
                <Grid item>
                    <Link href="/register" variant="body2">
                        {"Don't have an account? Sign Up"}
                    </Link>
                </Grid>
            </Grid>
        )
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    {renderTitle()}
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        {renderInputs()}
                        {renderSubmitButton()}
                        {renderInstructions()}
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default login;
