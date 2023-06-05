

export const Pagination: React.FC<{ currentPage: number, totalPages: number, pagination: any }> = (props) => {
    console.log(props.currentPage);
    console.log(props.totalPages);
    console.log(props.pagination);
    const pageNumbers = [];
    if (props.currentPage === 1) {
        pageNumbers.push(props.currentPage);
        if (props.totalPages >= props.currentPage + 1) {
            pageNumbers.push(props.currentPage + 1);
        }
        if (props.totalPages >= props.currentPage + 2) {
            pageNumbers.push(props.currentPage + 2);
        }

    }
    else if (props.currentPage > 1) {
        if (props.currentPage >= 3) {
            pageNumbers.push(props.currentPage - 2);
            pageNumbers.push(props.currentPage - 1);
        }
        else {
            pageNumbers.push(props.currentPage - 1);

        }
        pageNumbers.push(props.currentPage);
        if (props.totalPages >= props.currentPage + 1) {
            pageNumbers.push(props.currentPage + 1);
        }
        if (props.totalPages >= props.currentPage + 2) {
            pageNumbers.push(props.currentPage + 2);
        }
    }
    return (
        <nav aria-label="...">
            <ul className="pagination">
                <li className="page-item" onClick={() => props.pagination(1)}>
                    <button className="page-link">
                        First Page
                    </button>
                </li>
                {
                    pageNumbers.map(number => (
                        <li key={number} onClick={() => props.pagination(number)}
                            className={"page-item" + (props.currentPage === number ? "active" : "")}>
                            <button className="page-link">
                                {number}
                            </button>
                        </li>
                    ))
                }
                <li className="page-item" onClick={() => props.pagination(props.totalPages)}>
                    <button className="page-link">
                        Last Page
                    </button>
                </li>

            </ul>
        </nav>
    )
}