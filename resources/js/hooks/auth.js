import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setUser, removeUser, setAuth, removeAuth } from "../store/userReducer";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

export default function useAuth() {
    let navigate = useNavigate();
    const [isLoading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    //   const loadUser = (token) => {
    //     console.log(token);
    //     axios
    //       .get(`${baseUrl}/api/v1/users/`, {
    //         headers: {
    //           'Content-Type': 'application/json',
    //           Authorization: `Token ${token}`,
    //         },
    //       })
    //       .then((res) => {
    //         console.log(res.data);
    //         localStorage.setItem('user', JSON.stringify(res.data[0]));
    //         dispatch(setUser(res.data[0]));
    //       })
    //       .catch((err) => {
    //         console.log('hai');
    //         console.log(err.response);
    //       });
    //   };

    const login = async ({ ...props }) => {
        closeSnackbar();
        setLoading(true);
        console.log(props);
        await axios
            .post("/api/login", props, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((res) => {
                localStorage.setItem("token", res.data.data.token);
                localStorage.setItem(
                    "user",
                    JSON.stringify(res.data.data.user)
                );
                dispatch(setAuth(true));
                dispatch(setUser(res.data.data.user));
                setLoading(false);
                console.log(res);
                enqueueSnackbar("Login successfully!", { variant: "success" });
                navigate("/admin/home");
            })
            .catch((err) => {
                setLoading(false);
                console.log("hello");
                console.log(err);
                // if (err.response.status == 500) throw alert('Connection server fail!');
                // if (error.response.status != 422) throw error;
                // setErrors(Object.values(err.response.data.non_field_errors).flat());
                enqueueSnackbar(
                    "Sorry you log in failure, your email or password does not exist in database!",
                    {
                        variant: "err",
                    }
                );
            });
    };

    const register = async ({ ...props }) => {
        // closeSnackbar();
        setLoading(true);
        console.log(props);
        await axios
            .post("/api/register", props, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((res) => {
                setLoading(false);
                console.log(res);
                // navigate('/login');
                // enqueueSnackbar('You have been successfully register, please log in!', {
                //   variant: 'success',
                // });
            })
            .catch((err) => {
                setLoading(false);
                console.log(err);
                if (err.response.status == 500)
                    throw alert(err.response.data.message);
                // if (error.response.status != 422) throw error;
                setErrors(Object.values(err.response.data.data).flat());
                // enqueueSnackbar('Sorry you register failure!', { variant: 'err' });
            });
    };

    const signOut = async () => {
        closeSnackbar();
        setLoading(true);
        axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
            "token"
        )}`;
        axios.defaults.headers.common.Accept = "application/json";
        await axios
            .post("/api/logout")
            .then((res) => {
                setLoading(false);
                console.log(res);
                localStorage.removeItem("user");
                localStorage.removeItem("token");
                dispatch(removeUser());
                dispatch(removeAuth());
                enqueueSnackbar("You have been successfully logout!", {
                    variant: "success",
                });
                navigate("/login");
            })
            .catch((err) => {
                setLoading(false);
                console.log(err);
                enqueueSnackbar("Sorry you logout failure!", {
                    variant: "err",
                });
            });
    };

    return {
        isLoading,
        login,
        register,
        signOut,
    };
}
