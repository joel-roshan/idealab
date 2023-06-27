from django.contrib import admin
from .models import events,announcement,book_equip,Equipment,teams,event_heads

# Register your models here.



class eventfilter(admin.ModelAdmin):
    search_fields=('name',)
    list_display=['name','location','start_date','end_date']
    list_filter=['start_date','end_date']


class book_equipfilter(admin.ModelAdmin):
    search_fields=('name','equipment_name','appointment_date')
    list_display=['name','phone_num','email','equipment_name','appointment_date','created_at']
    list_filter=['appointment_date']


class equipmentfilter(admin.ModelAdmin):
    search_fields=('name',)
    list_display=['name','quantity']
    list_filter=['name']





admin.site.register(events,eventfilter)
admin.site.register(announcement)
admin.site.register(book_equip,book_equipfilter)
admin.site.register(Equipment,equipmentfilter)
admin.site.register(teams)
admin.site.register(event_heads)




