import "./HealthSuggestions.css"

export default function HealthSuggestions({ bmi, weightLoss, weightLossPercentage }) {
  const getBMISuggestions = () => {
    const bmiValue = Number.parseFloat(bmi)

    if (bmiValue < 18.5) {
      return {
        category: "Underweight",
        suggestions: [
          "Increase your caloric intake with nutrient-dense foods",
          "Add more protein to your diet to build muscle mass",
          "Consider strength training to build muscle",
          "Consult with a nutritionist for a personalized meal plan",
          "Have regular small meals throughout the day",
        ],
      }
    } else if (bmiValue < 25) {
      return {
        category: "Normal weight",
        suggestions: [
          "Maintain your current balanced diet",
          "Stay physically active with regular exercise",
          "Focus on strength training and cardiovascular fitness",
          "Ensure adequate hydration and sleep",
          "Continue regular health check-ups",
        ],
      }
    } else if (bmiValue < 30) {
      return {
        category: "Overweight",
        suggestions: [
          "Aim for a moderate calorie deficit of 500 calories per day",
          "Increase physical activity to at least 150 minutes per week",
          "Focus on whole foods and reduce processed food intake",
          "Monitor portion sizes during meals",
          "Consider intermittent fasting after consulting with your doctor",
        ],
      }
    } else {
      return {
        category: "Obese",
        suggestions: [
          "Consult with healthcare providers for a comprehensive weight loss plan",
          "Aim for gradual weight loss of 1-2 pounds per week",
          "Consider working with a registered dietitian",
          "Increase daily physical activity and reduce sedentary time",
          "Monitor health markers like blood pressure and blood sugar regularly",
        ],
      }
    }
  }

  const getProgressSuggestions = () => {
    if (weightLoss <= 0) {
      return [
        "Review your current diet and identify areas for improvement",
        "Increase physical activity, aiming for at least 30 minutes daily",
        "Track your food intake to become more aware of your eating habits",
        "Ensure you're getting enough sleep, as poor sleep can affect weight",
        "Manage stress through meditation, yoga, or other relaxation techniques",
      ]
    } else if (weightLoss < 5) {
      return [
        "You're making progress! Continue with your current approach",
        "Try adding variety to your exercise routine to prevent plateaus",
        "Ensure you're staying hydrated throughout the day",
        "Consider adding strength training if you haven't already",
        "Focus on nutrient-dense foods to maintain energy levels",
      ]
    } else {
      return [
        "Great progress! Ensure your rate of weight loss remains healthy",
        "Focus on maintaining your new habits for long-term success",
        "Adjust your calorie intake as needed based on your new weight",
        "Continue regular physical activity and consider increasing intensity",
        "Celebrate your achievements and set new health goals",
      ]
    }
  }

  const bmiInfo = getBMISuggestions()
  const progressSuggestions = getProgressSuggestions()

  return (
    <div className="health-suggestions">
      <section className="bmi-section">
        <h2>BMI Category: {bmiInfo.category}</h2>
        <p className="bmi-value">
          Your current BMI is <span>{bmi}</span>
        </p>

        <div className="bmi-scale">
          <div className="bmi-range underweight">Underweight</div>
          <div className="bmi-range normal">Normal</div>
          <div className="bmi-range overweight">Overweight</div>
          <div className="bmi-range obese">Obese</div>
          <div
            className="bmi-marker"
            style={{ left: `${Math.min(100, Math.max(0, (Number.parseFloat(bmi) - 15) * 3.33))}%` }}
          ></div>
        </div>

        <h3>Recommendations based on your BMI:</h3>
        <ul className="suggestion-list">
          {bmiInfo.suggestions.map((suggestion, index) => (
            <li key={index}>{suggestion}</li>
          ))}
        </ul>
      </section>

      <section className="progress-section">
        <h2>Weight Loss Progress</h2>
        <p className="progress-value">
          You've lost <span>{weightLoss.toFixed(1)} kg</span> ({weightLossPercentage}%) since starting
        </p>

        <h3>Recommendations based on your progress:</h3>
        <ul className="suggestion-list">
          {progressSuggestions.map((suggestion, index) => (
            <li key={index}>{suggestion}</li>
          ))}
        </ul>
      </section>

      <section className="general-tips">
        <h2>General Health Tips</h2>
        <div className="tips-grid">
          <div className="tip-card">
            <h3>Nutrition</h3>
            <ul>
              <li>Eat plenty of fruits and vegetables</li>
              <li>Choose whole grains over refined grains</li>
              <li>Include lean protein sources</li>
              <li>Limit added sugars and processed foods</li>
            </ul>
          </div>
          <div className="tip-card">
            <h3>Physical Activity</h3>
            <ul>
              <li>Aim for 150 minutes of moderate activity weekly</li>
              <li>Include both cardio and strength training</li>
              <li>Take regular breaks from sitting</li>
              <li>Find activities you enjoy to stay motivated</li>
            </ul>
          </div>
          <div className="tip-card">
            <h3>Lifestyle</h3>
            <ul>
              <li>Prioritize 7-9 hours of quality sleep</li>
              <li>Manage stress through mindfulness practices</li>
              <li>Stay hydrated throughout the day</li>
              <li>Limit alcohol consumption</li>
            </ul>
          </div>
          <div className="tip-card">
            <h3>Mental Wellbeing</h3>
            <ul>
              <li>Practice positive self-talk</li>
              <li>Celebrate small victories</li>
              <li>Connect with supportive people</li>
              <li>Consider journaling your progress</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
