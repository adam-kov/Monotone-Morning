import React, { useState } from 'react'

export default function NewsSettings({ settings, setSettings }) {
    const [newsSetting, setNewsSetting] = useState({...settings});
    const style = {
        fontSize: '1.1rem',
        width: '80%',
        marginLeft: '30px',
        padding: '10px 0',
        lineHeight: '32px',
    }
    const countries = [
        ['Argentina', 'ar'],
        ['Australia', 'au'],
        ['Austria', 'at'],
        ['Belgium', 'be'],
        ['Brazil', 'br'],
        ['Bulgaria', 'bg'],
        ['Canada', 'ca'],
        ['China', 'cn'],
        ['Colombia', 'co'],
        ['Cuba', 'cu'],
        ['Czech Republic', 'cz'],
        ['Egypt', 'eg'],
        ['France', 'fr'],
        ['Germany', 'de'],
        ['Greece', 'gr'],
        ['Hong Kong', 'hk'],
        ['Hungary', 'hu'],
        ['India', 'in'],
        ['Indonesia', 'id'],
        ['Ireland', 'ie'],
        ['Israel', 'il'],
        ['Italy', 'it'],
        ['Japan', 'jp'],
        ['Latvia', 'lv'],
        ['Lithuania', 'lt'],
        ['Malaysia', 'my'],
        ['Mexico', 'mx'],
        ['Morocco', 'ma'],
        ['Netherlands', 'nl'],
        ['New Zealand', 'nz'],
        ['Nigeria', 'ng'],
        ['Norway', 'no'],
        ['Philippines', 'ph'],
        ['Poland', 'pl'],
        ['Portugal', 'pt'],
        ['Romania', 'ro'],
        ['Russia', 'ru'],
        ['Saudi Arabia', 'sa'],
        ['Serbia', 'rs'],
        ['Singapore', 'sg'],
        ['Slovakia', 'sk'],
        ['Slovenia', 'si'],
        ['South Africe', 'za'],
        ['South Korea', 'kr'],
        ['Sweden', 'se'],
        ['Switzerland', 'ch'],
        ['Taiwan', 'tw'],
        ['Thailand', 'th'],
        ['Turkey', 'tr'],
        ['UAE', 'ae'],
        ['Ukraine', 'ua'],
        ['United Kingdom', 'gb'],
        ['United States', 'us'],
        ['Venezuela', 've']
    ];

    return (
        <div style={style}>
            <div>
                Country
                <select style={{float: 'right', padding: '4px', marginTop: '2px'}} defaultValue={settings.country} name='news-country' 
                onChange={e => {
                    e.persist();
                    setNewsSetting(prev => ({...prev, country: e.target.value}));
                }} >
                    {countries.map(element => <option value={element[1]} key={element[1]} >{element[0]}</option>)}
                </select>
            </div>
            <div>
                Category
                <select style={{float: 'right', padding: '4px', marginTop: '2px'}} defaultValue={settings.category} name='news-category' 
                onChange={e => {
                    e.persist();
                    setNewsSetting(prev => ({...prev, category: e.target.value}));
                }} >
                    <option value='all'>all</option>
                    <option value='business'>business</option>
                    <option value='entertainment'>entertainment</option>
                    <option value='general'>general</option>
                    <option value='health'>health</option>
                    <option value='science'>science</option>
                    <option value='sports'>sports</option>
                    <option value='technology'>technology</option> 
                </select>
            </div>
            <div style={{textAlign: 'center', paddingTop: '10px', height: '50px'}}>
                <button className='settings-reload-button' onClick={() => {setSettings(prev => {
                    const next = [...prev];
                    next[2] = {...newsSetting};
                    return next;
                })}}>Reload</button>
            </div>
        </div>
    )
}
