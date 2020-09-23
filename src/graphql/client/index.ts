import {ApolloClient, ApolloLink, HttpLink} from "@apollo/client";
import cache from "../cache";
import {onError} from "@apollo/client/link/error";
import {apolloClientConfig} from "../../../config";

const client = new ApolloClient({
    link: ApolloLink.from([
        onError(({graphQLErrors, networkError}) => {
            if (!!graphQLErrors) {
                graphQLErrors.forEach(({message, locations, path}) => {
                    console.log(
                        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
                    );
                });
            }
            if (!!networkError) {
                console.log(`[Network Error]: ${networkError}`);
            }
        }),
        new HttpLink({
            ...apolloClientConfig,

        })


    ]),
    cache: cache
});

export default client;