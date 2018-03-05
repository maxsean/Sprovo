# Student-Athlete Mentor Program
A progress monitoring mentorship app for student athletes.

## Introduction
This is the initial implementation of Sporvo's website. It currently features keeping track of student academic grades and athletic statistics with student and mentor relationships.

## Technologies
* [Ruby on Rails](https://github.com/rails/rails): back-end mainly used for API endpoints
* [React.js](https://github.com/facebook/react) and [React-Router](https://github.com/ReactTraining/react-router): for quick and responsive user experience
* [React-Bootstrap](https://github.com/react-bootstrap/react-bootstrap): Responsive templates
* [Devise](https://github.com/plataformatec/devise): User Authentication
* [Rails-Admin](https://github.com/sferik/rails_admin): Admin interface and tools
* [Carrierwave](https://github.com/carrierwaveuploader/carrierwave), [fog-aws](https://github.com/fog/fog-aws), [miniMagick](https://github.com/minimagick/minimagick): image upload (AWS S3 storage)
* [Rspec](https://github.com/rspec/rspec) and [Capybara](https://github.com/teamcapybara/capybara): Unit and Feature testing for Rails
* [Jasmine-Enzyme](https://github.com/FormidableLabs/enzyme-matchers): Unit and Feature testing for React.js
* [Karma](https://karma-runner.github.io/2.0/index.html): test automation for javascript

## Setup
In app directory, run:
```
bundle install
rake db:create
rake db:migrate
rake db:seed
rake db:test:prepare
rails s
```
In a separate terminal tab, run:
```
yarn install
./bin/webpack-dev-server
```
Then navigate to `localhost:3000`.

If you want to demo the product without signing up, you may use:

Mentor
`email: john.smith@maily.com`
`password: 123456`

Student
`email: jill.jones@maily.com`
`password: 654321`

For RSpec and Capybara tests run `rake`
and for Jasmine-Enzyme tests run `karma start`.

## Assumptions
* Sign in required to view any user profile (no public access). Thus teachers, coaches, and recruiters would need to sign in to view a student profile. These permissions are mostly handled in the backend (see `/app/controllers/api/v1/mentees_controller.rb`)
* Academic course and sport names are unique. Ideally some uuid will be better suited to find a specific course or sport. That being said, there is no implementation of repeat courses. One would simply replace the original record for that course.
* Only the admin can assign students to mentors through the rails-admin interface.
* Mentors cannot alter grades and statistics of students who are not assigned to them.

## ToDo

### User Password Reset
Right now, password reset relies on Devise's controllers and views (try url: `<domain name>/users/sign_in` and `<domain name>/users/password/new`). For better user experience, make this compatible with the javascript front end.

### Unit and Feature Tests
There is a lack of unit and feature tests that needs to be addressed. The Rspec and Capybara tests are stored in `/spec` and the Jasmine-Enzyme tests are stored in `/app/javascript/react/test`

### Cloud Storage
Currently, profile images are stored in a public AWS S3 bucket. This bucket is free-tier, with a capacity of 5 GB and can expire any time. It is highly recommended to find a more permanent solution and alter the Carrierwave configuration `/config/initializers/carrierwave.rb` to point to another cloud storage.

### Mentee access to Mentor
Right now, there is no direct way for a mentee to obtain mentor contact information. One possibility is to serialize user with mentor data if applicable.

### Implementation of Sporvo Points
A point based system based on academic scores, athletic stats, and other achievements needs to be implemented to provide a quantitative assessment of student success.

### Moving Logic out of Controllers
Currently, a lot of business logic is in the controllers. It is advisable to move the logic to models or modules.
