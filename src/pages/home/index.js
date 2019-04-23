import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Home from "./Home";
import Navbar from "../../components/NavBar";

const GET_PAGES = gql`
query GetPages($id:String!){
	page(id: $id) {
    id
    toPage
    pageId
  }
}
`;

export default (props) => {
    const id = localStorage.getItem("area");
    return (
        <div>
            <Navbar />
            <div className="container">
                <Query query={GET_PAGES} variables={{ id }}>
                    {({loading, error, data}) => {
                        if(loading) return <p>Loading..</p>
                        if(error) return <p>Error while getting form</p>
                        return <Home {...props} pages={data.page}/>;
                    }}
                    </Query>
            </div>
        </div>
    )
}