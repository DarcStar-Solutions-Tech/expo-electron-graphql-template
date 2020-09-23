import {TypePolicies} from "@apollo/client";
import {userVar} from "../schemas";

const typePolicies: TypePolicies = {
    Query: {
        fields: {
            user: {
                read() {
                    return userVar();
                }
            }
        }
    }

};

export default typePolicies;