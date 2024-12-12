import streamlit as st
import plotly.graph_objects as go

def render_exercise_section(exercise_data):
    st.subheader("Exercise Progress")
    
    fig = go.Figure()
    
    # Add exercise bars
    fig.add_trace(go.Bar(
        x=exercise_data['day'],
        y=exercise_data['minutes'],
        name='Actual Exercise',
        marker_color='#007BFF'
    ))
    
    # Add target line
    fig.add_trace(go.Scatter(
        x=exercise_data['day'],
        y=exercise_data['target'],
        name='Target Goal',
        line=dict(color='#DC3545', width=2)
    ))
    
    # Update layout
    fig.update_layout(
        height=300,
        margin=dict(l=0, r=0, t=0, b=0),
        yaxis_title="Minutes",
        barmode='group',
        showlegend=True
    )
    
    st.plotly_chart(fig, use_container_width=True)
    
    # Exercise tracking
    st.subheader("Today's Exercises")
    
    exercises = [
        {"name": "Morning Walk", "target": "30 min", "completed": True},
        {"name": "Push-ups", "target": "20 reps", "completed": True},
        {"name": "Yoga", "target": "20 min", "completed": False}
    ]
    
    for exercise in exercises:
        col1, col2, col3 = st.columns([3,2,1])
        with col1:
            st.write(exercise["name"])
        with col2:
            st.write(exercise["target"])
        with col3:
            st.write("✅" if exercise["completed"] else "⏳")