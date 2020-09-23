import React from 'react';
import {ApolloProvider} from "@apollo/client";
import client from "./src/graphql/client";
import {AppContainer} from "./src/components";
import {Provider as PaperProvider} from "react-native-paper";
import defaultTheme from "./src/themes";

export default function App() {
    return (
        <ApolloProvider client={client}>
            <PaperProvider theme={defaultTheme}>
                <AppContainer />
            </PaperProvider>
        </ApolloProvider>
    );
}


