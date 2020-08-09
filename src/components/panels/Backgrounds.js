import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Backgrounds({ settings }) {
    const [img, setImg] = useState(null);
    const style = {
        position: 'fixed',
        backgroundImage: `url(${img})`,
        backgroundPosition: 'center',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: -1
    }
    useEffect(() => {
        const url = `/api/bg?purity=110&atleast=${window.outerWidth}x${window.outerHeight}`;
        axios.get(url)
            .then(res => {
                //setImg(res.data.data[22].thumbs['large']);
                setImg(res.data.data[22].path);
            })
            .catch(err => console.log(err));
    }, []);
    return (
        <div style={style}>
            
        </div>
    )
}
