import {StatusBar} from "expo-status-bar";
import React, {Fragment} from "react";
import styles from "./App.styles";
import {Divider, Headline, Surface, Text, useTheme} from "react-native-paper";
import {User} from "../../graphql/schemas/types";

export default function App({user}: { user?: User }) {
    const theme = useTheme();
    return (
        <Fragment>
            <StatusBar style="light" />
            <Surface style={styles.container}>
                {
                    !!user ? <Headline>Greetings {user.firstName} {user.lastName}</Headline> : null
                }
                <Divider theme={theme} style={styles.divider} />
                <Text>Open up /src/components/App/App.tsx to start working on your app!</Text>

            </Surface>

        </Fragment>
    )
};
