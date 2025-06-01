import React from "react";
import AuthLayout from "../../components/layouts/AuthLayout";
const Login = () => {
    return (
        <AuthLayout>
            <div className="lg:w-[78%] h-3/4 md:h-full flex flex-col items-start">
                <h3 className="text-xl font-semibold text-black">Welcome Back</h3>
                <p className="text-xs text-slate-700 mt-[5px] mb-6">
                    Please enter your credentials to login
                </p>
            </div>   
        </AuthLayout>
    )
}
export default Login
