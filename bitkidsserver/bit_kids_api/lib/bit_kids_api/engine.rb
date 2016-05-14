module BitKidsApi
  class Engine < ::Rails::Engine
    isolate_namespace BitKidsApi
    config.generators.api_only = true
  end
end
