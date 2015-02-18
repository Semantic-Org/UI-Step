var
  where = 'client' // Adds files only to the client
;

Package.describe({
  name    : 'semantic:ui-step',
  summary : 'Semantic UI - Step (official): Single component release of step',
  version : '1.9.9',
  git     : 'git://github.com/Semantic-Org/UI-Step.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    
  ], where);
});
