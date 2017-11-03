enum MusicKind {
  Classic,
  Rap,
  Pop,
  Rock,
  Dance,
  Funk
}

var kind = MusicKind.Funk;    // 5

var kindName = MusicKind[kind];    // 'Funk'


// Enumeration split across multiple blocks
enum FootSize {
  Small,
  Medium
}

// ...

enum FootSize {
  Large = 2,
  XL,
  XXL
}