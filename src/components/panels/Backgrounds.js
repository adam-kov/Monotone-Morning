import React, { useEffect, useState } from 'react'
import axios from 'axios'
import isEqual from 'lodash/isEqual'

export default function Backgrounds({ bgSettings, setBgSettings }) {
    const [prevBgSettings, setPrevBgSettings] = useState({category: [...bgSettings.category], purity: [...bgSettings.purity]});
    const style = {
        position: 'fixed',
        backgroundImage: `url(${bgSettings.current})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: -1
    }
    useEffect(() => {
        if(!isEqual(prevBgSettings, {category: [...bgSettings.category], purity: [...bgSettings.purity]})) {
            let categories = '';
            let purity = '';
            for(let i of bgSettings.category){
                categories += i ? '1' : '0';
            }
            for(let i of bgSettings.purity){
                purity += i ? '1' : '0';
            }
            const url = `/api/bg?categories=${categories}&purity=${purity}&atleast=${window.outerWidth}x${window.outerHeight}`;
            axios.get(url)
            .then(res => {
                const data = res.data;
                let arr = [];
                for(let i of data) {
                    let obj = { thumb: i.thumbs.small, path: i.path }
                    arr.push(obj);
                }
                setBgSettings(prev => ({...prev, current: data[0].path, options: arr}));
            })
            .catch(err => console.log(err));
            setPrevBgSettings({category: [...bgSettings.category], purity: [...bgSettings.purity]});
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [bgSettings]);
    useEffect(() => {
        let categories = '';
        let purity = '';
        for(let i of bgSettings.category){
            categories += i ? '1' : '0';
        }
        for(let i of bgSettings.purity){
            purity += i ? '1' : '0';
        }
        const url = `/api/bg?categories=${categories}&purity=${purity}&atleast=${window.outerWidth}x${window.outerHeight}`;
        axios.get(url)
        .then(res => {
            const data = res.data;
            let arr = [];
            for(let i of data) {
                let obj = { thumb: i.thumbs.small, path: i.path }
                arr.push(obj);
            }
            setBgSettings(prev => ({...prev, current: data[0].path, options: arr}));
        })
        .catch(err => console.log(err));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div style={style}>
            
        </div>
    )
}
