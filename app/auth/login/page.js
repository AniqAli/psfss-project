import Link from "next/link";

export default function Login() {
    return(
        <div className="flex w-full">
            <div className="border content w-full">
                <h2 className="font-semibold xl:text-7xl">Welcome Back</h2>
                <p className="xl:text-[2.6rem]">Log in to access your dashboard and continue where you left off.</p>
            </div>
            <div className="border form w-full">
                <div className="formWrap border rounded-2xl">
                    <div className="upperRow border-b-1">
                        <p>Don't have an account? <Link href={"#"}>Sign Up</Link></p>
                    </div>
                    <div className="emailRow">
                        <input type="text" placeholder="Username Or Email"/>
                    </div>
                    <div className="passwordRow">
                        <input type="password" placeholder="Username Or Email"/>
                    </div>
                    <div className="buttonRow">
                        <span></span>
                        <span>Login</span>
                        <span><Link href={'#'}>Forget Password?</Link></span>
                    </div>
                </div>
            </div>
        </div>
    );
}