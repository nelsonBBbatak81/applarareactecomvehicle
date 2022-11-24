import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Label, Button, Spinner } from "../components";
import GuestLayout from "../layouts/GuestLayout";
import useAuth from "../hooks/auth";

export default function Login() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const { login, isLoading } = useAuth();

    const onSubmit = (data) => {
        // event.preventDefault();
        let email = data.email;
        let password = data.password;
        login({ email, password });
        console.log(data);
    };

    return (
        <GuestLayout>
            {isLoading && <Spinner />}
            <div className="max-w-md mx-auto py-10">
                <h1 className="text-xl font-bold text-center mb-5">
                    Please Sign In
                </h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3 flex flex-col">
                        <Label value="Email" />
                        <input
                            className="text-md px-2 py-2 border border-solid border-slate-200 rounded-md shadow-md hover:border-slate-500 focus:border-slate-500"
                            placeholder="Please fill your email .."
                            {...register("email", { required: true })}
                        />
                        {errors.email ? (
                            <span>
                                {errors.email.type == "required"
                                    ? "Field email is required!"
                                    : ""}
                            </span>
                        ) : (
                            ""
                        )}
                    </div>
                    <div className="mb-3 flex flex-col">
                        <Label value="Password" />
                        <input
                            className="text-md px-2 py-2 border border-solid border-slate-200 rounded-md shadow-md hover:border-slate-500 focus:border-slate-500"
                            placeholder="Please fill your password .."
                            {...register("password", {
                                required: true,
                                minLength: 3,
                            })}
                        />
                        {errors.password && (
                            <span className="text-red-400">
                                {errors.password.type == "required"
                                    ? "Field password is require!"
                                    : ""}
                                {errors.password.type == "minLength"
                                    ? "Character password must be more than 3 character!"
                                    : ""}
                            </span>
                        )}
                    </div>
                    <Button
                        type="submit"
                        classess="w-full bg-blue-600 hover:bg-blue-800"
                    >
                        Submit
                    </Button>
                </form>
            </div>
        </GuestLayout>
    );
}
