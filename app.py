import streamlit as st
from datetime import datetime, timedelta
import pandas as pd
import plotly.graph_objects as go
from plotly.subplots import make_subplots

from utils.data import (
    get_glucose_data,
    get_heart_rate_data,
    get_exercise_data,
    get_meal_recommendation,
    get_recipe,
    get_shopping_list,
    get_time_in_range
)
from components.welcome import render_welcome_section
from components.metrics import render_metrics_grid
from components.glucose import render_glucose_section
from components.heart_rate import render_heart_rate_section
from components.exercise import render_exercise_section
from components.recipe import render_recipe_section 
from components.shopping_list import render_shopping_list
from components.meal_log import render_meal_log
from components.time_in_range import render_time_in_range

# Page config
st.set_page_config(
    page_title="Health Dashboard",
    page_icon="🏥",
    layout="wide"
)

# Custom CSS
st.markdown("""
    <style>
        .main {
            padding: 1rem;
            max-width: 1280px;
            margin: 0 auto;
        }
        .stMetric {
            background-color: white;
            padding: 1rem;
            border-radius: 0.5rem;
            box-shadow: 0 1px 3px rgba(0,0,0,0.12);
        }
    </style>
""", unsafe_allow_html=True)

def main():
    st.set_page_config(
        page_title="Health Dashboard",
        layout="wide"
    )
    
    # Header
    st.title("Health Dashboard")
    
    # Welcome Section
    render_welcome_section(get_meal_recommendation())
    
    # Recipe Section
    recipe = get_recipe()
    render_recipe_section(recipe)
    
    # Shopping List
    shopping_list = get_shopping_list()
    render_shopping_list(shopping_list)
    
    # Metrics Grid
    render_metrics_grid()
    
    # Create two columns for the charts
    col1, col2 = st.columns(2)
    
    with col1:
        # Get data first to avoid multiple calls
        glucose_data = get_glucose_data()
        
        # Glucose Section
        render_glucose_section(glucose_data)
        
        # Meal Log - pass meals from glucose data
        if 'meals' in glucose_data:
            render_meal_log(glucose_data['meals'])
        
        # Time in Range
        render_time_in_range(get_time_in_range())
        
        # Heart Rate Section
        render_heart_rate_section(get_heart_rate_data())
        
        # Exercise Section
        render_exercise_section(get_exercise_data())
    
    with col2:
        # Recommendations
        st.subheader("Recommendations")
        st.write("Personalized health insights will appear here.")

if __name__ == "__main__":
    main()