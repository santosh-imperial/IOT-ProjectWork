import streamlit as st

def render_recipe_section(recipe):
    st.subheader("Recipe")
    
    col1, col2 = st.columns([1, 1])
    
    with col1:
        st.image(
            "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800&h=600&fit=crop",
            caption="Chicken Tikka Masala",
            use_container_width=True
        )
    
    with col2:
        # Ingredient List Card
        st.markdown("### Ingredients")
        for ingredient in recipe['ingredients']:
            st.markdown(f"- {ingredient['name']}")
        
        # Recipe Steps Card
        st.markdown("### Instructions")
        for step in recipe['steps']:
            st.markdown(f"{step['step']}. {step['instruction']}")