import pandas as pd
from datetime import datetime, timedelta
import numpy as np

def get_glucose_data():
    # Generate sample glucose data
    dates = pd.date_range(start=datetime.now() - timedelta(days=1),
                         end=datetime.now(),
                         freq='30min')
    
    glucose_values = np.random.normal(120, 20, len(dates))
    glucose_values = np.clip(glucose_values, 70, 180)
    
    return pd.DataFrame({
        'timestamp': dates,
        'value': glucose_values
    })

def get_heart_rate_data():
    # Generate sample heart rate data
    dates = pd.date_range(start=datetime.now() - timedelta(days=1),
                         end=datetime.now(),
                         freq='30min')
    
    hr_values = np.random.normal(70, 10, len(dates))
    hr_values = np.clip(hr_values, 50, 100)
    
    return pd.DataFrame({
        'timestamp': dates,
        'value': hr_values
    })

def get_exercise_data():
    days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    minutes = np.random.randint(15, 45, 7)
    target = [30] * 7
    
    return pd.DataFrame({
        'day': days,
        'minutes': minutes,
        'target': target
    })

def get_meal_recommendation():
    return {
        'meal_type': 'Dinner',
        'main_dish': 'chicken tikka masala',
        'side_dish': 'Naan',
        'context': 'You have maintained your sugar levels and completed your daily steps. Enjoy this protein-rich meal!',
        'shopping_list': [
            'Boneless chicken thigh',
            'Tikka masala curry',
            'Naan (frozen)',
            'Garlic',
            'Onion'
        ]
    }