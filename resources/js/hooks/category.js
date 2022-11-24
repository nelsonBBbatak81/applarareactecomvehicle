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
}
