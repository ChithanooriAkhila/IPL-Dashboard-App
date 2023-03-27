// Write your code here
import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class Home extends Component {
  state = {
    teamBannerUrl: '',
    latestMatchDetails: [],
    recentMatches: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getMatchDetails()
  }

  getMatchDetails = async () => {
    const {match} = this.props
    const {id} = match.params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const MatchDetails = await response.json()
    const teamBannerUrl = MatchDetails.team_banner_url
    const eachMatchDetails = MatchDetails.latest_match_details
    const recentMatches = MatchDetails.recent_matches

    const updatedMatchDetails = {
      umpires: eachMatchDetails.umpires,
      result: eachMatchDetails.result,
      manOfTheMatch: eachMatchDetails.man_of_the_match,
      id: eachMatchDetails.id,
      date: eachMatchDetails.date,
      venue: eachMatchDetails.venue,
      competingTeam: eachMatchDetails.competing_team,
      competingTeamLogo: eachMatchDetails.competing_team_logo,
      firstInnings: eachMatchDetails.first_innings,
      secondInnings: eachMatchDetails.second_innings,
      matchStatus: eachMatchDetails.match_status,
    }

    const updatedRecentMatches = recentMatches.map(eachMatch => ({
      umpires: eachMatch.umpires,
      result: eachMatch.result,
      manOfTheMatch: eachMatch.man_of_the_match,
      id: eachMatch.id,
      date: eachMatch.date,
      venue: eachMatch.venue,
      competingTeam: eachMatch.competing_team,
      competingTeamLogo: eachMatch.competing_team_logo,
      firstInnings: eachMatch.first_innings,
      secondInnings: eachMatch.second_innings,
      matchStatus: eachMatch.match_status,
    }))

    this.setState(prev => ({
      teamBannerUrl,
      latestMatchDetails: updatedMatchDetails,
      recentMatches: updatedRecentMatches,
      isLoading: !prev.isLoading,
    }))
  }

  render() {
    const {
      teamBannerUrl,
      latestMatchDetails,
      recentMatches,
      isLoading,
    } = this.state

    return (
      <div className="ipl-bg-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div>
            <img src={teamBannerUrl} alt="team banner" />
            <LatestMatch latestMatchDetails={latestMatchDetails} />
            <ul>
              {recentMatches.map(recentMatch => (
                <MatchCard
                  recentMatchDetails={recentMatch}
                  key={recentMatch.id}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Home
