guard 'jasmine-node', jasmine_node_bin: File.expand_path(File.dirname(__FILE__) + "/node_modules/jasmine-node/bin/jasmine-node"), all_after_pass: false do
  watch(%r{^spec/(.+)\.(js\.coffee|js|coffee)}) { |m| "spec/#{m[1]}.#{m[2]}" }
  watch(%r{^server\.(js\.coffee|js)|coffee}) { |m| "spec/server.spec.#{m[1]}" }
  watch(%r{^lib/(.+)\.(js\.coffee|js)|coffee}) { |m| "spec/lib/#{m[1]}.spec.#{m[2]}" }
end
