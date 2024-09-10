Feature: Weather Application

Scenario: Display current weather information for a selected city
Given the user has opened the weather app
When the user enters a valid city name in the search bar
And the user clicks on the "Search" button
Then the app should display the current weather conditions for the selected city
And the app should show the temperature, humidity, wind speed, and weather condition (e.g., sunny, rainy, cloudy)

Scenario: Display forecast for the next 5 days
Given the user has searched for a city in the weather app
When the user selects the "5-day forecast" option
Then the app should display the weather forecast for the next 5 days
And each day should show temperature, weather condition, and chance of precipitation

Scenario: Error handling for invalid city name
Given the user has entered an invalid or non-existent city name
When the user clicks on the "Search" button
Then the app should display an error message indicating that the city was not found
And prompt the user to enter a valid city name

Scenario: Detect current location and display weather
Given the user has allowed location access for the weather app
When the user opens the app
Then the app should automatically detect the user's current location
And display the current weather conditions for the user's location

Scenario: Save favorite cities
Given the user has searched for a city in the weather app
When the user clicks the "Add to favorites" button for a city
Then the app should save the city to the user's list of favorite cities
And the user can quickly access weather information for favorite cities from the "Favorites" menu

Scenario: Display weather alerts and warnings
Given the user has searched for a city
When there is an active weather alert for the selected city (e.g., severe storm warning)
Then the app should display a warning message with details about the alert
And the app should provide guidance on how to stay safe (e.g., "Stay indoors during the storm")
