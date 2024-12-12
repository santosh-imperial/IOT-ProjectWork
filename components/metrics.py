import streamlit as st

def render_metrics_grid():
    col1, col2, col3, col4 = st.columns(4)
    
    with col1:
        st.metric(
            label="Blood Glucose",
            value="95 mg/dL",
            delta="5 mg/dL"
        )
    
    with col2:
        st.metric(
            label="Heart Rate",
            value="72 BPM",
            delta="-3 BPM"
        )
    
    with col3:
        st.metric(
            label="Sleep",
            value="7h 23m",
            delta="32m"
        )
    
    with col4:
        st.metric(
            label="Daily Calories",
            value="1,850 cal",
            delta="-150 cal"
        )