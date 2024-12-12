import streamlit as st

def render_welcome_section(recommendation):
    st.header(f"Hi Santosh, Welcome Back!")
    
    with st.container():
        st.markdown(f"""
        ### Meal Recommendation
        For your **{recommendation['meal_type']}**, try {recommendation['main_dish']} with {recommendation['side_dish']}.
        
        {recommendation['context']}
        
        **Shopping List:**
        """)
        
        for item in recommendation['shopping_list']:
            st.markdown(f"- {item}")
