import { SfeirThemeInitializer } from '../web_modules/sfeir-school-theme/sfeir-school-theme.mjs';

// One method per module
function schoolSlides() {
  return [
    '00-conf/00-TITLE.md',
    '00-conf/01-speaker-genez-t.md',
    '00-conf/03-github.md'
  ];
}

function introSlides() {
  return [
    '01-intro/00-transition.md',
    '01-intro/01-gen-ai.md',
    '01-intro/02-comment-ca-marche.md',
    '01-intro/03-chez-google.md',
    '01-intro/04-demo.md'
  ];
}

function conclusion() {
  return [
    '07-conclusion/00-transition.md',
    '07-conclusion/01-feedback.md'
  ];
}


function formation() {
  return [
    ...schoolSlides(),
    ...introSlides(),
    ...conclusion()
  ].map((slidePath) => {
    return { path: slidePath };
  });
}

SfeirThemeInitializer.init(formation);
