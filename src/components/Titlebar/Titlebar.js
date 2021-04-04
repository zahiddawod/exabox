import React, { Component } from 'react';
import logo from '../../logo.svg';
import './Titlebar.css';
import '../../App.css';
import { RemoveSharp, Crop54Sharp, Close } from '@material-ui/icons';
import { Button, SvgIcon } from '@material-ui/core'

const { ipcRenderer } = window.require('electron');

class Titlebar extends Component {      
    render() {
        let isMaximized = false;

        ipcRenderer.on('maximized', () => { isMaximized = true; });
        ipcRenderer.on('unmaximized', () => { isMaximized = false; });
        
        const minimizeHandler = () => {
            ipcRenderer.invoke('minimize-event');
        }
    
        const maximizeHandler = () => {
            ipcRenderer.invoke(isMaximized ? 'unmaximize-event' : 'maximize-event');
        }
    
        const quitHandler = () => {
            ipcRenderer.invoke('quit-event');
        }

        return (
            <div className="Titlebar">
                <Button className="NoDrag" onClick={minimizeHandler} disabled><div style={{paddingLeft: "2rem", color: "#c3c6c9"}}>
                <img src={logo} className="App-logo" alt="logo" width="35px" height="35px"/>exabox</div></Button>
                <div style={{float: "right"}}>
                    <Button className="NoDrag" onClick={minimizeHandler}><SvgIcon component={RemoveSharp} style={{color: "#c3c6c9"}} /></Button>
                    <Button className="NoDrag" onClick={maximizeHandler}><SvgIcon component={Crop54Sharp} style={{color: "#c3c6c9"}} /></Button>
                    <Button className="NoDrag" onClick={quitHandler} color="secondary"><SvgIcon component={Close} /></Button>
                </div>
            </div>
        )
    }
}

export default Titlebar;