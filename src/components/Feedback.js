import { useState } from "react"

const Button = (props) => {
    const { handleClick, text } = props
    return (
        <button onClick={handleClick}>{text}</button>
    )
}

const Statistics = (props) => {
    const { good, neutral, bad } = props
    return (
        <>
            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
            <p>all { }</p>
            <p>average { }</p>
        </>
    )
}


const Feedback = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const goodClick = () => setGood(good + 1)
    const neutralClick = () => setNeutral(neutral + 1)
    const badClick = () => setBad(bad + 1)
    const resetAllClick = () => {
        setGood(0)
        setNeutral(0)
        setBad(0)
    }

    const all = () => good + bad + neutral

    return (
        <div>
            <h2>Give Feedback</h2>
            <Button handleClick={goodClick} text={'good'} />
            <Button handleClick={neutralClick} text={'neutral'} />
            <Button handleClick={badClick} text={'bad'} />
            <Button handleClick={resetAllClick} text={'Reset All'} />

            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

export default Feedback