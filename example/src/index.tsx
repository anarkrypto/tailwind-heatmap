import React from 'react'
import ReactDOM from 'react-dom/client'
import { HeatMap } from 'tailwind-heatmap'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <HeatMap />
  </React.StrictMode>,
)
