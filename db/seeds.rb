admin = User.create!(first_name: "Sporvo", last_name: "Admin", handle: "theadmin", email: "admin@maily.com", password: "123456", role: "admin", admin: true)

user1 = User.create!(first_name: "John", last_name: "Smith", handle: "jsmith", email: "john.smith@maily.com", password: "123456", role: "mentor")

user2 = User.create!(first_name: "Jill", last_name: "Jones", handle: "jill.j", email: "jill.jones@maily.com", password: "654321", mentor_id: user1.id)

user3 = User.create!(first_name: "Franklin", last_name: "Brown", handle: "b_frank", email: "frank_brown@maily.com", password: "121212", mentor_id: user1.id)

course1 = Course.create!(name: "American Literature")
course2 = Course.create!(name: "Trigonometry")
course3 = Course.create!(name: "American History")
course4 = Course.create!(name: "Chemistry")
course5 = Course.create!(name: "French Literature")
course6 = Course.create!(name: "Algebra")
course7 = Course.create!(name: "Asian History")
course8 = Course.create!(name: "Biology")
course9 = Course.create!(name: "British Literature")
course10 = Course.create!(name: "Calculus")
course11 = Course.create!(name: "European History")
course12 = Course.create!(name: "Physics")

grade1 = Grade.create!(user_id: user2.id, course_id: course1.id, year: "2016-2017", quarter: "3rd", score: "A")

grade2 = Grade.create!(user_id: user2.id, course_id: course2.id, year: "2016-2017", quarter: "3rd", score: "C+")

grade3 = Grade.create!(user_id: user2.id, course_id: course3.id, year: "2016-2017", quarter: "3rd", score: "B-")

grade4 = Grade.create!(user_id: user2.id, course_id: course4.id, year: "2016-2017", quarter: "3rd", score: "B+")

grade5 = Grade.create!(user_id: user2.id, course_id: course5.id, year: "2016-2017", quarter: "4th", score: "A")

grade6 = Grade.create!(user_id: user2.id, course_id: course6.id, year: "2016-2017", quarter: "4th", score: "C+")

grade7 = Grade.create!(user_id: user2.id, course_id: course7.id, year: "2016-2017", quarter: "4th", score: "B-")

grade8 = Grade.create!(user_id: user2.id, course_id: course8.id, year: "2016-2017", quarter: "4th", score: "B+")

grade9 = Grade.create!(user_id: user2.id, course_id: course9.id, year: "2017-2018", quarter: "1st", score: "A")

grade10 = Grade.create!(user_id: user2.id, course_id: course10.id, year: "2017-2018", quarter: "1st", score: "C+")

grade11 = Grade.create!(user_id: user2.id, course_id: course11.id, year: "2017-2018", quarter: "1st", score: "B-")

grade12 = Grade.create!(user_id: user2.id, course_id: course12.id, year: "2017-2018", quarter: "1st", score: "B+")

grade9 = Grade.create!(user_id: user3.id, course_id: course1.id, year: "2017-2018", quarter: "1st", score: "B")

grade10 = Grade.create!(user_id: user3.id, course_id: course2.id, year: "2017-2018", quarter: "1st", score: "B+")

grade11 = Grade.create!(user_id: user3.id, course_id: course3.id, year: "2017-2018", quarter: "1st", score: "A-")

grade12 = Grade.create!(user_id: user3.id, course_id: course4.id, year: "2017-2018", quarter: "1st", score: "A+")

sport1 = Sport.create!(name: "Football")

stat1 = SportStat.create!(sport: sport1, user: user2, year: "2017-2018", position: "Offense", description: "Passing Yards", stat: 200)

stat2 = SportStat.create!(sport: sport1, user: user2, year: "2017-2018", position: "Offense", description: "Rushing Yards", stat: 276)

stat3 = SportStat.create!(sport: sport1, user: user2, year: "2017-2018", position: "Offense", description: "Receiving Yards", stat: 50)

stat4 = SportStat.create!(sport: sport1, user: user2, year: "2017-2018", position: "Defense", description: "Interceptions", stat: 3)

stat5 = SportStat.create!(sport: sport1, user: user2, year: "2017-2018", position: "Defense", description: "Tackles", stat: 20)

stat6 = SportStat.create!(sport: sport1, user: user2, year: "2017-2018", position: "Defense", description: "Sacks", stat: 4)

stat7 = SportStat.create!(sport: sport1, user: user2, year: "2017-2018", position: "Defense", description: "Pass Deflections", stat: 6)

stat8 = SportStat.create!(sport: sport1, user: user2, year: "2017-2018", position: "Defense", description: "Forced Fumbles", stat: 4)
