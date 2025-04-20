"use client"

import { useState, useEffect } from "react"
import "./ProgressPage.css"
import WeightChart from "./WeightChart"
import HealthSuggestions from "./HealthSuggestions"
import PersonalizedAdvice from "./PersonalizedAdvice"

// Sample data - in a real app, this would come from an API or database
const samplePatientData = {
  id: "P12345",
  name: "John Doe",
  age: 35,
  gender: "Male",
  height: 175, // cm
  initialWeight: 85, // kg
  registrationDate: "2023-10-15",
  weightHistory: [
    { date: "2023-10-15", weight: 85 },
    { date: "2023-10-29", weight: 84 },
    { date: "2023-11-12", weight: 83.2 },
    { date: "2023-11-26", weight: 82.5 },
    { date: "2023-12-10", weight: 81.8 },
    { date: "2023-12-24", weight: 81 },
    { date: "2024-01-07", weight: 80.3 },
    { date: "2024-01-21", weight: 79.5 },
  ],
}

export default function ProgressPage() {
  const [patientData, setPatientData] = useState(samplePatientData)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("progress")

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const calculateBMI = (weight, height) => {
    const heightInMeters = height / 100
    return (weight / (heightInMeters * heightInMeters)).toFixed(1)
  }

  const calculateProgress = () => {
    const initialWeight = patientData.weightHistory[0].weight
    const currentWeight = patientData.weightHistory[patientData.weightHistory.length - 1].weight
    const weightLoss = initialWeight - currentWeight
    const percentageLoss = ((weightLoss / initialWeight) * 100).toFixed(1)

    return {
      initialWeight,
      currentWeight,
      weightLoss,
      percentageLoss,
    }
  }

  const progress = calculateProgress()
  const currentBMI = calculateBMI(progress.currentWeight, patientData.height)

  if (loading) {
    return <div className="loading-container">Loading patient data...</div>
  }

  return (
    <div className="progress-page">
      <header className="progress-header">
        <h1>Patient Progress Dashboard</h1>
        <div className="patient-info">
          <div className="patient-name">{patientData.name}</div>
          <div className="patient-details">
            ID: {patientData.id} | Age: {patientData.age} | Gender: {patientData.gender}
          </div>
          <div className="registration-info">
            Registered on: {new Date(patientData.registrationDate).toLocaleDateString()}
          </div>
        </div>
      </header>

      <div className="tab-navigation">
        <button className={activeTab === "progress" ? "active" : ""} onClick={() => setActiveTab("progress")}>
          Progress
        </button>
        <button className={activeTab === "suggestions" ? "active" : ""} onClick={() => setActiveTab("suggestions")}>
          Health Suggestions
        </button>
        <button className={activeTab === "advice" ? "active" : ""} onClick={() => setActiveTab("advice")}>
          Personalized Advice
        </button>
      </div>

      <main className="progress-content">
        {activeTab === "progress" && (
          <div className="progress-section">
            <div className="progress-summary">
              <div className="summary-card">
                <h3>Current Weight</h3>
                <div className="metric">{progress.currentWeight} kg</div>
              </div>
              <div className="summary-card">
                <h3>Weight Loss</h3>
                <div className="metric">{progress.weightLoss.toFixed(1)} kg</div>
                <div className="sub-metric">({progress.percentageLoss}%)</div>
              </div>
              <div className="summary-card">
                <h3>Current BMI</h3>
                <div className="metric">{currentBMI}</div>
                <div className="sub-metric">{getBMICategory(currentBMI)}</div>
              </div>
              <div className="summary-card">
                <h3>Tracking Period</h3>
                <div className="metric">{calculateWeeks(patientData.weightHistory)} weeks</div>
              </div>
            </div>

            <div className="chart-container">
              <h2>Weight Progress Over Time</h2>
              <WeightChart weightHistory={patientData.weightHistory} />
            </div>
          </div>
        )}

        {activeTab === "suggestions" && (
          <HealthSuggestions
            bmi={currentBMI}
            weightLoss={progress.weightLoss}
            weightLossPercentage={progress.percentageLoss}
          />
        )}

        {activeTab === "advice" && (
          <PersonalizedAdvice patientData={patientData} progress={progress} bmi={currentBMI} />
        )}
      </main>
    </div>
  )
}

// Helper functions
function getBMICategory(bmi) {
  if (bmi < 18.5) return "Underweight"
  if (bmi < 25) return "Normal weight"
  if (bmi < 30) return "Overweight"
  return "Obese"
}

function calculateWeeks(weightHistory) {
  if (weightHistory.length < 2) return 0

  const firstDate = new Date(weightHistory[0].date)
  const lastDate = new Date(weightHistory[weightHistory.length - 1].date)
  const diffTime = Math.abs(lastDate - firstDate)
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  return Math.round(diffDays / 7)
}
