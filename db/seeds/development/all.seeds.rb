puts "Hi Console!"

user = User.find_or_initialize_by(email: "first@example.com")

if (!user.persisted?)
  puts "Creating User..."
  user.password = "password"
  user.password_confirmation = "password"
end

user.save!

puts "Creating Fields..."
city = Field.find_or_create_by!(name: "City", description: "City of Residence", owner_id: user.id)
state = Field.find_or_create_by!(name: "State", description: "One of Fifty...if you ignore the rest of the planet", owner_id: user.id)
county = Field.find_or_create_by!(name: "County", description: "Nobody remembers these", owner_id: user.id)
name = Field.find_or_create_by!(name: "RecognitionName", description: "For display purposes", owner_id: user.id)

puts "Assigning validations..."
state.validations = [
  Validation.find_or_create_by(name: "NoProvinces", type: 'Blacklist', description: "Screw Canada", options: { list: %w(ON QC NS NB MB BC PE SK AB NL)}, owner_id: user.id),
  Validation.find_or_create_by(name: "NoFullNames", type: 'Length', description: "Screw Readability", options: { exactly: 2 }, owner_id: user.id)
]

name.validations = [
  Validation.find_or_create_by(name: "ReasonableNamesOnly", type: 'Length', description: "Screw Diversity", options: { within: 2..25 }, owner_id: user.id)
]

puts "Assigning tags..."
location = Tag.find_or_create_by(name: 'Location', description: 'Where Things Are', owner_id: user.id)

location.fields = [city, state, county]
