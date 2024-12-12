import pandas as pd
import streamlit as st
import plotly.graph_objects as go

def render_glucose_trends(glucose_data):
    st.subheader("Detailed Glucose Insights")

    # User options for timeframe
    timeframe = st.selectbox("Select Timeframe", options=["Last 7 Days", "Last 30 Days", "All Time"])
    if timeframe == "Last 7 Days":
        glucose_data = glucose_data
    elif timeframe == "Last 30 Days":
        glucose_data = glucose_data

    # Calculate rolling averages and variability
    glucose_data['RollingAvg'] = glucose_data['Value'].rolling(window=3).mean()
    mean_glucose = glucose_data['Value'].mean()
    std_dev = glucose_data['Value'].std()
    coefficient_of_variation = (std_dev / mean_glucose) * 100
    predicted_hba1c = (mean_glucose + 46.7) / 28.7

    # Display metrics
    st.write("### Summary Metrics")
    st.metric("Mean Glucose", f"{mean_glucose:.2f} mg/dL")
    st.metric("Standard Deviation", f"{std_dev:.2f} mg/dL")
    st.metric("Coefficient of Variation", f"{coefficient_of_variation:.2f}%")
    st.metric("Predicted HbA1c", f"{predicted_hba1c:.2f}%")

    # Plot glucose trends
    fig = go.Figure()
    fig.add_trace(go.Scatter(x=glucose_data['timestamp'], y=glucose_data['Value'],
                             mode='lines+markers', name='Glucose Levels'))
    fig.add_trace(go.Scatter(x=glucose_data['timestamp'], y=glucose_data['RollingAvg'],
                             mode='lines', name='3-Day Rolling Average'))
    fig.update_layout(
        title="Glucose Trends",
        xaxis_title="Date",
        yaxis_title="Glucose (mg/dL)",
        legend_title="Metrics",
        template="plotly_white"
    )
    st.plotly_chart(fig, use_container_width=True)
