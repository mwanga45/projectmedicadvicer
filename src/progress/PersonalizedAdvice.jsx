import "./PersonalizesAdvice.css"

export default function PersonalizedAdvice({ patientData, progress, bmi }) {

  const heightInMeters = patientData.height / 100
  const minIdealWeight = (18.5 * heightInMeters * heightInMeters).toFixed(1)
  const maxIdealWeight = (24.9 * heightInMeters * heightInMeters).toFixed(1)

  
  const firstDate = new Date(patientData.weightHistory[0].date)
  const lastDate = new Date(patientData.weightHistory[patientData.weightHistory.length - 1].date)
  const weeksDifference = Math.max(1, Math.round((lastDate - firstDate) / (7 * 24 * 60 * 60 * 1000)))
  const weeklyLossRate = (progress.weightLoss / weeksDifference).toFixed(2)

  
  const isHealthyRate = weeklyLossRate >= 0.5 && weeklyLossRate <= 2

  
  const weightToLose = Math.max(0, progress.currentWeight - maxIdealWeight)
  const estimatedWeeks = weightToLose > 0 && weeklyLossRate > 0 ? Math.ceil(weightToLose / weeklyLossRate) : 0

  
  const generateAdvice = () => {
    const advice = []

    
    if (Number.parseFloat(bmi) > 25) {
      if (progress.weightLoss <= 0) {
        advice.push({
          title: "Getting Started with Weight Loss",
          content:
            "Your current weight is above the recommended range for your height. Consider setting an initial goal of losing 5-10% of your body weight, which would be approximately " +
            (progress.currentWeight * 0.05).toFixed(1) +
            " to " +
            (progress.currentWeight * 0.1).toFixed(1) +
            " kg.",
        })
      } else if (!isHealthyRate && weeklyLossRate > 2) {
        advice.push({
          title: "Adjusting Your Weight Loss Rate",
          content:
            "You're currently losing weight at a rate of " +
            weeklyLossRate +
            " kg per week, which is faster than the recommended 0.5-2 kg per week. While this shows great progress, consider adjusting your approach to ensure sustainable, long-term results.",
        })
      } else if (!isHealthyRate && weeklyLossRate < 0.5) {
        advice.push({
          title: "Enhancing Your Weight Loss Progress",
          content:
            "You're making progress at " +
            weeklyLossRate +
            " kg per week. To reach the recommended rate of 0.5-2 kg per week, consider reviewing your calorie intake and increasing your physical activity.",
        })
      } else {
        advice.push({
          title: "Maintaining Healthy Progress",
          content:
            "You're losing weight at a healthy rate of " +
            weeklyLossRate +
            " kg per week. Keep up the good work! At this rate, you could reach your ideal weight range in approximately " +
            estimatedWeeks +
            " weeks.",
        })
      }
    } else if (Number.parseFloat(bmi) < 18.5) {
      advice.push({
        title: "Healthy Weight Gain",
        content:
          "Your current BMI indicates you're underweight. Consider working with a nutritionist to develop a plan to gain weight in a healthy way, focusing on nutrient-dense foods and strength training.",
      })
    } else {
      advice.push({
        title: "Maintaining Your Healthy Weight",
        content:
          "Your current weight is within the healthy range for your height. Focus on maintaining your weight through balanced nutrition and regular physical activity.",
      })
    }

    
    if (patientData.age < 30) {
      advice.push({
        title: "Young Adult Health Focus",
        content:
          "At your age, establishing healthy habits now will benefit you throughout your life. Focus on building muscle through strength training 2-3 times per week, which will boost your metabolism and support long-term weight management.",
      })
    } else if (patientData.age < 50) {
      advice.push({
        title: "Middle Age Health Strategies",
        content:
          "As metabolism naturally slows in your 30s and 40s, focus on maintaining muscle mass through regular strength training and staying active throughout the day. Consider adding high-intensity interval training (HIIT) to your routine for efficient calorie burning.",
      })
    } else {
      advice.push({
        title: "Healthy Aging",
        content:
          "At your age, focus on maintaining muscle mass and bone density through regular strength training and weight-bearing exercises. Protein intake becomes increasingly important, so ensure you're getting adequate protein with each meal.",
      })
    }

    
    if (progress.weightLoss > 5) {
      advice.push({
        title: "Preventing Weight Regain",
        content:
          "You've made significant progress, losing " +
          progress.weightLoss.toFixed(1) +
          " kg. As you continue your journey, gradually increase your calorie intake while maintaining your activity level to prevent regaining weight. Consider transitioning to a maintenance plan once you reach your goal weight.",
      })
    }

    return advice
  }

  const personalizedAdvice = generateAdvice()

  return (
    <div className="personalized-advice">
      <section className="advice-overview">
        <h2>Your Personalized Health Assessment</h2>

        <div className="advice-metrics">
          <div className="metric-card">
            <h3>Ideal Weight Range</h3>
            <div className="metric-value">
              {minIdealWeight} - {maxIdealWeight} kg
            </div>
            <div className="metric-description">Based on your height of {patientData.height} cm</div>
          </div>

          <div className="metric-card">
            <h3>Current Progress</h3>
            <div className="metric-value">{progress.weightLoss.toFixed(1)} kg lost</div>
            <div className="metric-description">
              {progress.weightLoss > 0
                ? `That's ${progress.percentageLoss}% of your starting weight`
                : "Focus on creating a sustainable plan"}
            </div>
          </div>

          <div className="metric-card">
            <h3>Weekly Rate</h3>
            <div className={`metric-value ${isHealthyRate ? "healthy-rate" : "attention-rate"}`}>
              {weeklyLossRate} kg/week
            </div>
            <div className="metric-description">
              {isHealthyRate
                ? "This is a healthy, sustainable rate"
                : weeklyLossRate > 2
                  ? "This rate may be too aggressive for long-term success"
                  : "Consider adjusting your approach for better results"}
            </div>
          </div>

          {weightToLose > 0 && (
            <div className="metric-card">
              <h3>Projected Timeline</h3>
              <div className="metric-value">~{estimatedWeeks} weeks</div>
              <div className="metric-description">Estimated time to reach ideal weight range at current rate</div>
            </div>
          )}
        </div>
      </section>

      <section className="personalized-recommendations">
        <h2>Your Personalized Recommendations</h2>

        <div className="advice-cards">
          {personalizedAdvice.map((advice, index) => (
            <div className="advice-card" key={index}>
              <h3>{advice.title}</h3>
              <p>{advice.content}</p>
            </div>
          ))}

          <div className="advice-card highlight-card">
            <h3>Next Steps</h3>
            <p>
              Schedule a follow-up appointment to discuss your progress and adjust your plan as needed. Consider keeping
              a food and activity journal to identify patterns and areas for improvement.
            </p>
            <button className="schedule-button">Schedule Appointment</button>
          </div>
        </div>
      </section>

      <section className="resources-section">
        <h2>Additional Resources</h2>
        <div className="resources-grid">
          <div className="resource-card">
            <h3>Nutrition Guidance</h3>
            <p>Access meal plans and recipes tailored to your health goals</p>
            <button className="resource-button">View Resources</button>
          </div>
          <div className="resource-card">
            <h3>Exercise Programs</h3>
            <p>Find workout routines suitable for your fitness level</p>
            <button className="resource-button">View Programs</button>
          </div>
          <div className="resource-card">
            <h3>Mental Wellbeing</h3>
            <p>Resources for managing stress and maintaining motivation</p>
            <button className="resource-button">Learn More</button>
          </div>
          <div className="resource-card">
            <h3>Community Support</h3>
            <p>Connect with others on similar health journeys</p>
            <button className="resource-button">Join Community</button>
          </div>
        </div>
      </section>
    </div>
  )
}
