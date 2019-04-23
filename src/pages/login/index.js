import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { Redirect } from "react-router-dom";
import Login from "./Login";

const GET_AREAS = gql`
    {
        area {
            areaCode
            areaLabel
        }
    }
`;

const LOGIN_USER = gql`
    mutation AuthUser($user: userInput) {
        authUser(user: $user) {
            id
        }
    }
`;

export default (props) => (
    <Query query={GET_AREAS}>
        {({loading, error, data}) => {
            const { area } = data;
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error</p>;
            
            return (
                <Mutation mutation={LOGIN_USER}>
                    {(authUser, result) => {
                        if (result.data) return <Redirect to={{pathname: "/home"}}/>;
                        return <Login {...props} options={area} login={authUser} result={result.error}/>
                    }}
                </Mutation>
            );
            }
        }
    </Query>
);

