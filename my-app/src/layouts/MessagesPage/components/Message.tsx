import { useOktaAuth } from "@okta/okta-react"
import { useEffect, useState } from "react";
import MessageModel from '../../../models/MessageModel';
import { error } from "console";
import { SpinnerLoading } from "../../../Utils/SpinnerLoading";
import { Pagination } from "../../../Utils/Pagination";

export const Message = () => {
    const { authState } = useOktaAuth();
    const [isLoadingMessages, setIsLoadingMessages] = useState(true);
    const [httpError, setHttpError] = useState(null);
    //Message
    const [messages, setMessages] = useState<MessageModel[]>([]);
    const [messagesPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);


    useEffect(() => {
        const fetchUserMsessages = async () => {
            if (authState && authState?.isAuthenticated) {
                const url = `http://localhost:8080/api/messages/search/findByUserEmail/?userEmail=${authState?.accessToken?.claims.sub}&page=${currentPage - 1}&size=${messagesPerPage}`;
                const requestOptions = {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${authState?.accessToken?.accessToken}`,
                        'Content-Type': 'application/json'
                    }
                };
                const messagesResponse = await fetch(url, requestOptions);
                if (!messagesResponse.ok) {
                    throw new Error('something went wrong');
                }
                const messagesResponseJson = await messagesResponse.json();
                setMessages(messagesResponseJson._embedded.messages);
                setTotalPages(messagesResponseJson.page.totalPages);

            }
            setIsLoadingMessages(false);
        }
        fetchUserMsessages().catch((error: any) => {
            setIsLoadingMessages(false);
            setHttpError(error.message);
        })
    }, [authState, currentPage]);
    if (isLoadingMessages) {
        return (
            <SpinnerLoading />
        )
    }
    if (httpError) {
        return (
            <div className="container m-5">
                <p>{httpError}</p>
            </div>
        )
    }
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
    return (
        <div className="mt-2">
            {messages.length > 0 ?
                <>
                    <h5>Current Q/A</h5>
                    {messages.map(messages => (
                        <div key={messages.id}>
                            <div className="card mt-2 shadow p-3 bg-body rounded">
                                <h5>Case#{messages.id}:{messages.title}</h5>
                                <h6>{messages.userEmail}</h6>
                                <p>{messages.question}</p>
                                <hr />
                                <div>
                                    <h5>Response:</h5>
                                    {messages.response && messages.adminEmail ?
                                        <>
                                            <h6>{messages.adminEmail}(admin)</h6>
                                            <p>{messages.response}</p></> :
                                        <p><i>Pending response from administration.Please be patient.</i></p>
                                    }
                                </div>
                            </div>
                        </div>


                    ))}


                </> :
                <h5>All questions you submit will be shown here.</h5>


            }
            {
                totalPages > 1 && <Pagination currentPage={currentPage} totalPages={totalPages} pagination={Pagination} />
            }
        </div>
    );

}