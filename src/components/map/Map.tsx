import React, { useRef } from 'react'
import WorldMap from "react-svg-worldmap";

import svgmap from 'svgmap-next'



export const Map = () => {

    const mapRef = useRef(null);

    const mapSvg = new svgmap({
        element: mapRef,
        data: {
            data: {
                gdp: {
                    name: 'GDP per capita',
                    format: '{0} USD',
                    thousandSeparator: ',',
                    thresholdMax: 50000,
                    thresholdMin: 1000
                },
                change: {
                    name: 'Change to year before',
                    format: '{0} %'
                }
            },
            applyData: 'gdp',
            values: {
                AF: { gdp: 587, change: 4.73 },
                AL: { gdp: 4583, change: 11.09 },
                DZ: { gdp: 4293, change: 10.01 }
            }
        }
    })
    return (
        <div className='map' ref={mapRef}></div>
    )
}

// later on, before leaving the page, eg. `turbolinks:before-cache`
