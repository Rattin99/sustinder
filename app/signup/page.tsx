"use client";

import { useState } from "react";
import UserDetails from "@/components/UserDetails";


const signup = () => {

    const [formData,setFormData] = useState({
        username: '',
        department: '',
        session: '',
        sex: '',
        email: '',
        password: '',
        confirm: '',
    })

    const [errors,setErrors] = useState(null);
    const [done,setDone] = useState(false);

    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (e:any) => {
        e.preventDefault();
    }

    function validateEmail(email:any) {
        // Define the regex pattern for the email validation
        const pattern = /^[A-Za-z0-9._%+-]+@student\.sust\.edu$/;
      
        // Test the email against the pattern
        return pattern.test(email);
    }

    const doneHandler = (e:any) => {
        if(formData.password !== formData.confirm) {
            setErrors("password doesn't match");
        }
        else if(formData.email ==='' || formData.username ==='' || formData.password === '' || formData.confirm === '' ){
            setErrors("complete the form")
        }
        else if(!validateEmail(formData.email) ){
            console.log(formData.email)
            setErrors("email must be @student.sust.edu")
        }
        else if(errors !== ""){
            setDone(true);
        }
    }

    return (
        <div className="w-screen h-screen p-5 flex flex-col items-center justify-center">
            {
                !done && (
                    <div className="max-w-lg p-10 border rounded-md">
                    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>

                        <div className="">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="username">Username:</label>
                                <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" id="username" name="username" value={formData.username} onChange={handleChange} required /><br />
                        </div>

                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="email">Email:</label>
                        <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="email" id="email" name="email" value={formData.email} placeholder="*must be @student.sust.edu " onChange={handleChange} required /><br />

                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password:</label>
                        <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="Password" type="password" name="password" onChange={handleChange} value={formData.password}></input>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password:</label>
                        <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="confirm" type="password" name="confirm" onChange={handleChange} value={formData.confirm}></input>

                        {
                            errors && <h2>{errors}</h2>
                        }
                      <div className="w-full flex items-center justify-center">
                        <input onClick={doneHandler} className=" px-4 py-3 bg-blue-600 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform mx-5 flex" type="button" value="Done"/>
                      </div>
            </form>
       </div>
                )
            }

            {
                done && <UserDetails formData={formData} handleChange={handleChange} handleSubmit={handleSubmit}/>
            }
        </div>
    )
}

export default signup;