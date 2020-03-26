import * as React from 'react'
import {renderHook, act} from '@testing-library/react-hooks'
import useSafeState from '../useSafeState'

test('useSafeState correctly update state', () => {
  const {result} = renderHook(() => useSafeState('My value'))
  let [state, setState] = result.current

  expect(state).toBe("My value")
  
  act(() => {
    setState("Other value")
  })
  
  expect(result.current[0]).toBe("Other value")
})

test('useSafeState not call on unmount', () => {
  const wrapper = props => <div {...props} />
    
  const {result, unmount} = renderHook(() => useSafeState('My value'), { wrapper })
  let [state, setState] = result.current

  expect(state).toBe("My value")
  
  act(() => {
    setState("Other value")
  })
  
  expect(result.current[0]).toBe("Other value")

  unmount()
 
  act(() => {
    setState("Forbiden value")
  })

  expect(result.current[0]).toBe("Other value")
})