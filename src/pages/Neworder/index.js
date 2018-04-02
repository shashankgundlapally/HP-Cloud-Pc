import React from 'react';
import './style.css';
import { Button, DatePicker,RadioButtons,RadioButton, Dropdown, Icon,FormField, Panel, Password, TextBox, TextArea } from '@veneer/core';



class Neworder extends React.Component {
    render() {
      return (
        <div>
        <Panel  className="undefined" contentClassName="undefined">
        <h3 style={{ color: ' #333333'}}><b>Questionnaires</b></h3>
        <hr/>
        <br/>
            <FormField label="1. How many users  are you intending to  provide with Cloud PC ?" id="formfield-id">
                <div style={{width: "400px"}}>
                    <TextBox placeholder="No of users to provide with CloudPC" name="input_name" maxLength="undefined" />
                </div>
            </FormField>

            <FormField label="2. Breakdown of MOBILE and FIXED LOCATION users:" id="formfield-id">
                <div style={{width: "400px"}}>
                    <RadioButtons name="radiobutton_horizontal" alignment="horizontal">
                         <RadioButton
                          label="Mobile Users"
                          index={0}
                          onChange="undefined"
                          value="undefined" />
                          <RadioButton
                          label="Fixed Location Users"
                          index={1}
                          onChange="undefined"
                          value="undefined" />
                        </RadioButtons>
                </div>
                <div style={{width: "400px"}}>
                <div style={{width: "400px"}}>
                    <TextBox placeholder="No of users" name="input_name" maxLength="undefined" />
                </div>
                </div>
            </FormField>

            <FormField label="3. Display Usge among Users (how many displays does each user have)" id="formfield-id">
                <div style={{width: "800px"}}>
                <RadioButtons name="radiobutton_horizontal" alignment="horizontal">
                         <RadioButton
                          label="1 or 2 Displays"
                          index={0}
                          onChange="undefined"
                          value="undefined" />
                          <RadioButton
                          label="3 or more displays"
                          index={1}
                          onChange="undefined"
                          value="undefined" />
                          
                        </RadioButtons>
                </div>
                <div style={{width: "400px"}}>
                <div style={{width: "400px"}}>
                    <TextBox placeholder="No of displays for each user" name="input_name" maxLength="undefined" />
                </div>
                </div>
            </FormField>
            <FormField label="4. How are your PRINTERS supported" id="formfield-id">
                <div style={{width: "800px"}}>
                <RadioButtons name="radiobutton_horizontal" alignment="horizontal">
                         <RadioButton
                          label="User has a printer connected to their PC"
                          index={0}
                          onChange="undefined"
                          value="undefined" />
                          <RadioButton
                          label="Users connect to printers on the local network"
                          index={1}
                          onChange="undefined"
                          value="undefined" />
                          <RadioButton
                          label="Users use E-Print services"
                          index={1}
                          onChange="undefined"
                          value="undefined" />
                          
                        </RadioButtons>
                </div>
                <div style={{width: "400px"}}>
                <div style={{width: "400px"}}>
                    <TextBox placeholder="" name="input_name" maxLength="undefined" />
                </div>
                </div>
            </FormField>
            <FormField label="5. Are any other devices (peripherals) connected to your users PC" id="formfield-id">
                <div style={{width: "800px"}}>
                <RadioButtons name="radiobutton_horizontal" alignment="horizontal">
                         <RadioButton
                          label="Camera"
                          index={0}
                          onChange="undefined"
                          value="undefined" />
                          <RadioButton
                          label="Scanner"
                          index={1}
                          onChange="undefined"
                          value="undefined" />
                          <RadioButton
                          label="Other"
                          index={1}
                          onChange="undefined"
                          value="undefined" />
                          
                        </RadioButtons>
                </div>
                <div style={{width: "400px"}}>
                <div style={{width: "400px"}}>
                    <TextBox placeholder="" name="input_name" maxLength="undefined" />
                </div>
                </div>
            </FormField>
            <FormField label="6. Do you utilize a domain or active directory in your offices" id="formfield-id">
                <div style={{width: "800px"}}>
                <RadioButtons name="radiobutton_horizontal" alignment="horizontal">
                         <RadioButton
                          label="Yes"
                          index={0}
                          onChange="undefined"
                          value="undefined" />
                          <RadioButton
                          label="No"
                          index={1}
                          onChange="undefined"
                          value="undefined" />
                         
                        </RadioButtons>
                </div>
            </FormField>
            <FormField label="7. Do any of your peripherals require a Serial Port" id="formfield-id">
                <div style={{width: "800px"}}>
                <RadioButtons name="radiobutton_horizontal" alignment="horizontal">
                         <RadioButton
                          label="Yes"
                          index={0}
                          onChange="undefined"
                          value="undefined" />
                          <RadioButton
                          label="No"
                          index={1}
                          onChange="undefined"
                          value="undefined" />
                         
                        </RadioButtons>
                </div>
                <FormField label="How many users" id="formfield-id">
                <div style={{width: "400px"}}>
                    <TextBox placeholder="No of users" name="input_name" maxLength="undefined" />
                </div>
            </FormField>
            </FormField>
            <FormField label="8. Understanding the Software used by your Users" id="formfield-id">
                <div style={{width: "800px"}}>
            <RadioButtons name="radiobutton_label" id="radio-group-id">
  <RadioButton
    label="Microsoft Office 365 Subscriptions"
    id="radio-item1-id"
    index={0}
    onChange="undefined"
    value="undefined" />
  <RadioButton
    label="Microsoft Office (Other version)"
    id="radio-item2-id"
    index={1}
    onChange="undefined"
    value="undefined" />
    <RadioButton
    label="Adobe Reader"
    id="radio-item2-id"
    index={1}
    onChange="undefined"
    value="undefined" />
    <RadioButton
    label="Google G-Suite applications"
    id="radio-item2-id"
    index={1}
    onChange="undefined"
    value="undefined" />
    <RadioButton
    label="Voice over IP (VOIP) Solution"
    id="radio-item2-id"
    index={1}
    onChange="undefined"
    value="undefined" />
    <RadioButton
    label="Other Standard Business Software"
    id="radio-item2-id"
    index={1}
    onChange="undefined"
    value="undefined" />
    <RadioButton
    label="Custom Developed Software"
    id="radio-item2-id"
    index={1}
    onChange="undefined"
    value="undefined" />
</RadioButtons>
                </div>
            </FormField>
            <div style={{ display: 'inline-block', width: '50%', marginLeft:'87% '}}>
                <Button >
                    Save Order
            </Button>
        </div>
        </Panel>
        {/* <h3 style={{ color: ' #333333'}}><b>Questionnaires</b></h3>
        <hr />
        <div class="form-group">
            <p>1. Do you want this order for your business purpose?</p>
            <label><input type="radio" name="optradio" checked /> Yes</label>
            <label><input type="radio" name="optradio" /> No </label>
        </div><br />
        <div class="form-group">
            <p>2. Is your business is a Non-IT business? </p>
            <label><input type="radio" name="optradio2" /> Yes</label>
            <label><input type="radio" name="optradio2" checked /> No </label>
        </div><br />
        <div class="form-group">
            <p>3. Do you already have any HP device?</p>
            <label><input type="radio" name="optradio3" /> Yes</label>
            <label><input type="radio" name="optradio3" checked /> No </label>
        </div><br />
        <div class="form-group">
            <p>4. Do you want to inegrate additional security? </p>
            <label><input type="radio" name="optradio4" checked /> Yes</label>
            <label><input type="radio" name="optradio4" /> No </label>
        </div><br />
        <div class="form-group">
            <p>5. Would you prefer to run your cloud service on "High Availability" ?</p>
            <label><input type="radio" name="optradio5" checked /> Yes</label>
            <label><input type="radio" name="optradio5" /> No </label>
        </div><br />
        <div class="form-group">
            <p>6. Would you prefer to integrate Azure Auto-Scaling system to save Azure cost?</p>
            <label><input type="radio" name="optradio6" checked /> Yes</label>
            <label><input type="radio" name="optradio6" /> No </label>
        </div>
        <br />

        <h3 style={{ color: '#333333' }}><b>Recomendations & Cost Estimation</b></h3>
        <hr />

        <p><label>>VM Size : </label>Standard-A4 (65$/Month)</p><br />
        <p><label>>Location : </label>South Central US</p><br />
        <p><label>>No of Session Host Servers :2</label></p>
        <br />
        <h3 style={{ color: '#333333' }}><b>Order Summary</b></h3>
        <hr />
        <div class="col-md-12">
            <div class="col-md-6">
                <h4 style={{ color: '#0096D6' }}><b>>>Questionnaries</b></h4><br />
                <p>1. Do you want this order for your business purpose? <span> <b> Yes</b></span></p>
                <p>2. Is your business is a Non-IT business? <span> <b> No</b></span></p>
                <p>3. Do you already have any HP device ? <span> <b> No</b></span></p>
                <p>4. Do you want to inegrate additional security?  <span> <b> No</b></span></p>
                <p>5. Would you prefer to run your cloud service on "High Availability" ? <span> <b> Yes</b></span></p>
                <p>6. Would you prefer to integrate Azure Auto-Scaling system to save Azure cost? <span> <b> Yes</b></span></p>
               
            </div>
            <br />
            <div class="col-md-6">
                <h4 style={{ color: '#0096D6' }}><b>>>Recomendations & Cost Estimation</b></h4><br />
                <p><label>>VM Size : </label>Standard-A4 (65$/Month)</p><br />
                <p><label>>Location : </label>South Central US</p><br />
                <p><label>>No of Session Host Servers :2</label></p>
            </div>
            <div style={{ display: 'inline-block', width: '50%', marginLeft:'87% '}}>
                <Button >
                    Save Order
            </Button>
                
            </div>

        </div> */}
        
    </div>
      );
    }
  }

export default Neworder;