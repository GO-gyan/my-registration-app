import React from "react";
import InputText from "../../components/InputText";
import FormFooter from "../../components/FormFooter";

class PersonalDetail extends React.Component {
    state ={
        personal: {
            firstName: '',
            lastName: '',
            age: ''
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

    render() {
        const { prevNext, url } = this.props;
        const { firstName, lastName, age } = this.state.personal;
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
                        name="age"
                        value={age}
                        placeholder="Enter your age"
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