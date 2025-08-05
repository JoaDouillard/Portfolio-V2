# Gemfile pour le portfolio Jekyll de Joachim Douillard

source "https://rubygems.org"

# Jekyll - version mise à jour pour compatibilité Ruby 3.4+
gem "jekyll", "~> 4.3.0"

# Gems requises pour Ruby 3.4+ (auparavant incluses par défaut)
gem "csv"
gem "logger"

# Plugins Jekyll
group :jekyll_plugins do
  gem "jekyll-sitemap"
  gem "jekyll-seo-tag"
  gem "jekyll-feed"
end

# Gems pour l'environnement de développement
group :development do
  gem "webrick", "~> 1.7"
end

# Gems pour Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]