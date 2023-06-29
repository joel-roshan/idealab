#!/bin/bash

python manage.py migrate 
  
gunicorn backend.wsgi --bind idealab_backend:80