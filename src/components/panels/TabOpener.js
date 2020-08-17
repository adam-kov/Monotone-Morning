import React from 'react'

export default function TabOpener({ settings, mode }) {
    const style = {
        top: '45vh',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '40vw',
        minHeight: '140px',
        height: '40vh',
        maxHeight: '40vh',
        fontSize: '1.2rem',
        backgroundColor: 'transparent',
        backdropFilter: 'none',
    }
    const tabStyle = {
        display: 'inline-block',
        width: '22%',
        height: '50px',
        lineHeight: '50px',
        margin: '1%',
        backdropFilter: 'blur(2px)',
        borderRadius: '8px',
        fontSize: '1.3rem',
        cursor: 'pointer',
        overflow: 'hidden',
    }
    return (
        <div style={style} className={`tab-opener-panel ${mode ? 'panel-light' : 'panel'}`}>
            {settings.tabs.length === 0 && <h3 style={{backgroundColor: `${mode ? 'rgba(238, 238, 238, 0.7)' : 'rgba(34, 34, 34, 0.7)'}`, backdropFilter: 'blur(2px)', 
            borderRadius: '8px', width: '60%', marginLeft: '20%', padding: '20px'}}>Add tabs in the settings</h3>}
            {settings.tabs.length > 0 && settings.tabs.map((element, index) => {
                if(index+1 % 4 !== 0) {
                    return (
                        <div className={`${mode ? 'tab-light' : 'tab'}`} key={`${element.name}${index}`} style={tabStyle} onClick={() => window.open(`http://${element.url}`, '_blank')}>
                            <img src={`https://www.google.com/s2/favicons?domain=${element.url}`} alt='Link favicon' style={{marginRight: '5px', transform: 'translateY(10%)'}} />
                            {element.name}
                        </div>
                    )
                } else {
                    return (
                        <>
                            <div className={`${mode ? 'tab-light' : 'tab'}`} style={tabStyle} onClick={() => window.open(`http://${element.url}`, '_blank')}>
                                <img src={`https://www.google.com/s2/favicons?domain=${element.url}`} alt='Link favicon' style={{marginRight: '5px', transform: 'translateY(10%)'}} />
                                {element.name}
                            </div>
                            <br key={`br${index}`}/>
                        </>
                    )
                    
                }
            })}
        </div>
    )
}
