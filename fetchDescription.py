# Create script to fetch the description of each vulnerability from the NVD database and store it in a file


import requests

# Define the base URL for the NVD API
base_url = "https://services.nvd.nist.gov/rest/json/cve/1.0/"

# Define the path to the file where we'll store the descriptions
output_file = "/Users/vijays/personal/react/react-book-cart/vulnerability_descriptions.txt"

# Define a function to fetch the description for a given CVE ID
def fetch_description(cve_id):
    # Construct the URL for the API call
    url = base_url + cve_id
    
    # Make the API call and get the response
    response = requests.get(url)
    
    # Extract the description from the response
    description = response.json()["result"]["description"][0]["value"]
    
    # Return the description
    return description

# Define a list of CVE IDs to fetch descriptions for
cve_ids = ["CVE-2021-1234", "CVE-2021-5678", "CVE-2021-9012"]

# Open the output file for writing
with open(output_file, "w") as f:
    # Loop over the CVE IDs and fetch the descriptions
    for cve_id in cve_ids:
        description = fetch_description(cve_id)
        
        # Write the description to the output file
        f.write(f"{cve_id}: {description}\n")

