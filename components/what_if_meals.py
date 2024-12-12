import streamlit as st
import pandas as pd
import numpy as np

def render_what_if_scenarios():
    st.subheader("What-If Scenarios for Meals")

    # Input: Hypothetical Meal
    st.write("### Input a Hypothetical Meal")
    meal_name = st.text_input("Meal Name", "Custom Meal")
    meal_time = st.time_input("Meal Time")
    calories = st.number_input("Calories (kcal)", min_value=0, step=10, value=500)
    carbs = st.number_input("Carbohydrates (g)", min_value=0, step=5, value=50)
    protein = st.number_input("Protein (g)", min_value=0, step=5, value=20)
    fat = st.number_input("Fat (g)", min_value=0, step=5, value=10)

    # Simulate Glucose Response
    glycemic_index = st.slider("Glycemic Index (GI)", min_value=0, max_value=100, value=55)
    glycemic_load = (carbs * glycemic_index) / 100
    glucose_response = np.clip(5 + glycemic_load, 0, 200)  # Simple simulation for postprandial glucose

    # Simulate Sleep Impact
    if meal_time.hour >= 20:
        sleep_impact = "Negative (Late meal; may disrupt sleep quality)"
    elif fat > 20:
        sleep_impact = "Moderate (High-fat meals may reduce sleep latency)"
    else:
        sleep_impact = "Positive (Protein-rich meal; supports better sleep)"

    # Simulate Heart Rate Impact
    if carbs > 50:
        hr_impact = "Slight Increase (High carbs may elevate HR)"
    elif protein > 30:
        hr_impact = "Stable (Protein supports recovery)"
    else:
        hr_impact = "Minimal (Balanced meal)"

    # Display Results
    st.write("### Predicted Impacts")
    st.metric("Postprandial Glucose Response", f"{glucose_response:.2f} mg/dL")
    st.write(f"**Sleep Impact:** {sleep_impact}")
    st.write(f"**Heart Rate Impact:** {hr_impact}")

    # Optional: Visualize Predicted Glucose Trends
    st.write("### Visualized Impact on Glucose Trends")
    timestamps = pd.date_range(start=pd.Timestamp.now(), periods=10, freq="15min")
    glucose_trend = np.clip(100 + np.cumsum(np.random.normal(0, 1, 10)) + glycemic_load, 80, 200)
    simulated_data = pd.DataFrame({"Timestamp": timestamps, "Predicted Glucose": glucose_trend})

    st.line_chart(simulated_data.set_index("Timestamp"))

