import firebase_admin
from firebase_admin import firestore, credentials
from fastapi import FastAPI
from pydantic import BaseModel
from datetime import datetime
from uuid import uuid4
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware
import os


load_dotenv()


class TrafficStat(BaseModel):
    time: float
    location: str


cred = credentials.Certificate(os.getenv("SERVICE_ACC_PATH"))
app_firebase = firebase_admin.initialize_app(cred)
db = firestore.client()

origins = [os.getenv("FRONT_END_URL"), "http://localhost:3000"]

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/alert/")
async def get_root():
    collection_ref = db.collection("trafficStats")
    docs = collection_ref.stream()
    documents = [{doc.id: doc.to_dict()} for doc in docs]
    return documents


@app.post("/alert/")
async def post_root(item: TrafficStat):
    doc_ref = db.collection("trafficStats").document(str(uuid4()))
    doc_ref.set(
        {
            "speed": 1000 * int(os.getenv("FIXED_DISTANCE")) / item.time * 3.6,
            "time": datetime.now(),
            "location": item.location,
        }
    )

    return item