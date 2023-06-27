from . import views
from django.urls import path


urlpatterns = [  

    #path("addevent/",views.add_event.as_view(),name="addevent"),
    path("list_all_events/",views.list_events.as_view(),name="listevents"),
    path("list_upcoming_events/",views.list_upcoming_events.as_view(),name="list_upcoming_events"),
    path("list_past_events/",views.list_past_events.as_view(),name="list_past_events"),
    path("list_ongoing_events/",views.list_ongoing_events.as_view(),name="list_ongoing_events"),
    path("list_events_by_filter/",views.list_events_by_filter.as_view(),name="list_events_by_filter"),
   
   
    path("list_annoucements/",views.list_announcement.as_view(),name="list_anouncements"),
   # path("add_annoucements/",views.add_announcement.as_view(),name="add_anouncements"),
   
   
    path("book_equip/",views.book_equip.as_view(),name="book_equip"),
    path("list_equipments/",views.list_equipments.as_view(),name="list_equipments"),
   
    path("list_teams/",views.list_teams.as_view(),name="list_teams"),
    path("list_teams_by_filter/",views.list_teams_by_filter.as_view(),name="list_teams_by_filter"),

    #path("add_event_head/",views.add_event_head.as_view(),name="add_event_head"),
    

]    