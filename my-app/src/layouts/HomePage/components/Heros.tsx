import { useOktaAuth } from "@okta/okta-react"
import { Link } from "react-router-dom";

export const Heros = () => {
    const { authState } = useOktaAuth();
    return (
        <div>
            <div className="d-none d-lg-block">
                <div className="row g-0 mt-5">
                    <div className="col-sm-6 col-md-6">

                        <div className="col-image-left">

                        </div>
                    </div>
                    <div className="col-4 col-md-4 d-flex justity-content align-items-center">
                        <div className="ml-2">
                            <h1>What have you been reading ?</h1>
                            <p className="lead">The Library team would love to know what you have been reading.
                                whether it is to learn a new skill or grow within one,
                                we will be able to provice the top content for you!</p>
                            {authState?.isAuthenticated ?
                                <Link type="button" className="btn main-color btn-lg text-white" to="search">Explore top books

                                </Link> :
                                <Link className="btn main-color btn-lg text-white" to='#' >Sign Up</Link>
                            }
                        </div>
                    </div>
                    <div className="row g-0">
                        <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
                            <div className="ml-2">
                                <h1>Our collection Is always changing!</h1>
                                <p className="lead">Try to check in daily as our collection is always changing!
                                    we work nonstop to provide the most accurate book selection possible for our Luv 2 Read student!we are deligent about our book
                                    selection and our book selection our books are always going to be our top priority.</p>
                                {authState?.isAuthenticated ?
                                    <Link type='button' className='btn main-color btn-lg text-white' to='search'>Explore top book</Link> :
                                    <Link className='btn main-color btn-lg text-white' to='#'>Sign Up</Link>}
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6">
                            <div className="col-image-right">

                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/**Mobile */}
            <div className="d-lg-none">
                <div className="container">
                    <div className="m-2">
                        <div className="col-image-left">
                            <div className="mt-2">
                                <h1>What have you been reading ?</h1>
                                <p className="lead">The Library team would love to know what you have been reading.
                                    whether it is to learn a new skill or grow within one,
                                    we will be able to provice the top content for you!</p>
                                <a className="btn main-color btn-lg text-white" href="#">Sign Up</a>
                            </div>
                        </div>
                    </div>
                    <div className="m-2">
                        <div className="col-image-right">
                            <div className="mt-2">
                                <h1>Our collection Is always changing!</h1>
                                <p className="lead">Try to check in daily as our collection is always changing!
                                    we work nonstop to provide the most accurate book selection possible for our Luv 2 Read student!we are deligent about our book
                                    selection and our book selection our books are always going to be our top priority.</p>
                                {authState?.isAuthenticated ?
                                    <Link type='button' className='btn main-color btn-lg text-white' to='search'>Explore top books</Link> :
                                    <Link className='btn main-color btn-lg text-white' to='/login'>Sign up</Link>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}