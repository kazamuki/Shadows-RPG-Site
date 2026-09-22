# Local-dev-only shim: Ruby 3.2+ removed Object#tainted?/#untaint, but the Jekyll
# 3.9.x / Liquid 4.0.3 pair GitHub Pages builds with still calls it. GitHub Pages'
# own build servers use a Ruby version where this method still exists, so production
# is unaffected — and custom plugins like this one are ignored by the legacy GitHub
# Pages build anyway. This only exists to unblock `jekyll serve` on a modern local
# Ruby (4.0.x here) for previewing during development.
#
# Patched on Object, not just String: Liquid taint-checks whatever a variable
# evaluates to, so passing a _data/ hash into an include (e.g. rules-card.html's
# rule=...) hits Hash#tainted? too. Originally String-only, widened 2026-09-22 when
# the Rules Preview pages moved to _data/rules.yml.
unless Object.method_defined?(:tainted?)
  class Object
    def tainted?
      false
    end

    def untaint
      self
    end
  end
end
