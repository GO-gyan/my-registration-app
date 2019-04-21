import React from "react";
import InputText from "../../components/InputText";
import FormFooter from "../../components/FormFooter";

class IdentityDetail extends React.Component {

    state = {
        identity: {
            aadhar: '',
            pan: ''
        }
    }

    handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(prevState => ({identity: {...prevState.identity, [name]: value}}));
    }

    saveOnNext = () => {
        this.props.handleData(this.state.identity);
    }

    saveFinalData = e => {
        e.preventDefault();
        this.props.onSaveData(this.state.identity);
    }

    render() {
        const { aadhar, pan } = this.state.identity;
        const { prevNext, url } = this.props;
        return (
        <div>
            <h1>Address Detail</h1>
            <form>
                <InputText 
                    inputType="number"
                    name="aadhar"
                    value={aadhar}
                    placeholder="Your aadhar number"
                    handleChange={this.handleChange}
                    title="AADHAR"
                />
                <InputText 
                    inputType="text"
                    name="pan"
                    value={pan}
                    placeholder="Address Line 2"
                    handleChange={this.handleChange}
                    title="PAN"
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

export default IdentityDetail;