import React, { useState } from "react";
import { Input, Label, Button, Errors, Spinner } from "../components";
import GuestLayout from "../layouts/GuestLayout";
import useAuth from "../hooks/auth";

export default function Register() {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [c_password, setConfirmPassword] = useState(null);
    const [errors, setErrors] = useState([]);
    const { register, isLoading } = useAuth();

    const onSubmit = (event) => {
        event.preventDefault();
        register({ name, email, password, c_password, setErrors });

        console.log(errors);
    };

    return (
        <GuestLayout>
            {isLoading && <Spinner />}
            <div className="max-w-md mx-auto py-10">
                <h1 className="text-xl font-bold text-center mb-5">
                    Please Sign Up
                </h1>
                <Errors className="mb-5" errors={errors} />
                <form onSubmit={onSubmit}>
                    <div className="mb-3 flex flex-col">
                        <Label value="Name" />
                        <Input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Please fill your name .."
                        />
                    </div>
                    <div className="mb-3 flex flex-col">
                        <Label value="Email" />
                        <Input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Please fill your email .."
                        />
                    </div>
                    <div className="mb-3 flex flex-col">
                        <Label value="Password" />
                        <Input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Please fill your password .."
                        />
                    </div>
                    <div className="mb-3 flex flex-col">
                        <Label value="Password Confirmation" />
                        <Input
                            type="password"
                            value={c_password}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Please fill your password again .."
                        />
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
