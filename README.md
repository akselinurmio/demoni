# Demonin verkkosivut

Saitti rakennetaan staattiseksi käyttäen [Jekylliä][1].

Eli [Ruby][2] pitäisi olla asennettuna, kuten myös [Bundler][3]:

```sh
$ gem install bundler
```

Tyylitiedostot ovat puhtaassa CSS-muodossa ja kaikki tyylitiedostot ajetaan [cssnextin][4] läpi.

## Development server

```sh
$ npm install
$ npm run serve
```

## Production build

```sh
$ npm install
$ npm run build
```

[1]: https://jekyllrb.com/ "Jekyll"
[2]: https://www.ruby-lang.org/en/documentation/installation/#homebrew "Ruby"
[3]: https://bundler.io/ "Bundler"
[4]: http://cssnext.io/ "cssnext"
