from rest_framework import serializers
from .models import events,announcement,book_equip,Equipment,teams,event_heads





class annoucementserializer(serializers.ModelSerializer):
    class Meta:
        model = announcement
        fields = '__all__'


class book_equipserializer(serializers.ModelSerializer):
    class Meta:
        model = book_equip
        fields = '__all__'


class equipmentserializer(serializers.ModelSerializer):
    class Meta:
        model = Equipment
        fields = '__all__'


class teamserializer(serializers.ModelSerializer):
    class Meta:
        model = teams
        fields = '__all__'


#serializer for event heads
class event_headserializer(serializers.ModelSerializer):
    class Meta:
        model = event_heads
        fields = '__all__'
class eventserializer(serializers.ModelSerializer):
    event_coordinator=event_headserializer(many=True)
    class Meta:
        model = events
        fields = '__all__'