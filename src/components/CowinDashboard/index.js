import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByAge from '../VaccinationByAge'
import VaccinationByGender from '../VaccinationByGender'
import './index.css'

const responseStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class CowinDashboard extends Component {
  state = {
    data: [],
    apiStatus: responseStatus.initial,
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({apiStatus: responseStatus.loading})
    const url = 'https://apis.ccbp.in/covid-vaccination-data'
    const response = await fetch(url)
    if (response.ok === true) {
      const data = await response.json()
      const formattedData = {
        last7DaysData: data.last_7_days_vaccination.map(eachItem => ({
          vaccineDate: eachItem.vaccine_date,
          dose1: eachItem.dose_1,
          dose2: eachItem.dose_2,
        })),
        vaccinationByAge: data.vaccination_by_age,
        vaccinationByGender: data.vaccination_by_gender,
      }

      this.setState({data: formattedData, apiStatus: responseStatus.success})
    } else {
      this.setState({apiStatus: responseStatus.failure})
    }
  }

  renderCowinData = () => {
    const {data} = this.state
    const {last7DaysData, vaccinationByGender, vaccinationByAge} = data
    return (
      <>
        <div className="stat-container">
          <h1 className="stat-name">Vaccination Coverage</h1>
          <VaccinationCoverage last7DaysData={last7DaysData} />
        </div>
        <div className="stat-container">
          <h1 className="stat-name">Vaccination by gender</h1>
          <VaccinationByGender vaccinationByGender={vaccinationByGender} />
        </div>
        <div className="stat-container">
          <h1 className="stat-name">Vaccination by age</h1>
          <VaccinationByAge vaccinationByAge={vaccinationByAge} />
        </div>
      </>
    )
  }

  renderLoadingView = () => (
    <div data-testid="loader" className="loading-container">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderFailureView = () => (
    <div className="failure-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="failure-img"
      />
      <h1 className="failure-name">Something went wrong</h1>
    </div>
  )

  renderData = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case responseStatus.success:
        return this.renderCowinData()
      case responseStatus.loading:
        return this.renderLoadingView()
      case responseStatus.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="cowin-dashboard">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in./frontend/react-js/cowin-logo.png"
            alt="website logo"
            className="website-logo"
          />
          <h1 className="name">Co-WIN</h1>
        </div>
        <h1 className="main-heading">CoWIN Vaccination in India</h1>
        {this.renderData()}
      </div>
    )
  }
}

export default CowinDashboard
