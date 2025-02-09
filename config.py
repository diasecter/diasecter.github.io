import os

class Config:
    SECRET_KEY = os.urandom(24)  # Secret key for forms and sessions
    SQLALCHEMY_DATABASE_URI = 'sqlite:///database.db'  # SQLite database
    SQLALCHEMY_TRACK_MODIFICATIONS = False
