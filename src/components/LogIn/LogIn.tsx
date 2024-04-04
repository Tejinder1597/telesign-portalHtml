import React from "react";
import './LogIn.css';
import { Card, Button, TextInput } from "flowbite-react";

const LogIn: React.FC = () => {
    return (
        <div>
            <h1 className="heading">Welcome to the Telesign partner portal</h1>
            <div>
                <h2 className="subHead">Sign in to your account</h2>
            </div>
            <div className="cardBody">
                <Card className="max-w-sm card">
                    <div>
                        <div className="flex justify-start">
                            <h5 className="font-bold tracking-tight text-gray-900 dark:text-white">
                                Enter login/user ID
                            </h5>
                        </div>
                        <div className="grid grid-flow-col justify-stretch space-x-4">
                            <TextInput type="password" name="email" sizing="sm" className="inputs" />
                        </div>
                    </div>
                    <div className="pt-5">
                        <div className="flex justify-start">
                            <h5 className="font-bold tracking-tight text-gray-900 dark:text-white">
                                Enter password
                            </h5>
                        </div>
                        <div className="grid justify-stretch">
                            <TextInput type="password" name="enterpassword" sizing="sm" className="inputs"
                            helperText={
                                <>
                                  <a href="#" className="ml-1 font-medium underline signinLink">
                                    Forgot your password?
                                  </a>
                                </>
                              }
                            />
                        </div>
                    </div>
                    <div className="flex pt-6  flex-wrap gap-2">
                        <Button  className="w-96 buttonCreate">Sign in</Button>
                    </div>
                </Card>
            </div>
            <div className="text-center pt-5">
                <p>Don have an account? <a className="signinLink" href=""><u>Sign up</u></a></p>
            </div>
        </div>
    )
}

export default LogIn