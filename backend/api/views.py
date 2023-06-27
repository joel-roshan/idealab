from django.shortcuts import render
from .models import events,announcement,book_equip,Equipment,teams,event_heads
from .serializers import eventserializer,annoucementserializer,book_equipserializer,equipmentserializer,teamserializer,event_headserializer
from rest_framework.generics import ListAPIView, CreateAPIView,DestroyAPIView,RetrieveAPIView,UpdateAPIView
from django_filters.rest_framework import DjangoFilterBackend
from django.core.exceptions import ValidationError
import datetime

# Create your views here.

# api to add a event

class add_event(CreateAPIView):
    queryset=events.objects.all()
    serializer_class=eventserializer


# api to list the events

class list_events(ListAPIView):
    queryset=events.objects.all()
    serializer_class=eventserializer
    
#api to list upcoming events

class list_upcoming_events(ListAPIView):
    queryset=events.objects.filter(start_date__gt=datetime.date.today())
    serializer_class=eventserializer

# api to list past events

class list_past_events(ListAPIView):
    queryset=events.objects.filter(end_date__lte=datetime.date.today())
    serializer_class=eventserializer

#api to list ongoing events

class list_ongoing_events(ListAPIView):
    queryset=events.objects.filter(start_date__lte=datetime.date.today(),end_date__gte=datetime.date.today())
    serializer_class=eventserializer


class list_events_by_filter(ListAPIView):
    queryset=events.objects.all()
    serializer_class=eventserializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['event_coordinator','name']

# api to list announcements

class list_announcement(ListAPIView):
    queryset=announcement.objects.all()
    serializer_class=annoucementserializer
    # filter_backends = [DjangoFilterBackend]
    # filterset_fields = ['title', 'category', 'date']

# api to add announcements

class add_announcement(CreateAPIView):
    queryset=announcement.objects.all()
    serializer_class=annoucementserializer     

# api to book equipment

class book_equip(CreateAPIView):
    queryset=book_equip.objects.all()
    serializer_class=book_equipserializer
    
    def perform_create(self, serializer):
        equipment = serializer.validated_data['equipment_name']
        if equipment.is_available:  #This line checks if the equipment is currently available and has not been already allotted to someone else.
            equipment.is_allotted = True
            equipment.save()
            serializer.save()
        else:
            raise ValidationError('Equipment is currently unavailable')

#api to list equipments that are available
class list_equipments(ListAPIView):
    queryset=Equipment.objects.filter(is_available=True)
    serializer_class=equipmentserializer

#api to list  teams

class list_teams(ListAPIView):
    queryset=teams.objects.all()
    serializer_class=teamserializer



class list_teams_by_filter(ListAPIView):
    queryset=teams.objects.all()
    serializer_class=teamserializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['designation']

#api to add event heads

class add_event_head(CreateAPIView):
    queryset=event_heads.objects.all()
    serializer_class=event_headserializer