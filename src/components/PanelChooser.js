import React, { useState } from 'react'
import {useSpring, animated} from 'react-spring'
import '../styles/PanelChooser.css'
import ArrowIcon from '../icons/Arrow'
import ArrowDown from '../icons/ArrowDown'
import BackgroundsSettings from './settings/BackgroundsSettings'

export default function PanelChooser({ settings, setSettings }) {
    const [visibility, setVisibility] = useState(false);        // toggle the visibility of the sidemenu
    const [moreInfo, setMoreInfo] = useState(() => {            // toggle the visibility of further settings
        let arr = [];
        for(let i = 0; i < settings.length; i++) {
            arr.push(false);
        }
        return arr;
    })
    const settingsStyle = {
        position: 'fixed',
        height: '100vh',
        width: '500px',
        top: 0,
        right: '-400px',
        backgroundColor: 'rgba(34, 34, 34, 0.7)',
        zIndex: 100
    }
    const toggleStyle = {
        position: 'fixed',
        height: '100vh',
        width: '100px',
        top: 0,
        right: 0,
        textAlign: 'center',
        backgroundColor: 'rgba(34, 34, 34, 0.5)',
        cursor: 'pointer',
    }
    const menuStyle = {
        position: 'absolute',
        height: '100vh',
        width: '400px',
        top: 0,
        right: 0,
        textAlign: 'left',
        color: '#eee',
        boxSizing: 'border-box',
        fontSize: '1.5rem',
    }

    const settingsAnimProps = useSpring({
        right: visibility ? 0 : -400
    });
    const toggleAnimProps = useSpring({
        right: visibility ? 400 : 0
    });
    
    return (
        <animated.div style={{...settingsStyle, ...settingsAnimProps}} className='settings' >
            <div style={{...toggleStyle, ...toggleAnimProps}} onClick={() => setVisibility(!visibility)} className='settings-toggle'>
                <ArrowIcon toggle={visibility} />
            </div>
            <div style={menuStyle} className='settings-menu'>
                {settings.map((element, index) => {
                    return (
                    <div className='settings-menu-element' style={{padding: '5px 10px'}} key={element.title}>
                        <span style={{cursor: 'pointer'}} onClick={() => {
                            let next = [...moreInfo];
                            next[index] = !next[index];
                            setMoreInfo(next);
                        }}>
                            {element.title}
                        </span>
                        <span style={{float: 'right'}} onClick={() => {
                            let next = [...moreInfo];
                            next[index] = !next[index];
                            setMoreInfo(next);
                        }}>
                            <ArrowDown toggle={moreInfo[index]} />
                        </span>
                        {element.title === 'Background' && moreInfo[0] && <BackgroundsSettings settings={settings} setSettings={setSettings} />}
                        {element.title !== 'Background' && 
                        <label className='settings-switch'>
                            <input type='checkbox' checked={element.active} readOnly />
                            <span className='settings-slider' onClick={() => {
                                const next = [...settings];
                                next[index].active = !next[index].active;
                                setSettings(next);
                            }}/>
                        </label>}
                    </div>)
                })}
            </div>
        </animated.div>
    )
}
