import React, { useEffect, useState } from "react";
import { ResponsiveChoroplethCanvas } from '@nivo/geo'
import countries from "./world_countries";
import code from "./country_index";
import Axios from 'axios';
import { BASE_URL } from "../api";

const MyResponsiveChoroplethCanvas = ({ data, max }) => (
  <ResponsiveChoroplethCanvas
      data={data}
      features={countries.features}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      colors="YlOrRd"
      domain={[ 0, Number(max) ]}
      unknownColor="#666666"
      label="properties.name"
      valueFormat=".2s"
      projectionTranslation={[ 0.5, 0.5 ]}
      projectionRotation={[ 0, 0, 0 ]}
      enableGraticule={true}
      graticuleLineColor="#dddddd"
      borderWidth={0.5}
      borderColor="#152538"
      legends={[
          {
              anchor: 'bottom-left',
              direction: 'column',
              justify: true,
              translateX: 20,
              translateY: -120,
              itemsSpacing: 0,
              itemWidth: 70,
              itemHeight: 18,
              itemDirection: 'left-to-right',
              itemOpacity: 0.85,
              symbolSize: 18,
              effects: [
                {
                    on: 'hover',
                    style: {
                        itemTextColor: '#000000',
                        itemOpacity: 1
                    }
                }
            ]
          }
      ]}
  />
)

export default function App() {
  const [data,setData] = useState([])
  const [max, setMax] = useState("")

  useEffect(() => {
    Axios({
      method: "POST",
      url: `${BASE_URL}/campaign/map-list`,
      data: {},
    }).then(({ data }) => {
      let result = []
      for(var cnt=0; cnt < data.items.length; cnt++) {
        let info = {}
        if (code[data.items[cnt].country]) {
          info['id'] = code[data.items[cnt].country]
        }
        else {
          info['id'] = null
        }
        info['value'] = data.items[cnt].value
        result.push(info)
      }
      setMax(result[result.length - 1].value)
      setData(result)
    })
  }, [])

  return (
    <div className="footerChild" style={{ width: 630, height: 502 }}>
      <MyResponsiveChoroplethCanvas data={data} max={max} />
    </div>
  );
}

