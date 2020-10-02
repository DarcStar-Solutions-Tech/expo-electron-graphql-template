import React from "react";
import App from "./App";
import {useReactiveVar} from "@apollo/client";
import {userVar} from "../../graphql/schemas";
import {User} from "../../graphql/schemas/types";

const AppContainer=()=> {
    let user = undefined;
    user = useReactiveVar<User>(userVar);
    return (
        <App user={user} />
    );
}

export default AppContainer;


