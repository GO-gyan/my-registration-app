import React from "react";

import InputText from "../../components/InputText";
import Select from "../../components/Select";
import Button from "../../components/Button";
import Message from "../../components/Message";
import "./login.css";

const buttonStyle = {
    margin : '10px 10px 10px 10px',
    float: 'right'
}

class Login extends React.Component {

    state = {
        user: {
            userName: "",
            password: "",
            area: ""
        },
        areaOptions: [],
        formValid: false
    };

    handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(prevState => ({user: {...prevState.user, [name]: value}}), () => this.validateForm());
    }

    validateForm = () => {
        const { userName, password, area } = this.state.user;
        const formValid = userName && password && area;
        this.setState({formValid});
    }

    handleFormSubmit = e => {
        e.preventDefault();
        const { user } = this.state;
        console.log(this.state.user);
        localStorage.setItem('area', user.area);
        this.props.login({variables: { user: {userName:user.userName, password: user.password }}});
        //this.props.history.push("/home");
    }

    static getDerivedStateFromProps(props, state) {
        if (state.areaOptions.length === 0 && props.options.length !== 0) {
            const options = props.options.map(option => {
                return {value: option.areaCode, label: option.areaLabel};
            })
          return {
            areaOptions: options
          };
        }
        return null;
    }

    render() {
        const { userName, password, area } = this.state.user;
        return(
            <div className="container">
                <div className="row">
                {this.props.result && 
                    <div className="col col-12">
                        <Message type="danger" message={`Invalid username and password!!`} />
                    </div>
                }
                </div>
                <form className="container-fluid">
                    <div className="form-login">
                    <p className="login-header">Login</p>
                    <div className="row">
                        <div className="col col-12">
                            <InputText 
                                inputType="text"
                                name="userName"
                                value={userName}
                                placeholder="Enter user name"
                                handleChange={this.handleChange}
                                title="User Name"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-12">
                            <InputText 
                                inputType="password"
                                name="password"
                                value={password}
                                placeholder="Enter password"
                                handleChange={this.handleChange}
                                title="Password"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-12">
                            <Select
                                name="area"
                                value={area}
                                placeholder = "Select Area"
                                handleChange = {this.handleChange}
                                options={this.state.areaOptions}
                                title="Select Area"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-12">
                            <Button 
                                action = {this.handleFormSubmit}
                                type = {'primary'} 
                                title = {'Submit'} 
                                style={buttonStyle}
                                isDisabled={!this.state.formValid}
                            />    
                        </div>
                    </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;