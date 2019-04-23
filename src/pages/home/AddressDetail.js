import React from "react";
import InputText from "../../components/InputText";
import FormFooter from "../../components/FormFooter";

class AddressDetail extends React.Component {

    state = {
        address: {
            addr1: '',
            addr2: '',
            city: '',
            pin: ''
        }
    }

    handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(prevState => ({address: {...prevState.address, [name]: value}}));
    }

    saveOnNext = () => {
        this.props.handleData(this.state.address);
    }

    saveFinalData = e => {
        e.preventDefault();
        this.props.onSaveData(this.state.address);
    }

    static getDerivedStateFromProps(props, state) {
        if (state.address.addr1 === "" && props.data.addr1 !== state.address.addr1
                || state.address.addr2 === "" && props.data.addr2 !== state.address.addr2
                || state.address.city === "" && props.data.city != state.address.city
                || state.address.pin === "" && props.data.pin != state.address.pin) {
          return {
            address: {...state.address, ...props.data}
          };
        }
        return null;
    }

    render() {
        const { addr1, addr2, city, pin } = this.state.address;
        const { prevNext, url } = this.props;
        return (
        <div>
            <h1>Address Detail</h1>
            <form>
                <InputText 
                    inputType="text"
                    name="addr1"
                    value={addr1}
                    placeholder="Address Line 1"
                    handleChange={this.handleChange}
                    title="Address Line1"
                />
                <InputText 
                    inputType="text"
                    name="addr2"
                    value={addr2}
                    placeholder="Address Line 2"
                    handleChange={this.handleChange}
                    title="Address Line2"
                />
                <InputText 
                    inputType="text"
                    name="city"
                    value={city}
                    placeholder="City name"
                    handleChange={this.handleChange}
                    title="City"
                />
                <InputText 
                    inputType="number"
                    name="pin"
                    value={pin}
                    placeholder="Enter area pin code"
                    handleChange={this.handleChange}
                    title="Pin Code"
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

export default AddressDetail;