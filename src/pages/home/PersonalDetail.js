import React from "react";
import InputText from "../../components/InputText";
import FormFooter from "../../components/FormFooter";

class PersonalDetail extends React.Component {
    state ={
        personal: {
            firstName: '',
            lastName: '',
            phone: ''
        }
    }

    handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(prevState => ({personal: {...prevState.personal, [name]: value}}));
    }

    saveOnNext = () => {
        this.props.handleData(this.state.personal);
    }

    saveFinalData = e => {
        e.preventDefault();
        this.props.onSaveData(this.state.personal);
    }

    static getDerivedStateFromProps(props, state) {
        if (state.personal.firstName === "" && props.data.firstName !== state.personal.firstName
                || state.personal.lastName === "" && props.data.lastName !== state.personal.lastName
                || state.personal.phone === "" && props.data.phone != state.personal.phone) {
          return {
            personal: {...state.personal, ...props.data}
          };
        } 
        return null;
    }

    render() {
        const { prevNext, url } = this.props;
        const { firstName, lastName, phone } = this.state.personal;
        console.log("props==>", this.props);
        return (
            <div>
                <h1>Personal Detail</h1>
                <form>
                    <InputText 
                        inputType="text"
                        name="firstName"
                        value={firstName}
                        placeholder="Enter your first name"
                        handleChange={this.handleChange}
                        title="First Name"
                    />
                    <InputText 
                        inputType="text"
                        name="lastName"
                        value={lastName}
                        placeholder="Enter your last name"
                        handleChange={this.handleChange}
                        title="Last Name"
                    />
                    <InputText 
                        inputType="number"
                        name="phone"
                        value={phone}
                        placeholder="Enter your phone number"
                        handleChange={this.handleChange}
                        title="Phone Number"
                    />
                    <FormFooter 
                        url={url} 
                        prevNext={prevNext} 
                        saveOnNext={this.saveOnNext}
                        saveFinalData={this.saveFinalData}
                    />
                </form>
            </div>
        );
    }
};

export default PersonalDetail;