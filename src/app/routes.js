"use strict";
var event_details_component_1 = require("./events/event-details/event-details.component");
var events_list_component_1 = require("./events/events-list.component");
var create_event_component_1 = require("./events/create-event.component");
exports.appRoutes = [
    { path: 'events/new', component: create_event_component_1.CreateEventComponent },
    { path: 'events', component: events_list_component_1.EventsListComponent },
    { path: 'events/:id', component: event_details_component_1.EventDetailsComponent },
    { path: '', redirectTo: '/events', pathMatch: 'full' }
];
//# sourceMappingURL=routes.js.map