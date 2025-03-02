import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'
import './forecast.css'

const Forecast = ({ data }) => {
  return (
    <>
      <label className='title'>Daily</label>
      <Accordion allowZeroExpanded>
        {data.forecast.forecastday.map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className='daily-item'>
                  <img
                    src={item.day.condition.icon}
                    className='icon-small'
                    alt='weather'
                  />
                  <label className='day'>{item?.date}</label>
                  <label className='description'>
                    {item.day.condition.text}
                  </label>
                  <label className='min-max'>
                    {Math.round(item.day.maxtemp_c)}°C /
                    {Math.round(item.day.mintemp_c)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className='daily-details-grid'>
                <div className='daily-details-grid-item'>
                  <label>Sunrise:</label>
                  <label>{item.astro.sunrise}</label>
                </div>
                <div className='daily-details-grid-item'>
                  <label>Sunset:</label>
                  <label>{item.astro.sunset}</label>
                </div>
                <div className='daily-details-grid-item'>
                  <label>Will It Rain:</label>
                  <label>{item.day.daily_will_it_rain}%</label>
                </div>
                <div className='daily-details-grid-item'>
                  <label>Wind speed:</label>
                  <label>{item.day.maxwind_kph} km/h</label>
                </div>
                <div className='daily-details-grid-item'>
                  <label>UV:</label>
                  <label>{item.day.uv}</label>
                </div>
                <div className='daily-details-grid-item'>
                  <label>Chance of Snow:</label>
                  <label>{item.day.daily_chance_of_snow}%</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  )
}

export default Forecast
