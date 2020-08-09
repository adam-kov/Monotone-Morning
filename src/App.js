import React, { useState } from 'react';
import PanelChooser from './components/PanelChooser'
import Backgrounds from './components/panels/Backgrounds'
import TimeAndDate from './components/panels/TimeAndDate'
import News from './components/panels/News'
import DailyQuote from './components/panels/DailyQuote'
import SearchBar from './components/panels/SearchBar'
import CurrencyRates from './components/panels/CurrencyRates'
import TabOpener from './components/panels/TabOpener'
import './App.css';
// Lazy loading!

function App() {
  const [activePanels, setActivePanels] = useState({
    timeAndDate: true,
    news: false,
    dailyQuote: false,
    searchBar: false,
    currencyRates: false,
    tabOpener: false
  });
  const [panelSettings, setPanelSettings] = useState({
    backgrounds: {
      updateDaily: true,
      nsfw: false
    },
    timeAndDate: {
      showSeconds: true
    },
    news: {},
    dailyQuote: {
      from: 'all' // celebrities/philosophers/scientists/all
    },
    searchBar: {
      engine: 'google'
    },
    currencyRates: {
      show: ['usd', 'eur']
    },
    tabOpener: {
      openedToday: true,
      tabsToOpen: ['https://google.com']
    }
  });

  return (
    <div className="App">
      {activePanels.timeAndDate && <TimeAndDate settings={panelSettings.timeAndDate} />}
      {activePanels.news && <News settings={panelSettings.news} />}
      {activePanels.dailyQuote && <DailyQuote settings={panelSettings.dailyQuote} />}
      {activePanels.searchBar && <SearchBar settings={panelSettings.searchBar} />}
      {activePanels.currencyRates && <CurrencyRates settings={panelSettings.currencyRates} />}
      {activePanels.tabOpener && <TabOpener settings={panelSettings.tabOpener} />}
      <Backgrounds settings={panelSettings.backgrounds} />
      <PanelChooser settings={panelSettings} setSettings={setPanelSettings} />
    </div>
  );
}

export default App;
