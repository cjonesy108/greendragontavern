// Maps annotator display names to image file slugs in /public/images/annotators/
// File format: [slug].png (e.g. gordon-s-wood.png)
// Add an entry here as each image is dropped into the folder.

const ANNOTATOR_IMAGES: Record<string, string> = {
  // Historical figures — source public domain engravings
  'William Blackstone':      'william-blackstone',
  'John Adams':              'john-adams',
  'James Madison':           'james-madison',
  'Alexander Hamilton':      'alexander-hamilton',
  'George Washington':       'george-washington',
  'Abraham Lincoln':         'abraham-lincoln',
  'Frederick Douglass':      'frederick-douglass',

  // Generate in Midjourney (hedcut/stipple style)
  'Akhil Reed Amar':         'akhil-reed-amar',
  'Annette Gordon-Reed':     'annette-gordon-reed',
  'Antonin Scalia':          'antonin-scalia',
  'Barack Obama':            'barack-obama',
  'Benjamin Labaree':        'benjamin-labaree',
  'Bernard Bailyn':          'bernard-bailyn',
  'Carl Bogus':              'carl-bogus',
  'Darrin McMahon':          'darrin-mcmahon',
  'David Brion Davis':       'david-brion-davis',
  'David O. Stewart':        'david-o-stewart',
  'Edmund S. Morgan':        'edmund-s-morgan',
  'Garry Wills':             'garry-wills',
  'Gary Nash':               'gary-nash',
  'Geoffrey Stone':          'geoffrey-stone',
  'Gordon S. Wood':          'gordon-s-wood',
  'Gordon Wood':             'gordon-s-wood',
  'Hannah Arendt':           'hannah-arendt',
  'Howard Zinn':             'howard-zinn',
  'Jack Rakove':             'jack-rakove',
  'John Paul Stevens':       'john-paul-stevens',
  'Jon Meacham':             'jon-meacham',
  'Joseph Ellis':            'joseph-ellis',
  'Leonard Levy':            'leonard-levy',
  'Linda Kerber':            'linda-kerber',
  'Martin Luther King Jr.':  'martin-luther-king-jr',
  'Merrill Jensen':          'merrill-jensen',
  'Nikole Hannah-Jones':     'nikole-hannah-jones',
  'Pauline Maier':           'pauline-maier',
  'Ronald Reagan':           'ronald-reagan',
  'Ruth Bader Ginsburg':     'ruth-bader-ginsburg',
  'Sandra Day O\'Connor':    'sandra-day-oconnor',
  'T.H. Breen':              'th-breen',
  'Ta-Nehisi Coates':        'ta-nehisi-coates',
  'Thurgood Marshall':       'thurgood-marshall',
  'Woody Holton':            'woody-holton',
}

export function getAnnotatorImageSlug(name: string): string | null {
  return ANNOTATOR_IMAGES[name] ?? null
}
