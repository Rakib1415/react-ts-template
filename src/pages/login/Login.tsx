import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import './Login.css'

function Login() {
    return (
        <div>
            <Helmet>
                <title>Login | UEF</title>
            </Helmet>
            <div className="login-container">
                <div className="login-box">
                    <Link to="/header">
                        <button type="button" className="haka-login">
                            Haka Login
                        </button>
                    </Link>
                    <Link to="/header">
                        <button type="button" className="microsoft-login">
                            <img
                                src="/web-interface/icon/microsoft.png"
                                alt="Microsoft Logo"
                            />
                            Sign in with Microsoft
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login
