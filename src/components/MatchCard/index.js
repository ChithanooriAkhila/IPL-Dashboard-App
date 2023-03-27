// Write your code here
const MatchCard = props => {
  const {recentMatchDetails} = props
  const {
    result,
    competingTeam,
    competingTeamLogo,
    matchStatus,
  } = recentMatchDetails

  return (
    <div>
      <img src={competingTeamLogo} alt={`latest match ${competingTeam}`} />
      <h1>{competingTeam}</h1>
      <p>{result}</p>
      <p>{matchStatus}</p>
    </div>
  )
}

export default MatchCard
