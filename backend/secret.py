import os
NAME= os.environ.get('PGDATABASE')
USER= os.environ.get('PGUSER')    
PASSWORD= os.environ.get('PGPASSWORD')
HOST = os.environ.get('PGHOST')
PORT = os.environ.get('PGPORT')