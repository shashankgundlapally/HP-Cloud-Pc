import React from 'react';
import './style.css';
import { Button, DatePicker, Dropdown, FormField, Panel, Password, TextBox, TextArea } from '@veneer/core';



export default () => (
    <div>
        <h3 style={{ color: ' #333333'}}><b>Questionnaires</b></h3>
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

        </div>
        
    </div>
);