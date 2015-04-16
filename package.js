
Package.describe({
  name    : 'semantic:ui-step',
  summary : 'Semantic UI - Step: Single component release',
  version : '1.12.0',
  git     : 'git://github.com/Semantic-Org/UI-Step.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    'step.css'
  ], 'client');
});
