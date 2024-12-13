import streamlit as st

def render_recipe_section(recipe):
    st.subheader("Recipe")
    
    col1, col2 = st.columns([1, 1])

    with col1:
        # Ingredient List Card
        st.markdown("### Ingredients")
        for ingredient in recipe['ingredients']:
            st.markdown(f"- {ingredient['name']}")
        
        # Recipe Steps Card
        st.markdown("### Instructions")
        for step in recipe['steps']:
            st.markdown(f"{step['step']}. {step['instruction']}")
    
    with col2:
        st.image(
            "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=400&h=200&fit=crop",
            caption="Chicken Tikka Masala",
            use_container_width=False
        )
    
