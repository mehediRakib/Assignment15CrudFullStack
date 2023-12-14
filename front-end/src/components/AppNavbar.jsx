import React from 'react';

const AppNavbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
                <div className="container-fluid">
                    <a className="navbar-brand">My App</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="/">ShowList</a>
                            <a className="nav-link" href="/save">SaveForm</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default AppNavbar;