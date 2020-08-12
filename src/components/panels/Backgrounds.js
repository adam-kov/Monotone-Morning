import React, { useEffect } from 'react'
import axios from 'axios'

export default function Backgrounds({ settings, setSettings }) {
    const style = {
        position: 'fixed',
        backgroundImage: `url(${settings[0].current})`,
        backgroundSize: `${window.innerWidth}px ${window.innerHeight}px`,
        backgroundPosition: 'center',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: -1
    }
    
    useEffect(() => {
        console.log('LOADING IMAGES')
        let categories = '';
        let purity = '';
        for(let i of settings[0].category){
            categories += i ? '1' : '0';
        }
        for(let i of settings[0].purity){
            purity += i ? '1' : '0';
        }
        const url = `/api/bg?categories=${categories}&purity=${purity}&atleast=${window.outerWidth}x${window.outerHeight}`;
        axios.get(url)
        .then(res => {
            const data = res.data;
            const next = [...settings];
            let n = 0;
            let arr = [];
            for(let i of data) {
                let obj = { thumb: i.thumbs.small, path: i.path }
                arr.push(obj)
            }
            next[0].current = data[n].path;
            next[0].options = arr;
            setSettings(next);
            console.log('FINISHED LOADING')
        })
        .catch(err => console.log(err));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [settings[0]]);
    return (
        <div style={style}>
            
        </div>
    )
}
