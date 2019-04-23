import React, { lazy } from "react";
import { Route } from "react-router-dom";
import Message from "../../components/Message";

class Home extends React.Component {
    state = {
        pages: [],
        data: {},
        isSaved: false
    };

    getPrevNext = (pageId) => {
        const { pages } = this.state;
        let prev = null, next = null;
        if(pageId === "0" && pages.length > 1) {
            next = "address";
        } else if(pageId === "1" && pages.length === 2 ) {
            prev = "";
        } else if(pageId === "1" && pages.length === 3 ) {
            prev = "";
            next="identity"
        } else if(pageId === "2" && pages.length === 3){
            prev = "address";
        }
        return {prev, next};
    }

    getComponent = (pageId) => {
        const prevNext = this.getPrevNext(pageId);
        const { match } = this.props;
        console.log(prevNext, match);
        switch(pageId) {
            case "1" :
                const AddressDetail = lazy(() => import("./AddressDetail"));
                return <AddressDetail 
                            prevNext={prevNext} 
                            url={match.url} 
                            handleData={this.handleData}
                            onSaveData={this.onSaveData}
                            data={this.state.data}
                        />;
            case "2" :
                const IdentityDetail = lazy(() => import("./IdentityDetail"));
                return <IdentityDetail 
                            prevNext={prevNext} 
                            url={match.url}
                            handleData={this.handleData}
                            onSaveData={this.onSaveData}
                            data={this.state.data}
                        />;
            default:
                const PersonalDetail = lazy(() => import("./PersonalDetail"));
                return <PersonalDetail 
                            prevNext={prevNext} 
                            url={match.url} 
                            handleData={this.handleData}
                            onSaveData={this.onSaveData}
                            data={this.state.data}
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
        this.setState({isSaved: true});
    }

    static getDerivedStateFromProps(props, state) {
        if ((props.pages && state.pages.length === 0) || (props.pages && props.pages.length !==  state.pages.length)) {
          return {
            pages: props.pages
          };
        }
        return null;
    }

    render() {
        const { match } = this.props;
        const routes = this.state.pages.reduce((acc, curr) => {
            if(curr.pageId === "0") {
                acc.push(<Route key={curr.id} exact path={`${match.url}/`} render={()=> this.getComponent(curr.pageId)} />);
            } else {
                acc.push(<Route key={curr.id} path={`${match.url}/${curr.toPage}`} render={()=> this.getComponent(curr.pageId)} />)
            }
            return acc;
        }, []);
        
        return (
            <div className="container">
             {this.state.isSaved && <Message type="info" message="Data has been saved!!" />}
                {routes}
            </div>
        )
    }
}

export default Home;