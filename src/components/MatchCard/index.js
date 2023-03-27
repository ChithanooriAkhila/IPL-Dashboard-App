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
    <li>
      <img src={competingTeamLogo} alt={`competing team ${competingTeam}}`} />
      <p>{competingTeam}</p>
      <p>{result}</p>
      <p>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
