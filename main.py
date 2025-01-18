from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import json
from models import Location

with open('./vite-project/src/data/locations.json') as f:
    locations = json.load(f)
    print(locations['locationsList'][0])
# from "./vite-project/src/data/locations.json" import locations

app = FastAPI()
origins = ["http://localhost:5173"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
@app.get("/")
async def get_locations():
    try:
        return locations['locationsList']
    except KeyError:
        raise HTTPException(status_code=500, detail="Error accessing locations data")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/locations/{location_id}")
async def get_location(location_id: str):
    # Convert location_id to int for comparison since IDs in JSON are likely integers
    try:
        location = next(
            (item for item in locations['locationsList'] if item['id'] == int(location_id)), 
            None
        )
        if location is None:
            raise HTTPException(status_code=404, detail="Location not found")
        return location  # Return the location object directly
    except ValueError:
        raise HTTPException(status_code=400, detail="Invalid location ID format")

@app.post("/create")
async def create_locations(location: Location):
    try:
        # Get the highest existing ID and add 1
        new_id = max(item['id'] for item in locations['locationsList']) + 1
        
        # Create new location dictionary with the generated ID
        new_location = {
            "id": new_id,
            "name": location.name,
            "volunteerCount": location.volunteerCount,
            "img": location.img
        }
        
        # Append to the locations list
        locations['locationsList'].append(new_location)
        
        return {"message": "Location created successfully", "location": new_location}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))