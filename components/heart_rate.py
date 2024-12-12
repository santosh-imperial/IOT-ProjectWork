import streamlit as st
import plotly.graph_objects as go

def render_heart_rate_section(hr_data):
    st.subheader("Heart Rate")
    
    current_hr = int(hr_data['value'].iloc[-1])
    st.metric("Current Heart Rate", f"{current_hr} BPM")
    
    fig = go.Figure()
    
    # Add heart rate line with gradient fill
    fig.add_trace(go.Scatter(
        x=hr_data['timestamp'],
        y=hr_data['value'],
        fill='tozeroy',
        fillcolor='rgba(255,107,107,0.2)',
        line=dict(color='#FF6B6B', width=2),
        name='Heart Rate'
    ))
    
    # Update layout
    fig.update_layout(
        height=300,
        margin=dict(l=0, r=0, t=0, b=0),
        yaxis_range=[40, 200],
        yaxis_title="BPM",
        xaxis_title="Time",
        showlegend=False
    )
    
    st.plotly_chart(fig, use_container_width=True)