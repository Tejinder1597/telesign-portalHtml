import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './SignUp.css';
import { Card, Button, TextInput } from "flowbite-react";

const SignUp: React.FC = () => {
    const [show, setShow] = useState<boolean>(true)

    const clickNext = () => {
        setShow(false);
    }
    return (
        <div>
            <h1 className="heading">Welcome to the Telesign partner portal</h1>
            <div>
                <h2 className="subHead">Create your Telesign Partner account</h2>
            </div>
            <div className="cardBody">
                <Card className="max-w-sm card">
                    {show && (
                        <div className="emailCard">
                            <h5 className="font-bold tracking-tight text-gray-900 dark:text-white">
                                Enter login/user ID
                            </h5>
                            <div className="grid grid-flow-col justify-stretch space-x-4">
                                <TextInput  name="email" sizing="sm" className="inputs" />
                            </div>
                            <div className="flex justify-end flex-wrap gap-2">
                                <Button onClick={clickNext} className="buttonNext">Next</Button>
                            </div>
                        </div>
                    )}
                    {!show && (
                        <div className="passwordCard">
                            <div>
                                <div className="flex justify-start">
                                    <h5 className="font-bold tracking-tight text-gray-900 dark:text-white">
                                        Enter password
                                    </h5>

                                </div>
                                <div className="grid grid-flow-col justify-stretch space-x-4">
                                    <TextInput type="password" name="enterpassword" sizing="sm" className="inputs" />
                                </div>
                            </div>
                            <div className="pt-3">
                                <div className="flex justify-start">
                                    <h5 className="font-bold tracking-tight text-gray-900 dark:text-white">
                                        Confirm password
                                    </h5>

                                </div>
                                <div className="grid  max-w-md justify-stretch">
                                    <TextInput type="password" name="confirmpassword" sizing="sm" className="inputs"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-center pt-3 pl-3">
                                <ul className="list-disc passHint">
                                    <li>Must contain at least 8 characters</li>
                                    <li>Must contain at least 1 uppercase character</li>
                                    <li>Must contain at least 1 lowercase character</li>
                                    <li>Must contain at least 1 numerical character</li>
                                    <li>Must contain at least 1 special character (!@#$%^&*)</li>
                                </ul>
                            </div>
                            <div className="flex pt-6 justify-end flex-wrap gap-2">
                                <Button  className="buttonCreate">Create account</Button>
                            </div>
                        </div>
                    )}
                </Card>
            </div>
            <div className="text-center pt-5">
                <p>Already have an account? <a className="signinLink" href=""><u>Sign in</u></a></p>
            </div>
        </div>
    )
}

export default SignUp