import streamlit as st
import plotly.graph_objects as go

def render_time_in_range(ranges):
    st.subheader("Time in Ranges")
    
    # Create a figure for the stacked bar chart
    fig = go.Figure()
    
    # Add bars for each range
    y_position = 0
    for range_data in ranges:
        fig.add_trace(go.Bar(
            x=[range_data['percentage']],
            y=['Time in Range'],
            orientation='h',
            name=f"{range_data['label']} ({range_data['range']})",
            marker_color=range_data['color'].replace('bg-', '#'),
            text=f"{range_data['percentage']}% ({range_data['time']})",
            textposition='inside',
            hoverinfo='text',
            hovertext=f"{range_data['label']}: {range_data['percentage']}% ({range_data['time']})"
        ))
    
    # Update layout
    fig.update_layout(
        barmode='stack',
        height=200,
        margin=dict(l=0, r=0, t=30, b=0),
        showlegend=True,
        legend=dict(
            orientation="h",
            yanchor="bottom",
            y=1.02,
            xanchor="right",
            x=1
        ),
        xaxis=dict(
            showticklabels=False,
            range=[0, 100]
        ),
        yaxis=dict(
            showticklabels=False
        )
    )
    
    st.plotly_chart(fig, use_container_width=True)