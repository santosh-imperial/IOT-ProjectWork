import streamlit as st

def render_shopping_list(items):
    st.subheader("Shopping List for the Week")
    
    # Group items by category
    categories = {}
    for item in items:
        if item['category'] not in categories:
            categories[item['category']] = []
        categories[item['category']].append(item)
    
    # Display items by category
    for category, category_items in categories.items():
        st.markdown(f"**{category}**")
        for item in category_items:
            col1, col2 = st.columns([4, 1])
            with col1:
                st.checkbox(
                    item['name'],
                    value=item['checked'],
                    key=f"shopping_item_{item['id']}"
                )