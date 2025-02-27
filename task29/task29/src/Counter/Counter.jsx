import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

export function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <>
            <>
                <button onClick={() => dispatch(increment())}> + </button>
                <span> Value : {count}</span>
                <button onClick={() => dispatch(decrement())}> - </button>
            </>
        </>
    )
}