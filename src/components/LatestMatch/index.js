// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    manOfTheMatch,
    result,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchDetails

  return (
    <div className="recent-match-container">
      <p>Latest Matches</p>
      <div>
        <h1>{competingTeam}</h1>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <div>
        <img src={competingTeamLogo} alt={`latest match ${competingTeam}`} />
      </div>
      <div>
        <h1>First Innings</h1>
        <p>{firstInnings}</p>
        <h1>Second Innings</h1>
        <p>{secondInnings}</p>
        <h1>Man of the Match</h1>
        <p>{manOfTheMatch}</p>
        <h1>UMpires</h1>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
