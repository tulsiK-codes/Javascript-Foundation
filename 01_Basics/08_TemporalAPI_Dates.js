//Temporal is a modern replacement for Date in JavaScript

/*Handles:
Dates
Times
Time zones
Durations
Calendars */

// NB:Temporal is a global object like Math (not a constructor)

/*-----------Old Date issues----------------
Date only supports:
local time
UTC
No real timezone system
Mutable (causes bugs)
Poor API design

👉 Temporal fixes all of this by:

Being immutable
Having separate types for separate concepts
Supporting time zones + calendars properly */


const nowInstant = Temporal.Now.instant()
const nowPlainDate = Temporal.Now.plainDateISO()
const nowTimeZone = Temporal.Now.zonedDateTimeISO()
// console.log(nowInstant); //Temporal is not supported by nodejs, so getting error
