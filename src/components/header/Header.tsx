import { Helmet } from 'react-helmet'
import './Header.css'

function Header() {
    return (
        <div>
            <Helmet>
                <title>Home | UEF</title>
            </Helmet>
            <div className="header">
                <div className="title">
                    <a
                        href="https://www.uef.fi/en/unit/school-of-computing"
                        style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                        <span>// School of Computing</span>
                    </a>
                </div>
                <div className="title" />
                <img
                    src="/web-interface/icon/uef_logo.png"
                    alt="Logo"
                    className="logo"
                />
                <div className="support">
                    <img
                        src="/web-interface/icon/email.png"
                        alt="Support Icon"
                    />
                    <a
                        href="mailto:servicedesk@uef.fi"
                        style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                        <span>Support</span>
                    </a>
                </div>
            </div>

            <div className="welcome">
                <h1>Welcome Mr. Md. Sajib Pramanic !</h1>
            </div>
        </div>
    )
}

export default Header
