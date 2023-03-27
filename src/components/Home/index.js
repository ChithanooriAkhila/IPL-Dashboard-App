// Write your code here
import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {matches: [], isLoading: true}

  componentDidMount() {
    this.getMatches()
  }

  getMatches = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const {teams} = await response.json()

    const updatedTeams = teams.map(team => ({
      name: team.id,
      id: team.id,
      teamImageUrl: team.team_image_url,
    }))

    this.setState(prev => ({
      matches: updatedTeams,
      isLoading: !prev.isLoading,
    }))
  }

  render() {
    const {matches, isLoading} = this.state

    return (
      <div className="ipl-bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
          alt="ipl logo"
        />
        <h1>IPL Dashboard</h1>
        <ul>
          {isLoading ? (
            <div data-testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
            </div>
          ) : (
            matches.map(match => (
              <TeamCard matchDetails={match} key={match.id} />
            ))
          )}
        </ul>
      </div>
    )
  }
}

export default Home
