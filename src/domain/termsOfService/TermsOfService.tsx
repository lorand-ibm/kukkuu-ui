import { FunctionComponent } from 'react';

import styles from './termsOfService.module.scss';
import PageWrapper from '../app/layout/PageWrapper';

const TermsOfService: FunctionComponent = () => {
  return (
    <PageWrapper>
      <div className={styles.termsOfService} lang="fi">
        <h1>Kulttuurin kummilapset -palvelua koskevat käyttöehdot</h1>
        <p>
          Kulttuurin kummilapset -palvelu (jäljempänä “Palvelu”) on Helsingin
          kaupungin (jäljempänä “Palveluntarjoaja”) verkkopalvelu, jonka avulla
          käyttäjä voi rekisteröityä ja ilmoittautua Helsingin kaupungin
          kulttuuritoimijoiden tarjoamiin ilmaistapahtumiin.
        </p>
        <p>
          Palvelun käyttö edellyttää seuraavien ehtojen hyväksymistä.
          Rekisteröitymällä Palveluun sitoudut noudattamaan näitä käyttöehtoja.
          Palvelun käyttö ei ole sallittua, ellet hyväksy näitä ehtoja.
          Palveluntarjoajalla on milloin tahansa oikeus muuttaa näitä
          käyttöehtoja.
        </p>
        <h2>Palvelun käyttö</h2>
        <p>
          Palvelun sisältöä saa tarkastella tietokoneella tai vastaavalla
          laitteella, tulostaa siitä osia ja välittää aineistoa eteenpäin.
          Palvelun sisällön käyttö muuhun kuin ei-kaupalliseen tarkoitukseen on
          kiellettyä, ellei tähän ole Palveluntarjoajan kirjallista
          etukäteislupaa.
        </p>
        <p>
          Sivuston sisältö ja kuvamateriaali ovat Palveluntarjoajan tai sen
          yhteistyökumppanien omaisuutta ja tekijänoikeuslain suojaamia, ellei
          toisin ole ilmoitettu.
        </p>
        <p>
          Palvelun sisältämän aineiston luvaton käyttö tai levitys saattaa
          loukata tekijänoikeutta, tavaramerkkiin perustuvaa oikeutta ja muuta
          suojaoikeutta sekä johtaa rangaistukseen ja aiheuttaa
          vahingonkorvausvelvollisuuden.
        </p>
        <h2>
          Palveluntarjoajan verkkosivujen toiminnallisuus, sisältö ja
          Palveluntarjoajan vastuu vahingoista
        </h2>
        <p>
          Palveluntarjoaja tarjoaa Palvelun sellaisena kuin se on sekä pidättää
          itsellään oikeuden milloin tahansa muuttaa palvelun sisältöä ja
          rajoittaa siihen pääsyä. Palveluntarjoaja ei takaa palvelun
          virheetöntä ja keskeytyksetöntä käyttöä eikä vastaa palvelun käytöstä
          mahdollisesti aiheutuvista välillisistä tai välittömistä vahingoista.
        </p>
        <p>
          Palveluntarjoaja ei myönnä takuita siitä, että Palvelun sisältö
          soveltuu johonkin käyttötarkoitukseen eikä se vastaa mahdollisesta
          vahingosta, jonka sivustojen sisältämän tiedon käyttäminen voi
          aiheuttaa.
        </p>
        <h2>Linkit Palvelussa </h2>
        <p>
          Mikäli Palvelussa on linkkejä kolmansien osapuolten verkkosivuille tai
          palveluun, ei Palveluntarjoaja vastaa kolmannen osapuolen sivujen
          sisältämästä aineistosta tai palvelusta. Kolmannen osapuolen sivujen
          käyttö tapahtuu täysin käyttäjän omalla vastuulla. Tutustu sivujen
          käyttöehtoihin ja hyväksy ne ennen käytön aloittamista.
        </p>
        <h2>Henkilötietosuoja </h2>
        <p>
          Palveluntarjoaja noudattaa henkilötietolain säännöksiä ja suojaa
          verkkosivustollaan käyvien henkilöiden yksityisyyttä Suomessa voimassa
          olevan lainsäädännön mukaisesti. Henkilötietojen käsittelyssä
          noudatetaan EU:n ylestä tietosuoja-asetusta.
        </p>
        <h3>Mitä tietoja Palvelun käyttäjästä käsitellään?</h3>
        <p>Käyttäjän antamat tai henkilökohtaisesti tunnistavat tiedot:</p>
        <ul>
          <li>
            nimi ja yhteystiedot, kuten, osoite, puhelinnumero, sähköpostiosoite
          </li>
          <li>muut henkilötiedot, kuten kieli</li>
          <li>
            käyttäjän palveluun ilmoittamat, toimintaan osallistuvan lapsen
            tiedot
          </li>
          <li>luvat ja suostumukset</li>
        </ul>
        Palveluiden käytöstä havainnoidut tiedot:
        <ul>
          <li>
            palvelun käyttöön liittyvät tiedot, kuten tapatumaan
            ilmoittautumiset
          </li>
        </ul>
        <h3>Mihin tarkoitukseen henkilötietoja käytetään?</h3>
        <ul>
          <li>Palvelun tarjoamiseen tarkoituksena</li>
          <ul>
            <li>tuottaa, ylläpitää ja suojata palveluita</li>
            <li>
              estää ja tutkia mahdollisia vikatilanteita tai väärinkäytöksiä
            </li>
            <li>tilastoida ja raportoida</li>
            <li>kehittää nykyisiä ja uusia palveluita</li>
          </ul>
          <li>Asiakaspalvelun tarjoamiseen tarkoituksena</li>
          <ul>
            <li>käsitellä yhteydenottoja</li>
            <li>
              helpottaa asiointiasi tarjoamalla mahdollisimman henkilökohtaista
              palvelua
            </li>
            <li>tiedottaa palvelu- ja asiakasviestinnän keinoin</li>
            <li>
              parantaa palvelua ja käyttökokemusta mm. suosittelemalla
              kiinnostavia sisältöjä
            </li>
          </ul>
          <li>Myynnin ja markkinoinnin kohdentamiseen tarkoituksena</li>
          <ul>
            <li>tuottaa kiinnostavia ja personoituja suositteluja</li>
            <li>
              toteuttaa kyselyitä ja tutkimuksia asiakasymmärryksen
              kehittämiseksi
            </li>
          </ul>
        </ul>
        <h3>Kuinka kauan henkilötietoja säilytetään?</h3>
        <p>
          Käyttäjien itse syöttämät henkilötiedot säilytetään niin pitkään kuin
          palvelu on henkilöllä käytössä. Henkilötiedot poistetaan käyttäjän
          sulkiessa tilin, ottamalla yhteyttä asiakaspalveluun.
        </p>
        <h3>Miten henkilötiedot suojataan?</h3>
        <p>
          Käytämme tarpeellisia teknisiä ja organisatorisia tietoturvakeinoja
          henkilötietojen suojaamiseksi oikeudetonta pääsyä, luovuttamista,
          hävittämistä tai muuta oikeudetonta käsittelyä vastaan. Tällaisia
          keinoja ovat muun muassa palomuurien, salaustekniikoiden, turvallisten
          laitetilojen käyttö, asianmukainen kulunvalvonta, hallittu
          käyttöoikeuksien myöntäminen ja niiden käytön valvonta,
          salaustekniikoiden käyttö, henkilötietojen käsittelyyn osallistuvan
          henkilöstön ohjeistaminen sekä alihankkijoiden huolellinen valinta.
        </p>
        <h3>Siirretäänkö henkilötietoja EU/ETA-alueen ulkopuolelle?</h3>
        <p>Emme siirrä henkilötietoja EU/ETA-alueen ulkopuolelle.</p>
        <h3>Luovutetaanko henkilötietoja kolmansille osapuolille?</h3>
        <p>
          Emme luovuta tunnistetun käyttäjän henkilötietoja kolmansille
          osapuolille muissa kuin alla esitetyissä tapauksissa:
        </p>
        <ul>
          <li>
            Voimme luovuttaa käyttäjän tietoja kolmansille osapuolille, mikäli
            käyttäjä on antanut siihen suostumuksensa tai meillä on joku muu
            laillinen peruste luovutukseen.
          </li>
          <li>
            Voimme luovuttaa käyttäjän henkilötietoja toimivaltaisten
            viranomaisten tai muiden tahojen esittämien vaatimusten
            edellyttämällä, kulloinkin voimassaolevaan lainsäädäntöön
            perustuvalla tavalla.
          </li>
          <li>
            Voimme luovuttaa tietoja tieteellistä tai historiallista tutkimusta
            varten.
          </li>
          <li>
            Voimme luovuttaa tietoja kumppaneina toimiville kolmansille
            osapuolille, mikäli palvelun tuottaminen sitä vaatii.
          </li>
        </ul>
        <h3>Käyttäjän oikeus omiin henkilötietoihinsa</h3>
        <p>
          Mikäli haluat ladata tai poistaa kaikki sinusta kerätyt tiedot, voit
          ottaa yhteyttä palvelun ylläpitäjään.
        </p>
        <h2>Tietoa Palvelun evästeistä</h2>
        <p>
          Evästeitä käytetään Palvelussa myös käyttökokemuksen parantamiseksi.
          Evästeisiin tallentuva tieto on nimetöntä, näin ollen käyttäjää ei voi
          tietojen perusteella yksilöidä. Jollet halua vastaanottaa evästeitä,
          voit estää niiden käytön selaimeen tehtävällä asetuksella. Tällöin on
          mahdollista, ettet kävijänä voi hyödyntää kaikkia sivujemme osia ja
          käyttökokemus heikkenee.
        </p>
        <h3>Analytiikan evästeet</h3>
        <p>
          Käytämme ilmaista ja avoimen lähdekoodin kävijän seurantaohjelmaa
          Matomoa. Matomo tekee käyttäjästä anonyymin, mikä varmistaa, ettei
          kolmansia osapuolia ole sivullamme evästeiden kanssa. Matomon ansiosta
          kaikki data pysyy meillä eikä sitä luovuteta kolmansille osapuolille.
          Lue lisää Matomosta seuraavasta linkistä:{' '}
          <a href="https://matomo.org/">https://matomo.org/</a>
        </p>
        <h2>
          Palveluntarjoajan ja sen yhteistyökumppanien logojen ja tavaramerkkien
          käyttöehdot
        </h2>
        <p>
          Palvelussa esiintyvät nimet, kuviot, logot ja tavaramerkit ovat
          Palveluntarjoajan tai sen yhteistyökumppanien omaisuutta. Niiden
          kopioiminen, siirtäminen, jakeleminen, tallentaminen tai muu
          hyödyntäminen on kiellettyä, ellei tähän ole Palveluntarjoajan tai sen
          yhteistyökumppanin kirjallista etukäteislupaa.
        </p>
        <h2>Käyttöehtojen päivittyminen</h2>
        <p>
          Kehittäessämme palveluitamme ja lainsäädännön muuttuessa myös nämä
          käyttöehdot saattavat joiltain osin muuttua. Suosittelemme tutustumaan
          käyttöehtoihin säännöllisin väliajoin. Olennaisista muutoksista
          ilmoitamme sähköpostitse ja/tai palveluidemme verkkosivuilla.
        </p>
        <p>Tämä tietosuojaseloste on päivitetty 30.1.2020.</p>
        <h2>Muut ehdot</h2>
        <p>
          Näihin käyttöehtoihin sovelletaan Suomen lakia. Ellei näihin
          käyttöehtoihin liittyviä erimielisyyksiä pystytä ratkaisemaan
          neuvottelemalla, ratkaistaan ne Helsingin käräjäoikeudessa.
        </p>
      </div>
    </PageWrapper>
  );
};

export default TermsOfService;
