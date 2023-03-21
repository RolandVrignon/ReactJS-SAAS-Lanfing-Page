import React from 'react';
import CheckIcon from '@mui/icons-material/Check';

const Home = ({ navbarHeight, darkMode }) => {

    return (
        <div className={`section home ${darkMode ? 'dark-mode' : 'light-mode'}`} style={{ height: `calc(100vh - ${navbarHeight}px)` }}>
            <div className="home-left">
                <div className={`title ${darkMode ? 'dark-mode' : 'light-mode'}`}>
                    <h1>The modern landing page for React developers</h1>
                </div>
                <div className={`text ${darkMode ? 'dark-mode' : 'light-mode'}`}>
                    <p>The easiest way to build React Landing page in seconds. Save time and focus on your project.</p>
                </div>
                <div className="form">

                </div>
                <div className="usp">
                    <ul>
                        <li>
                            <CheckIcon/>
                            <p className={`${darkMode ? 'dark-mode' : 'light-mode'}`}>No credit card required.</p>
                        </li>
                        <li>
                            <CheckIcon/>
                            <p className={`${darkMode ? 'dark-mode' : 'light-mode'}`}>14-day free trial.</p>
                        </li>
                        <li>
                            <CheckIcon/>
                            <p className={`${darkMode ? 'dark-mode' : 'light-mode'}`}>Cancel anytime.</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="home-right">
            </div>
        </div>
    );
};

export default Home;