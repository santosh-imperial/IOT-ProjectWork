import pandas as pd
import numpy as np
import streamlit as st
import seaborn as sns
import matplotlib.pyplot as plt
from statsmodels.tsa.stattools import ccf

def render_cross_correlation_insights(glucose_data, sleep_data, heart_rate_data):
    st.subheader("Cross-Correlation Insights")

    # Merge datasets
    merged_data = pd.DataFrame({
        "Timestamp": glucose_data["timestamp"],
        "Glucose": glucose_data["Value"],
        "Sleep": sleep_data["duration"],  # Assuming 'duration' is in minutes
        "HeartRate": heart_rate_data["value"]  # Assuming 'value' is bpm
    }).dropna()

    # Correlation Matrix
    st.write("### Correlation Matrix")
    correlation_matrix = merged_data[["Glucose", "Sleep", "HeartRate"]].corr()
    fig, ax = plt.subplots(figsize=(6, 4))
    sns.heatmap(correlation_matrix, annot=True, cmap="coolwarm", ax=ax)
    st.pyplot(fig)

    # Time-Lag Analysis
    st.write("### Time-Lag Relationships")
    metric_x = st.selectbox("Select Primary Metric (X-axis)", ["Glucose", "Sleep", "HeartRate"])
    metric_y = st.selectbox("Select Secondary Metric (Y-axis)", ["Glucose", "Sleep", "HeartRate"], index=1)

    if metric_x != metric_y:
        # Calculate cross-correlation
        x_values = merged_data[metric_x].values
        y_values = merged_data[metric_y].values
        max_lags = st.slider("Select Maximum Lag (Days)", min_value=1, max_value=7, value=3)
        lags = np.arange(-max_lags, max_lags + 1)
        cross_corr = [ccf(x_values, y_values, lag=i) for i in lags]

        # Plot cross-correlation
        plt.figure(figsize=(8, 5))
        plt.bar(lags, cross_corr, color="skyblue")
        plt.axhline(y=0, color="black", linestyle="--")
        plt.title(f"Cross-Correlation between {metric_x} and {metric_y}")
        plt.xlabel("Lag (Days)")
        plt.ylabel("Cross-Correlation")
        st.pyplot(plt.gcf())
    else:
        st.warning("Please select different metrics for Time-Lag Analysis.")
