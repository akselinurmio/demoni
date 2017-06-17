# Demonin verkkosivut

Saitti rakennetaan staattiseksi käyttäen [Jekylliä][1].

Eli Node + npm ja Ruby (esim. [rvm:llä][2]) pitäisi olla asennettuna, kuten myös [Bundler][3]:

```sh
curl -sSL https://get.rvm.io | bash -s stable
gem install bundler
bundle install
```

Tyylitiedostot ovat puhtaassa CSS-muodossa ja kaikki tyylitiedostot ajetaan [cssnextin][4] läpi.

## Development server

```sh
git checkout master
npm install
npm run serve
```

## Production build

```sh
git checkout gh-pages
npm install
npm run build
```

[1]: https://jekyllrb.com/ "Jekyll"
[2]: https://rvm.io/ "RVM Ruby Version Manager"
[3]: https://bundler.io/ "Bundler"
[4]: http://cssnext.io/ "cssnext"
