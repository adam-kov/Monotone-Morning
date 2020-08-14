import React, { useState } from 'react'
import ArrowCircleRight from '../../icons/ArrowCircleRight'
import ArrowCircleLeft from '../../icons/ArrowCircleLeft'

export default function BackgroundsSettings({ settings, setSettings }) {
    const [bgPageIndicator, setBgPageIndicator] = useState(0);
    const [bgType, setBgType] = useState({
        category: [...settings.category],
        purity: [...settings.purity]
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

    function displayImagePreviews() {
        const imageArray = [];
        for(let i = 0; i < 6; i++) {
            imageArray.push(
                <img style={imgStyle} src={settings.options[bgPageIndicator+i] !== undefined ? settings.options[bgPageIndicator+i].thumb : ''} key={`image${i}`} alt='Background option' 
                onClick={() => {
                    const next = {...settings};
                    next.current = next.options[bgPageIndicator+i].path;
                    setSettings(next);
                }} />
            )
        }
        return imageArray;
    }

    return (
        <div style={{fontSize: '1rem', textAlign: 'center'}}>
            {/* CATEGORY SELECTOR */}
            <div style={{margin: '10px'}}>Category<br/>
                <span style={{margin: '5px 10px', cursor: 'pointer'}} onClick={() => {      // GENERAL CATEGORY
                    const next = {...bgType}
                    next.category[0] = !next.category[0];
                    setBgType(next);
                }}>General
                    <input type='checkbox' checked={bgType.category[0]} readOnly/>
                </span>
                <span style={{margin: '5px 10px', cursor: 'pointer'}} onClick={() => {      // ANIME CATEGORY
                    const next = {...bgType}
                    next.category[1] = !next.category[1];
                    setBgType(next);
                }}>Anime
                    <input type='checkbox' checked={bgType.category[1]} readOnly/>
                </span>
                <span style={{margin: '5px 10px', cursor: 'pointer'}} onClick={() => {      // PEOPLE CATEGORY
                    const next = {...bgType}
                    next.category[2] = !next.category[2];
                    setBgType(next);
                }}>People
                    <input type='checkbox' checked={bgType.category[2]} readOnly/>
                </span>
            </div>
            {/* PURITY SELECTOR */}
            <div style={{margin: '10px'}}>Purity<br/>
                <span style={{margin: '5px 10px', cursor: 'pointer'}} onClick={() => {      // SFW PURITY
                    const next = {...bgType}
                    next.purity[0] = !next.purity[0];
                    setBgType(next);
                }}>SFW
                    <input type='checkbox' checked={bgType.purity[0]} readOnly/>
                </span>
                <span style={{margin: '5px 10px', cursor: 'pointer'}} onClick={() => {      // SKETCHY PURITY
                    const next = {...bgType}
                    next.purity[1] = !next.purity[1];
                    setBgType(next);
                }}>Sketchy
                    <input type='checkbox' checked={bgType.purity[1]} readOnly/>
                </span>
                <span style={{margin: '5px 10px', cursor: 'pointer'}} onClick={() => {      // NSFW PURITY
                    const next = {...bgType}
                    next.purity[2] = !next.purity[2];
                    setBgType(next);
                }}>NSFW
                    <input type='checkbox' checked={bgType.purity[2]} readOnly/>
                </span>
            </div>
            {/* RELOAD BUTTON */}
            <button className='settings-reload-button' onClick={() => {
                const next = {...settings};
                for(let i = 0; i < 3; i++) {
                    next.category[i] = bgType.category[i];
                    next.purity[i] = bgType.purity[i];
                }
                setSettings(next);
                setBgPageIndicator(0);
            }}>Reload</button><br/>
            {/* IMAGE PREVIEWS */}
            {displayImagePreviews()}
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
