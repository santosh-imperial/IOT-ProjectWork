import streamlit as st
import pandas as pd

def render_meal_log(meals):
    st.subheader("Meal Log")
    
    # Convert meals to DataFrame for better display
    df = pd.DataFrame(meals)
    df['Time'] = pd.to_datetime(df['timestamp']).dt.strftime('%I:%M %p')
    
    # Format nutrition info
    def format_nutrition(row):
        if 'nutrition' in row and row['nutrition']:
            return f"{row['nutrition']['calories']} cal | {row['nutrition']['carbs']}g carbs | {row['nutrition']['protein']}g protein | {row['nutrition']['fat']}g fat"
        return '-'
    
    df['Nutrition'] = df.apply(format_nutrition, axis=1)
    
    # Display formatted table
    st.table(df[['Time', 'name', 'type', 'Nutrition']].rename(columns={
        'name': 'Meal',
        'type': 'Type'
    }))