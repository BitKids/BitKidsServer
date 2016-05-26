$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "bit_kids_api/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "bit_kids_api"
  s.version     = BitKidsApi::VERSION
  s.authors     = [""]
  s.email       = [""]
  s.homepage    = "http://bitkids.github.io"
  s.summary     = "BitKidsApi."
  s.description = "Description of BitKidsApi."
  s.license     = "MIT"

  s.files = Dir["{app,config,db,lib}/**/*", "MIT-LICENSE", "Rakefile", "README.md"]

  s.add_dependency "rails", ">= 5.0.0.beta3", "< 5.1"

  s.add_development_dependency "mysql2"
end
