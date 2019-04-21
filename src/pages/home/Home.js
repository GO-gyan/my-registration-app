import React from "react";
import { Route, Link } from "react-router-dom";
import PersonalDetail from "./PersonalDetail";
import AddressDetail from "./AddressDetail";
import IdentityDetail from "./IdentityDetail";

class Home extends React.Component {
    state = {
        pages: [
            {
                id: 1,
                toPage: "",
                label: "Personal Detail",
                component: PersonalDetail
            },
            {
                id: 2,
                toPage: "address",
                label: "Address Detail",
                component: AddressDetail
            },
            {
                id: 3,
                toPage: "identity",
                label: "Identity Detail",
                component: IdentityDetail
            }
        ],
        data: {}
    };

    getPrevNext = index => {
        const { pages } = this.state;
        let prev = null, next = null;
        if(index === 0) {
            next = pages[index+1] && pages[index+1].toPage || null;
        } else if(index === (pages.length-1)) {
            prev = pages[index-1] ? pages[index-1].toPage : null;
        } else {
            prev = pages[index-1] ? pages[index-1].toPage : null;
            next = pages[index+1] ? pages[index+1].toPage : null;
        }
        return {prev, next}
    }

    getComponent = (page, index) => {
        const prevNext = this.getPrevNext(index);
        const { match } = this.props;
        switch(page) {
            case "address" :
                return <AddressDetail 
                            prevNext={prevNext} 
                            url={match.url} 
                            handleData={this.handleData}
                            onSaveData={this.onSaveData}
                        />;
            case "identity" :
                return <IdentityDetail 
                            prevNext={prevNext} 
                            url={match.url}
                            handleData={this.handleData}
                            onSaveData={this.onSaveData}
                        />;
            default:
                return <PersonalDetail 
                            prevNext={prevNext} 
                            url={match.url} 
                            handleData={this.handleData}
                            onSaveData={this.onSaveData}
                        />;
        }
    }

    handleData = formData => {
        this.setState(prevState => ({data: {...prevState.data, ...formData}}));
    }

    onSaveData = formData => {
        this.setState(prevState => ({data: {...prevState.data, ...formData}}), () => this.submitData());
    }

    submitData = () => {
        console.log("Final data===>", this.state.data);
    }

    render() {
        const { match } = this.props;
        console.log("state===>", this.state.data);
        const routes = this.state.pages.reduce((acc, curr, index) => {
            if(curr.id === 1) {
                acc.push(<Route key={curr.id} exact path={`${match.url}/`} render={()=> this.getComponent(curr.toPage, index)} />);
            } else {
                acc.push(<Route key={curr.id} path={`${match.url}/${curr.toPage}`} render={()=> this.getComponent(curr.toPage, index)} />)
            }
            return acc;
        }, []);
        
        return (
            <div className="container">
                {routes}
            </div>
        )
    }
}

export default Home;