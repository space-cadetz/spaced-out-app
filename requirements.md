# ⚙️ Software Requirements

## Vision

Educational based application that allows a user to explore the outerspace via NASA's APOD api.

This applications audio and visual aesthetics make learning about space a blast!

We encourage more people to boldly go where no one has gone...or at the least think about it.

## Scope (In/Out)

* **IN** - What will your product do
  * Displays images and information about the cosmos provided by NASA's APOD api.
  * Users can login to our app via `Auth0` via gmail or an email/password combo.
  * Users can save thier favorite images to a gallery in thier `profile`
  * Users can seach for keywords to explore the cosmos.
  * Users can access a calendar to view a specific day of the year.


* **OUT** - What will your product not do.
  * Our application will not be turned into an android/ios application.
  * Will not allow users to upload saved images to social media.
  * Users will not be able to set a custom theme within the applications interface.
  * Does not allow user to user interaction.

### Minimum Viable Product vs

Application will include a login feature, viewing capabilities for a picture of the day and the ability to save favorite images to the users `profile`.

What are your stretch goals?

+ Adding background music to the application

### Stretch

Allowing for geolocation integration for searches based on users physical location.

Notifications of cool intergalactic happenings.


## Functional Requirements

1. A user can view the NASA's  "image of the day" with accompanying details.
2. A user can store favorite images to thier own gallery.
3. A user can search for an image at random from the NASA api.
4. A user can view a calendar to pick a day of thier choosing to view it's respective image and details.

### Data Flow 

![](https://github.com/space-cadetz/spaced-out-app/blob/main/resources/entity-relationship-diagram.PNG?raw=true)

## Non-Functional Requirements

Non-functional requirements are requirements that are not directly related to the functionality of the application but still important to the app.

1. Performance & Scalability - We're aiming to create a fast response (not more than 1 sec) using componentized code base to allow for easy future expansion to include other NASA API's
2. Usability - To increase user adoption our app will present the user with a simple an clear interface by using pleasant colors, easy to read Font sizes, and useful directions/descriptions
