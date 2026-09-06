# Local-dev-only shim: Ruby 3.2+ removed String#tainted?/#untaint, but the Jekyll
# 3.9.x / Liquid 4.0.3 pair GitHub Pages builds with still calls it. GitHub Pages'
# own build servers use a Ruby version where this method still exists, so production
# is unaffected — and custom plugins like this one are ignored by the legacy GitHub
# Pages build anyway. This only exists to unblock `jekyll serve` on a modern local
# Ruby (4.0.x here) for previewing during development.
unless String.method_defined?(:tainted?)
  class String
    def tainted?
      false
    end

    def untaint
      self
    end
  end
end
