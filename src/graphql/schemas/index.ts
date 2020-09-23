import {gql, makeVar} from "@apollo/client";
import {User} from "./types";

export const GET_USER = gql`
    query getUser{
        user @client
    }
`;


export const userVar = makeVar<User>({
    userName: "JDoe",
    email: "john.doe@mymail.com",
    firstName: "John",
    lastName: "Doe"
});