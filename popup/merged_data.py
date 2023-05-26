import json

# Read data from post_flair.json
with open('post_flair.json', 'r') as file:
    post_flairs = json.load(file)

# Read data from user_flair.json
with open('user_flair.json', 'r') as file:
    user_flairs = json.load(file)

# Read data from post_content.json
with open('post_content.json', 'r') as file:
    post_content = json.load(file)

# Create a set to store existing post IDs
existing_post_ids = set(entry['post_id'] for entry in post_flairs)

# Create a new list to store the combined data
combined_data = []

# Iterate over the post_flairs
for post_flair in post_flairs:
    post_id = post_flair['post_id']
    flair = post_flair['flair']

    # Check if the post ID already exists in the combined data
    if any(entry['post_id'] == post_id for entry in combined_data):
        continue

    # Find the matching user flair and post content for the post ID
    matching_user_flair = next((user_flair for user_flair in user_flairs if user_flair == post_id), None)
    matching_post_content = next((content for content in post_content if content['id_post'] == post_id), None)

    # Create a new dictionary with the combined data
    combined_entry = {
        'post_id': post_id,
        'user_flair': matching_user_flair if matching_user_flair else None,
        'title': matching_post_content['title'] if matching_post_content else None,
        'text': matching_post_content['text'] if matching_post_content else None
    }

    # Append the combined entry to the list
    combined_data.append(combined_entry)

# Write the combined data to a new JSON file
with open('merged_data.json', 'w') as file:
    json.dump(combined_data, file)

print("Combined data exported to merged_data.json file.")
