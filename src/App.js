import React, { useState, useEffect } from 'react';
import PanelChooser from './components/PanelChooser'
import Backgrounds from './components/panels/Backgrounds'
import TimeAndDate from './components/panels/TimeAndDate'
import Weather from './components/panels/Weather'
import News from './components/panels/News'
import DailyQuote from './components/panels/DailyQuote'
import SearchBar from './components/panels/SearchBar'
import CurrencyRates from './components/panels/CurrencyRates'
import TabOpener from './components/panels/TabOpener'
import './App.css';
// Lazy loading!
 
function App() {
  const [lightMode, setLightMode] = useState(window.localStorage.getItem('lightMode') ? JSON.parse(window.localStorage.getItem('lightMode')) : false);
  const [panelSettings, setPanelSettings] = useState(() => {
    if(window.localStorage.getItem('panelSettings')) {
      const setting = JSON.parse(window.localStorage.getItem('panelSettings'));
      return setting;
    } else {
      return (
        [
          {
            title: 'Time and Date',
            active: true,
            showSeconds: true,
            showYear: false
          },
          {
            title: 'Weather Forecast',
            active: true,
            unit: 'metric',
            city: '',
            lat: null,
            lon: null
          },
          {
            title: 'News',
            active: true,
            country: 'gb',
            category: 'all'
          },
          {
            title: 'Quote of the Day',
            active: true,
            from: 'all'
          },
          {
            title: 'Search Bar',
            active: true,
            engine: 'Google'
          },
          {
            title: 'Currency Rates',
            active: true,
            base: 'EUR',
            show: ['USD', 'GBP']
          },
          {
            title: 'Tab Opener',
            active: true,
            tabs: []
          }
        ]
      )
    }
  });
  const [bgSettings, setBgSettings] = useState(() => {
    if(window.localStorage.getItem('bgSettings')) {
      const setting = JSON.parse(window.localStorage.getItem('bgSettings'));
      return setting
    } else {
      return (
        {
          title: 'Background',
          active: true,
          current: 'https://w.wallhaven.cc/full/nm/wallhaven-nmg7vy.jpg',
          options: [],
          updateDaily: true,
          category: [true, false, false],
          purity: [true, false, false]
        }
      )
    }
  });
  
  useEffect(() => {
    window.localStorage.setItem('panelSettings', JSON.stringify(panelSettings));
  }, [panelSettings]);
  useEffect(() => {
    window.localStorage.setItem('bgSettings', JSON.stringify(bgSettings));
  }, [bgSettings]);
  useEffect(() => {
    window.localStorage.setItem('lightMode', JSON.stringify(lightMode));
  }, [lightMode]);
  
  // MIN RES: 900x600
  return (
    window.innerWidth > 899 && window.innerHeight > 599 ? 
    <div className='App'>
      {panelSettings[0].active && <TimeAndDate settings={panelSettings[0]} mode={lightMode} />}
      {panelSettings[1].active && <Weather settings={panelSettings[1]} setSettings={setPanelSettings} mode={lightMode} />}
      {panelSettings[2].active && <News settings={panelSettings[2]} mode={lightMode} />}
      {panelSettings[3].active && <DailyQuote settings={panelSettings[3]} mode={lightMode} />}
      {panelSettings[4].active && <SearchBar settings={panelSettings[4]} mode={lightMode} />}
      {panelSettings[5].active && <CurrencyRates settings={panelSettings[5]} mode={lightMode} />}
      {panelSettings[6].active && <TabOpener settings={panelSettings[6]} mode={lightMode} />}
      <Backgrounds bgSettings={bgSettings} setBgSettings={setBgSettings} />
      <PanelChooser settings={panelSettings} setSettings={setPanelSettings} bgSettings={bgSettings} setBgSettings={setBgSettings} mode={lightMode} setMode={setLightMode} />
    </div> :
      <div className='App' style={{position: 'fixed', top: 0, right: 0, bottom: 0, left: 0,backgroundImage: `url(${bgSettings.current})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div style={{position: 'fixed', top: '20%', right: '10px', left: '10px', backgroundColor: 'rgba(34, 34, 34, 0.7)', backdropFilter: 'blur(4px)', color: '#eee', fontSize: '1.4rem', borderRadius: '10px', padding: '10px'}}>
        Sorry, this website was designed for larger screens.<br/>Check back on a device that has a screen resolution of at least 900x600.</div>
      </div>
  );
}

export default App;
