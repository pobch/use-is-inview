import React from 'react'
import { useIsInView } from './useIsInView'

function App() {
  const { elementRef, isIntersecting } = useIsInView<HTMLDivElement>()
  console.log('is intersect:', isIntersecting)
  return (
    <div>
      <div style={{ height: '200px', border: '1px solid grey' }}>Element</div>
      <div style={{ height: '200px', border: '1px solid grey' }}>Element</div>
      <div style={{ height: '200px', border: '1px solid grey' }}>Element</div>
      <div style={{ height: '200px', border: '1px solid grey' }}>Element</div>
      <div style={{ height: '200px', border: '1px solid grey' }}>Element</div>
      <div style={{ height: '200px', border: '1px solid grey' }}>Element</div>
      <div style={{ height: '200px', border: '1px solid grey' }}>Element</div>

      <div style={{ height: '200px', background: 'salmon' }} ref={elementRef}>
        Target Element
      </div>

      <div style={{ height: '200px', border: '1px solid grey' }}>Element</div>
      <div style={{ height: '200px', border: '1px solid grey' }}>Element</div>
      <div style={{ height: '200px', border: '1px solid grey' }}>Element</div>
      <div style={{ height: '200px', border: '1px solid grey' }}>Element</div>
      <div style={{ height: '200px', border: '1px solid grey' }}>Element</div>
      <div style={{ height: '200px', border: '1px solid grey' }}>Element</div>
    </div>
  )
}

export { App }
