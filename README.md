
![GKN_logo](https://github.com/Abradave/boardGames_backend/blob/main/gkn_logo.png)

# GameKNights web frontend

## Társasjátékozásra időpontfoglalás projekt webes felülete

- A webes frontend a felhasználói hozzáférést biztosítja az adatbázishoz. A vendég és a bejelentkezett felhasználók külön vannak kezelve.
- Az oldal JavaScript alapú, mindenféle framework nélkül. Az index.html oldalt megnyitva megjelenik az oldal amin keresztül minden elérhető. 

## Vendég

- A vendég felhasználók láthatják a meglévő társasjátékokat és azok leírásait, azonban további műveletekhez be kell jelentkezniük.

## Felhasználó

- A bejelentkezett felhasználónak lehetősége van:
- Kilistázni az elérhető időpontokat
- Szabad időpontot foglalni
- Általa foglalt időpontot visszamondani
- Saját adatokat szerkeszteni

## Működés

Bejelentkezés:
- Email cím és jelszó alapján nézi meg hogy található-e az adott felhasználó az adatbázisban.
- Találat esetén eltárolja a felhasználó ID-t és nevet, majd betölti a bejelentkezett felhasználók számára elérhető felületeket

Kijelentkezés:
- Törli a felhasználóról tárolt adatokat
- Újratölti az oldalt a vendégek számára látható felülettel

Regisztráció:
- Elküldi a backend számára a felhasználói adatokat
- Sikeres regisztráció esetén továbbít a bejelentkezési felületre, a megadott emailt automatikusan beilleszti

Játékok listázása:
- Alapból mindenki láthatja a játékokat: regisztrált és vendég felhasználó is, így ez minden esetben betölt
- Amikor a user rákattint egy játékra, megjelennek arról az adatok. Ha a user be volt jelentkezve, a foglaláshoz is kap egy gyors gombot
- A foglalás gyorsgomb beállítja a kiválasztott játékot a foglalandó játékra és az időpontokhoz visz

Időpontok:
- Az időpontokat csak a bejelentkezett felhasználók látják
- A szabad időpontok bárki által lefoglalhatóak
- A foglalt időpontok csak a foglaló személy által mondhatóak vissza
- A foglalt időpontok, ha más foglalta, nem elérhetőek, csak megjelennek

Saját időpontok:
- A bejelentkezett felhasználó ki tudja listázni csak a saját foglalásait, innét vissza is tudja mondani őket
- Ez esetben más információ nem jelenik meg a main-ben


## Adatbázis leírása

- [Adatmodell][def]

[def]: https://github.com/Abradave/boardGames_backend/wiki/Adatmodell

## GameKnihts Backend

- [PHP backend](https://github.com/Abradave/boardGames_backend)

## GameKnihts Frontendek

- [Android alkalmazás](https://github.com/Abradave/Boardgame_Project_Android)
- [Asztali alkalmazás](https://github.com/AriaBartha/GameKNights-desktop-application)
- [Weboldal](https://github.com/bfineodtfg/GameKNights-web-frontend-v2)
