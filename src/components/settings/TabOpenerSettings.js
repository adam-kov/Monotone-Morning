import React, { useState } from 'react'

export default function TabOpenerSettings({ settings, setSettings }) {
    const [tabToAdd, setTabToAdd] = useState({name: '', url: ''})
    const style = {
        fontSize: '1.1rem',
        width: '80%',
        marginLeft: '30px',
        padding: '10px 0',
        lineHeight: '24px',
    }

    return (
        <div style={style}>
            {/* NEW TAB ADDER */}
            {settings.tabs.length < 16 &&
            <div style={{marginBottom: '15px'}}>
                <div style={{fontSize: '1.2rem'}}>Add tab</div>
                <div style={{textAlign: 'center', width: '95%', marginLeft: '5%'}}>
                    <div style={{width: '50%', display: 'inline-block', textAlign: 'left'}}>Name</div>
                    <div style={{width: '50%', display: 'inline-block', textAlign: 'left'}}>URL</div>
                    <div>
                        <input type='text' value={tabToAdd.name} style={{width: '50%', height: '24px', marginTop: '4px'}} placeholder='eg. Google' onChange={e => {
                            e.persist();
                            setTabToAdd(prev => ({...prev, name: e.target.value}));
                        }} />
                        <input type='text' value={tabToAdd.url} style={{width: '50%', height: '24px', marginTop: '4px'}} placeholder='eg. google.com' onChange={e => {
                            e.persist();
                            setTabToAdd(prev => ({...prev, url: e.target.value}));
                        }} onKeyDown={e => {
                            if(e.keyCode === 13) document.getElementById('add-tab-button').click();
                        }} />
                    </div>
                </div>
                <div style={{textAlign: 'center', paddingTop: '10px', height: '50px', width: '95%', marginLeft: '5%'}}>
                    <button id='add-tab-button' className='settings-reload-button' onClick={() => {
                        setSettings(prev => {
                            const next = [...prev];
                            next[6].tabs.push(tabToAdd);
                            setTabToAdd({name: '', url: ''});
                            return next;
                        });
                    }}>Add</button>
                </div>
            </div>}
            {/* DISPLAYING EXISTING TABS */}
            {settings.tabs.map((element, index) => {
                return (
                    <div style={{marginBottom: '10px'}} key={`${element.name}${index}`}>
                        <div style={{fontSize: '1.2rem'}}>Tab {index+1}</div>
                        <div style={{textAlign: 'center', width: '95%', marginLeft: '5%'}}>
                            <div style={{width: '50%', display: 'inline-block', textAlign: 'left'}}>Name</div>
                            <div style={{width: '50%', display: 'inline-block', textAlign: 'left'}}>URL</div>
                            <div>
                                <input type='text' style={{width: '50%', height: '24px', marginTop: '4px'}} value={element.name} onChange={e => {
                                    e.persist();
                                    setSettings(prev => {
                                        const next = [...prev];
                                        next[6].tabs[index].name = e.target.value;
                                        return next;
                                    });
                                }} />
                                <input type='text' style={{width: '50%', height: '24px', marginTop: '4px'}} value={element.url} onChange={e => {
                                    e.persist();
                                    setSettings(prev => {
                                        const next = [...prev];
                                        next[6].tabs[index].url = e.target.value;
                                        return next;
                                    });
                                }} />
                            </div>
                        </div>
                        <div style={{textAlign: 'center', paddingTop: '10px', height: '50px', width: '95%', marginLeft: '5%'}}>
                            <button className='settings-remove-button' onClick={() => {
                                setSettings(prev => {
                                    const next = [...prev];
                                    next[6].tabs.splice(index, 1);
                                    return next;
                                });
                            }}>Remove</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
