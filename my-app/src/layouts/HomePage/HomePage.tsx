
import { MessagesPage } from "../MessagesPage/MessagesPage"
import { Carosel } from "./components/Carouser"
import { ExploreTopBooks } from "./components/ExploreTopBooks"
import { Heros } from "./components/Heros"
import { LibraryServices } from "./components/LibraryServices"

export const HomePage = () => {
    return (
        <>
            <ExploreTopBooks />
            <Carosel />
            <Heros />
            <LibraryServices />


        </>
    )
}