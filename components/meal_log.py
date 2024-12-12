import streamlit as st
import pandas as pd
from datetime import datetime

def format_nutrition(nutrition):
    if not nutrition:
        return '-'
    return (f"{nutrition['calories']} cal | "
            f"{nutrition['carbs']}g carbs | "
            f"{nutrition['protein']}g protein | "
            f"{nutrition['fat']}g fat")

def format_timestamp(timestamp):
    return datetime.strptime(timestamp, '%Y-%m-%dT%H:%M:%S').strftime('%I:%M %p')

def render_meal_log(meals):
    st.subheader("Meal Log")
    
    if not meals:
        st.info("No meals logged today")
        return
        
    # Create DataFrame with required columns
    data = [{
        'Time': format_timestamp(meal['timestamp']),
        'Meal': meal['name'],
        'Type': meal['type'].title(),
        'Nutrition': format_nutrition(meal.get('nutrition'))
    } for meal in meals]
    
    df = pd.DataFrame(data)
    
    # Display table with formatted columns
    st.table(df)