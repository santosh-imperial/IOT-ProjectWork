import streamlit as st
import plotly.graph_objects as go

def render_glucose_section(glucose_data):
    st.subheader("Glucose Trends")
    
    fig = go.Figure()
    
    # Add target range
    fig.add_hrect(
        y0=70, y1=180,
        fillcolor="rgba(0,255,0,0.1)",
        line_width=0,
        layer="below"
    )
    
    # Add glucose line
    fig.add_trace(go.Scatter(
        x=glucose_data['timestamp'],
        y=glucose_data['value'],
        mode='lines',
        name='Glucose',
        line=dict(color='#3B82F6', width=2)
    ))
    
    # Update layout
    fig.update_layout(
        height=400,
        margin=dict(l=0, r=0, t=0, b=0),
        yaxis_range=[40, 250],
        yaxis_title="mg/dL",
        xaxis_title="Time",
        showlegend=False
    )
    
    st.plotly_chart(fig, use_container_width=True)