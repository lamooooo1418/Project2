import React from 'react '

export default class TouristPoint extends React.Component {
constructor(props) {
super(props)
this.state = {
searchValue: "",
CountryToDisplay = this.props.results.name,};}
    handleSearchChange = (e) => {
            const textValue = e.target.value;
 //Take the text box current value
             const filteredCountry = this.props.results.name.filter(function(Country) { return Country.toLowerCase().includes(textValue.toLowerCase()) }
        

            ) }
            render() {
                return (<div>nmm</div>
                )}
        }