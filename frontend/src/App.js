import React, { useEffect } from "react";
import logger from "./middleware/logger";
import { useState } from "react";

function App() {
    useEffect(() => {
        logger.info("Application Started");
    }, []);

    return ( <
        div style = {
            { padding: "20px" }
        } >
        <
        h1 > Campus Notification System < /h1> <
        p > Logging Middleware Integrated Successfully < /p> < /
        div >
    );
}

export default App;