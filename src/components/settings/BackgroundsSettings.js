import React, { useState } from 'react'
import ArrowCircleRight from '../../icons/ArrowCircleRight'
import ArrowCircleLeft from '../../icons/ArrowCircleLeft'

export default function BackgroundsSettings({ settings, setSettings }) {
    const [bgPageIndicator, setBgPageIndicator] = useState(0);
    const [bgType, setBgType] = useState({
        category: [...settings[0].category],
        purity: [...settings[0].purity]
    })
    const imgStyle = {
        maxWidth: '175px',
        margin: '5px 5px',
        cursor: 'pointer',
    }
    const pagerStyle = {
        position: 'absolute',
        top: 0,
        padding: '0 5px',
        margin: '0 10px',
        cursor: 'pointer'
    }

    return (
        <div style={{fontSize: '1rem', textAlign: 'center'}}>
            {/* CATEGORY SELECTOR */}
            <div style={{margin: '10px'}}>Category<br/>
                <span style={{margin: '5px 10px', cursor: 'pointer'}} onClick={() => {      // GENERAL CATEGORY
                    setBgType(() => {
                        const next = {...bgType}
                        next.category[0] = !next.category[0];
                        return next;
                    })
                }}>General
                    <input type='checkbox' checked={bgType.category[0]} readOnly/>
                </span>
                <span style={{margin: '5px 10px', cursor: 'pointer'}} onClick={() => {      // ANIME CATEGORY
                    setBgType(() => {
                        const next = {...bgType}
                        next.category[1] = !next.category[1];
                        return next;
                    })
                }}>Anime
                    <input type='checkbox' checked={bgType.category[1]} readOnly/>
                </span>
                <span style={{margin: '5px 10px', cursor: 'pointer'}} onClick={() => {      // PEOPLE CATEGORY
                    setBgType(() => {
                        const next = {...bgType}
                        next.category[2] = !next.category[2];
                        return next;
                    })
                }}>People
                    <input type='checkbox' checked={bgType.category[2]} readOnly/>
                </span>
            </div>
            {/* PURITY SELECTOR */}
            <div style={{margin: '10px'}}>Purity<br/>
                <span style={{margin: '5px 10px', cursor: 'pointer'}} onClick={() => {      // SFW PURITY
                    setBgType(() => {
                        const next = {...bgType}
                        next.purity[0] = !next.purity[0];
                        return next;
                    })
                }}>SFW
                    <input type='checkbox' checked={bgType.purity[0]} readOnly/>
                </span>
                <span style={{margin: '5px 10px', cursor: 'pointer'}} onClick={() => {      // SKETCHY PURITY
                    setBgType(() => {
                        const next = {...bgType}
                        next.purity[1] = !next.purity[1];
                        return next;
                    })
                }}>Sketchy
                    <input type='checkbox' checked={bgType.purity[1]} readOnly/>
                </span>
                <span style={{margin: '5px 10px', cursor: 'pointer'}} onClick={() => {      // NSFW PURITY
                    setBgType(() => {
                        const next = {...bgType}
                        next.purity[2] = !next.purity[2];
                        return next;
                    })
                }}>NSFW
                    <input type='checkbox' checked={bgType.purity[2]} readOnly/>
                </span>
            </div>
            {/* RELOAD BUTTON */}
            <button style={{padding: '10px 20px', marginBottom: '20px', border: 'none', borderRadius: '4px', backgroundColor: '#376891', color: '#eee', cursor:'pointer'}} onClick={() => {
                const next = [...settings];
                for(let i = 0; i < 3; i++) {
                    next[0].category[i] = bgType.category[i];
                    next[0].purity[i] = bgType.purity[i];
                }
                setSettings(next);
                setBgPageIndicator(0);
                console.log(settings)
            }}>Reload</button><br/>
            {/* IMAGE PREVIEWS */}
            <img style={imgStyle} src={settings[0].options[bgPageIndicator] !== undefined ? settings[0].options[bgPageIndicator].thumb : ''} alt='Background option' 
                onClick={() => {
                    const next = [...settings];
                    next[0].current = next[0].options[bgPageIndicator].path;
                    setSettings(next);
                }} />
            <img style={imgStyle} src={settings[0].options[bgPageIndicator+1] !== undefined ? settings[0].options[bgPageIndicator+1].thumb : ''} alt='Background option' 
                onClick={() => {
                    const next = [...settings];
                    next[0].current = next[0].options[bgPageIndicator+1].path;
                    setSettings(next);
                }} />
            <img style={imgStyle} src={settings[0].options[bgPageIndicator+2] !== undefined ? settings[0].options[bgPageIndicator+2].thumb : ''} alt='Background option' 
                onClick={() => {
                    const next = [...settings];
                    next[0].current = next[0].options[bgPageIndicator+2].path;
                    setSettings(next);
                }} />
            <img style={imgStyle} src={settings[0].options[bgPageIndicator+3] !== undefined ? settings[0].options[bgPageIndicator+3].thumb : ''} alt='Background option' 
                onClick={() => {
                    const next = [...settings];
                    next[0].current = next[0].options[bgPageIndicator+3].path;
                    setSettings(next);
                }} />
            <img style={imgStyle} src={settings[0].options[bgPageIndicator+4] !== undefined ? settings[0].options[bgPageIndicator+4].thumb : ''} alt='Background option' 
                onClick={() => {
                    const next = [...settings];
                    next[0].current = next[0].options[bgPageIndicator+4].path;
                    setSettings(next);
                }} />
            <img style={imgStyle} src={settings[0].options[bgPageIndicator+5] !== undefined ? settings[0].options[bgPageIndicator+5].thumb : ''} alt='Background option' 
                onClick={() => {
                    const next = [...settings];
                    next[0].current = next[0].options[bgPageIndicator+5].path;
                    setSettings(next);
                }} />
            {/* PAGE NAVIGATOR */}
            <div style={{position: 'relative', height: '40px'}}>
                {bgPageIndicator !== 0 && <span style={{...pagerStyle, left: '100px'}} 
                onClick={() => setBgPageIndicator(prev => prev-6)}><ArrowCircleLeft /></span>}
                {bgPageIndicator !== 18 && <span style={{...pagerStyle, right: '100px'}} 
                onClick={() => setBgPageIndicator(prev => prev+6)}><ArrowCircleRight /></span>}
            </div>
        </div>
    )
}
