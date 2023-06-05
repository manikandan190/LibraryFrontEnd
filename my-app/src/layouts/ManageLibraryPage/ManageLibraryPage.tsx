import { useOktaAuth } from "@okta/okta-react";
import { useState } from "react";
import { Redirect } from "react-router";
import { AdminMessage } from "./components/AdminMessage";
import { AdminMessages } from "./components/AdminMessages";
import { AddNewBook } from "./components/AddNewBook";
import { ChangeQuantityOfBooks } from "./components/ChangeQuantityOfBooks";
import { ChangeQuantityOfBook } from "./components/ChangeQuantityOfBook";

export const ManageLibraryPage = () => {
    const { authState } = useOktaAuth();
    const [changeQuantityOfBooksClick, setChangeQuantityOfBooksClick] = useState(false);
    const [messagesClick, setMessagesClick] = useState(false);
    function addBookClickFunction() {
        setChangeQuantityOfBooksClick(false);
        setMessagesClick(false);
    }

    function changeQuantityOfBooksClickFunction() {
        setChangeQuantityOfBooksClick(true);
        setMessagesClick(false);
    }
    function messagesClickFunction() {
        setChangeQuantityOfBooksClick(false);
        setMessagesClick(true);
    }
    if (authState?.accessToken?.claims.userType === undefined) {
        return <Redirect to='/home' />
    }
    console.log(messagesClick);
    return (
        <div className="container">
            <div className="mt-5">
                <h3>Manager Library</h3>
                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button onClick={addBookClickFunction} className="nav-link active" id="nav-add-book-tab" data-bs-toggle='tab' data-bs-target="#nav-add-book" type="button" role="tab" aria-controls="nav-add-book" aria-selected='false'>
                            Add new book</button>
                        <button onClick={changeQuantityOfBooksClickFunction} className="nav-link" id='nav-quantity-tab' data-bs-toggle='tab' data-bs-target='#nav-quantity' type="button" role="tab" aria-controls="nav-quantiy" aria-selected='true'>
                            Change quantity
                        </button>
                        <button onClick={messagesClickFunction} className="nav-link" id="nav-messages-tab" data-bs-toggle='tab' data-bs-target='#nav-message' type="button" role="tab" aria-controls="nav-messages" aria-selected='false'>
                            Message
                        </button>
                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-add-book" role="tabpanel" aria-labelledby="nav-add-book-tab">
                        <AddNewBook />
                    </div>
                    <div className="tab-pane fade" id="nav-quantity" role="tabpanal" aria-labelledby="nav-quantity-tab">
                        {changeQuantityOfBooksClick ? <ChangeQuantityOfBooks /> : <></>}
                    </div>
                    <div className="tab-pane fade" id="nav-message" role="tabpanel" aria-labelledby='nav-messages-tab'>
                        {messagesClick ? <AdminMessages /> : <></>}
                    </div>
                </div>
            </div>
        </div>
    )
}