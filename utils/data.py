import pandas as pd
from datetime import datetime, timedelta
import numpy as np

def get_glucose_data():
    now = datetime.now()
    timestamps = [(now - timedelta(hours=x)).strftime('%Y-%m-%dT%H:%M:%S') for x in range(24, -1, -3)]
    
    return {
        'timestamp': timestamps,
        'value': [120, 110, 95, 130, 140, 125, 110, 105, 115],
        'meals': [
            {
                'timestamp': (now - timedelta(hours=17)).strftime('%Y-%m-%dT%H:%M:%S'),
                'name': 'Oatmeal with berries',
                'type': 'breakfast',
                'nutrition': {
                    'calories': 280,
                    'carbs': 45,
                    'protein': 8,
                    'fat': 5
                }
            },
            {
                'timestamp': (now - timedelta(hours=12)).strftime('%Y-%m-%dT%H:%M:%S'),
                'name': 'Chicken salad',
                'type': 'lunch',
                'nutrition': {
                    'calories': 420,
                    'carbs': 20,
                    'protein': 35,
                    'fat': 15
                }
            },
            {
                'timestamp': (now - timedelta(hours=6)).strftime('%Y-%m-%dT%H:%M:%S'),
                'name': 'Salmon with vegetables',
                'type': 'dinner',
                'nutrition': {
                    'calories': 460,
                    'carbs': 25,
                    'protein': 40,
                    'fat': 20
                }
            }
        ]
    }

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
def get_recipe():
    return {
        'ingredients': [
            {'name': 'Boneless chicken thigh', 'amount': '500g'},
            {'name': 'Tikka masala curry sauce', 'amount': '400g'},
            {'name': 'Naan bread', 'amount': '4 pieces'},
            {'name': 'Garlic', 'amount': '4 cloves'},
            {'name': 'Onion', 'amount': '1 large'}
        ],
        'steps': [
            {'step': 1, 'instruction': 'Place the chicken in the air fryer for 20 mins'},
            {'step': 2, 'instruction': 'Put the naan in the oven'},
            {'step': 3, 'instruction': 'Once the chicken is ready, add it to the tikka sauce'},
            {'step': 4, 'instruction': 'Garnish with onion'},
            {'step': 5, 'instruction': 'Once naan is ready, garnish with garlic'}
        ]
    }

def get_shopping_list():
    return [
        {'id': '1', 'name': 'Milk', 'category': 'Dairy', 'checked': False},
        {'id': '2', 'name': 'Bread', 'category': 'Bakery', 'checked': False},
        {'id': '3', 'name': 'Eggs', 'category': 'Dairy', 'checked': False},
        {'id': '4', 'name': 'Cheese', 'category': 'Dairy', 'checked': False},
        {'id': '5', 'name': 'Chicken', 'category': 'Meat', 'checked': False},
        {'id': '6', 'name': 'Spinach', 'category': 'Produce', 'checked': True},
        {'id': '7', 'name': 'Tomatoes', 'category': 'Produce', 'checked': True}
    ]

def get_time_in_range():
    return [
        {
            'label': 'Very High',
            'range': '>250 mg/dL',
            'percentage': 20,
            'time': '4h 48min',
            'color': '#F59E0B'  # amber-500
        },
        {
            'label': 'High',
            'range': '181-250 mg/dL',
            'percentage': 23,
            'time': '5h 31min',
            'color': '#FCD34D'  # yellow-300
        },
        {
            'label': 'Target Range',
            'range': '70-180 mg/dL',
            'percentage': 47,
            'time': '11h 17min',
            'color': '#10B981'  # green-500
        },
        {
            'label': 'Low',
            'range': '54-69 mg/dL',
            'percentage': 4,
            'time': '58min',
            'color': '#F87171'  # red-400
        },
        {
            'label': 'Very Low',
            'range': '<54 mg/dL',
            'percentage': 6,
            'time': '1h 26min',
            'color': '#DC2626'  # red-600
        }
    ]

def get_sleep_data():
    now = datetime.now()
    timestamps = [
        (now - timedelta(days=x)).strftime('%Y-%m-%dT%H:%M:%S') for x in range(7)
    ]
    durations = [480, 450, 500, 460, 470, 440, 430]  # Sleep durations in minutes

    return {
        'timestamp': timestamps,
        'duration': durations,
        'metrics': {
            'mean_sleep': np.mean(durations),
            'std_dev_sleep': np.std(durations)
        }
    }
