import React from 'react';
import styles from './TimelinePage.module.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import NightlifeIcon from '@mui/icons-material/Nightlife';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import CoffeeIcon from '@mui/icons-material/Coffee';
import MessageIcon from '@mui/icons-material/Message';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import CoffeeOutlinedIcon from '@mui/icons-material/CoffeeOutlined';
import CoffeeRoundedIcon from '@mui/icons-material/CoffeeRounded';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import { Minimize } from '@mui/icons-material';

// interface HomePageProps {
//     path: string;
//   }

const TimelinePage: React.FC = () => {
  return (
    <div className={styles.background_t}>
      <div className={styles.timeline}>
        <VerticalTimeline animate={false}>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#f085bc', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #f085bc' }}
            date="26 november 2022"
            iconStyle={{ background: '#f085bc', color: '#fff' }}
            icon={<ConnectingAirportsIcon />}
          >
            <h3 className="vertical-timeline-element-title">De allereerste ontmoeting</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">Sofia, Bulgarije</h4> */}
            <p>
              We kennen dit verhaal zo goed, maar dat is geen reden om het niet weer eens te herhalen :). Ik was
              klaar met alle drukte en besloot een goedkope vlucht te boeken om in mijn eentje
              een weekendje weg te gaan. Op de tweede dag zit ik in het hostel te kletsen met mensen,
              waarna Pim mij twee Nederlandse meiden introduceert: Julie en Noor. Pim en Noor gaan schaken,
              waarbij wij beide een beetje proberen te helpen, maar niet echt de tactieken kennen om iets 
              nuttigs toe te voegen aan het spel. Het viel mij daar al wel op dat jij echt een leuke spontane
              meid bent, en het was echt leuk om te kletsen. Omdat jullie op Belle gingen wachten, gingen jullie
              niet mee uit eten met ons. De anderen wilden graag richting een bar, maar ik besloot terug te gaan om
              met jullie te chillen (iee ik weet het, dit blijft echt heel cringe). We doen wat shotjes en gaan richting 
              de bar, waar de rest al lekker aan het dansen is.
            </p>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/20221126_194834.jpg"} />
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#ff9d73', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #ff9d73' }}
            date="27 november 2022"
            iconStyle={{ background: '#ff9d73', color: '#fff' }}
            icon={<NightlifeIcon />}
          >
            <h3 className="vertical-timeline-element-title">Avondje stappen!</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">Sofia, Bulgarije</h4> */}
            <p>
              In deze bar kun je geen drankjes halen bij de bar, maar moet je wachten
              tot het personeel naar je toe komt. Jullie halen een lekker shotje voor iedereen,
              we drinken nog wat bier. Maar alhoewel het heel gezellig was met iedereen,
              zijn wij met z'n vieren naar de Terminal 1 Club gegaan. Hier krijgen we het leuke
              voorval dat jij als enige niet binnen komt, want de club is te vol. Na even te hebben
              gewacht, kom je toch binnen en gaan we gezellig dansen met z'n vieren. Op dit moment
              ben ik misschien wel gaan flirten, en vraag ik je of je wilt zoenen. Je laat duidelijk
              merken dat je me niet verstaat (WAT?!), maar een seconde of twee later staan we daar
              dan toch dichterbij elkaar dan voorheen. Ik bedenk me nu dat dit ook gefilmd is en leuk
              om te bedenken dat er ons zo veel stond te wachten na dit moment :). Na alle gezelligheid
              in de club, zijn we terug gegaan naar het hostel waar we op ons welbekende bankje
              zijn gaan zitten. Voor mij is dit nog steeds een van de hoogtepunten van het hele
              weekend, en ik vond het echt heel leuk en fijn om gewoon lekker met jou te kletsen.
              Je bericht me nog op instagram met een 'slaap lekker :))', wat ik in de ochtend 
              met veel plezier las :).
            </p>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/Screenshot_20230812-120422_BeReal.jpg"} />
            </div>
            <p>
              De volgende dag (zelfde dag :P) ben ik de hele dag weg om lekker te hiken. Rond een uurtje of half 7 zijn
              wij weer terug, en ben jij daar spelletjes aan het spelen met Noor en Belle. Na gedoucht
              te hebben kom ik bij jullie zitten, maar veel contact hebben we niet in de eerste paar
              uurtjes. Ik wist niet helemaal zeker hoe jij je over de avond daarvoor voelde, maar ik
              probeerde het gewoon gezellig te houden. In de avond hebben we leuke spelletjes gespeeld
              met een aantal anderen, en toen vond ik het leuk dat je lekker mee dronk met de vodka
              zonder dat veel anderen dit ook deden (oeps voor later). Het leek er niet op alsof de avond
              nog heel evenementvol zou worden, maar toch zijn we naar een bar geweest. 
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#fa7046', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #fa7046' }}
            date="28 november 2022"
            iconStyle={{ background: '#fa7046', color: '#fff' }}
            icon={<NightlifeIcon />}
          >
            <h3 className="vertical-timeline-element-title">Tweede avondje stappen!</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">en temp</h4> */}
            <p>
              De avond was vaag; we hebben gedart en ik heb je heel vaak belachelijk gemaakt om je 'zeg maarrrrr' en toch
              bleek er nog steeds ergens een vonk tussen ons te zitten :). Zonder mijn geweten hebben de 
              anderen een weddenschap gehouden hoe laat wij zouden gaan zoenen. Jij wist dit wel, en jij 
              bent uiteindelijk naar mij toe gelopen om Tobi te laten winnen :D. We hebben nog genoten
              van Belle en Pim, en zijn daarna weer terug gelopen om ons oud vertrouwde bankje weer in 
              te nemen. Het was echt ijs ijs ijskoud, maar we hielden elkaar een beetje warm (oke en misschien 
              de dekens ook). We hebben weer leuuuuuk gekletst en zijn daarna samen gaan slapen, omdat 
              dat toch wel gezelliger was dan weer naar ons eigen bed gaan. 
            </p>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/6695372.png"} />
            </div>
            <p>
              In de ochtend word ik wakker met het bericht dat mijn vlucht anderhalf uur is 
              vertraagd, wat betekende dat ik nog wat langer kon blijven liggen. En dat vond ik 
              helemaal niet erg :). Na een tijdje maak jij je een beetje klaar en kom je weer 
              naast me zitten, maar het aantal keer dat wij oogcontact hadden kan ik op 
              1 vinger tellen hahah. We komen best laat uit bed, en na te hebben ontbeten en 
              ik nog een rondje lopen, was het tijd om afscheid te nemen. Een goeie afscheidsknuffel,
              dat meer voelde als een 'tot later' dan een 'vaarwel' ;)
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#f07efc', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #f07efc' }}
            date="1 december 2022"
            iconStyle={{ background: '#f07efc', color: '#fff' }}
            icon={<MarkChatUnreadIcon />}
          >
            <h3 className="vertical-timeline-element-title">Het moedige appje</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">en temp</h4> */}
            <p>
              Na het weekend hadden we op de dinsdag nog even geappt, waarna het gesprek voorbij was 
              en er de drie dagen daarna niks gestuurd werd. Totdat ik ineens een appje ontving op 
              de vrijdagavond:
            </p>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/Screenshot_20231103-012103_WhatsApp.jpg"} />
            </div>
            <p>
              Ik vond het leuk om weer van je te horen, en was erg benieuwd naar de rest 
              van je reis. Het was een relatief kort gesprek, maar ik vond het leuk dat 
              we überhaupt weer een gesprek hadden :)
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#14c44f', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #14c44f' }}
            date="12 december 2022"
            iconStyle={{ background: '#14c44f', color: '#fff' }}
            icon={<QuestionMarkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Date?</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">en temp</h4> */}
            <p>
              De dagen daarna hadden we elkaar af en toe wat berichtjes gestuurd terwijl 
              jij van je laatste dagen van de reis aan het genieten was. Na een aantal dagen 
              niet geappt te hebben kwam ik compleet toevallig David tegen, en dit moest ik
              natuurlijk even naar jou sturen. We appten weer een dagje en door al deze gesprekjes 
              leek het me erg leuk om je weer eens te zien. Na enige minuutjes bedenken hoe ik deze
              vraag nou moest formuleren, kwam ik uit op het volgende berichtje:
            </p>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/Screenshot_20231103-013456_WhatsApp.jpg"} />
            </div>
            <p>
              Het was nog even bepalen wanneer wij beide konden, wie waarheen ging en hoe we
              het doen met de hoge treinkosten, maar we hadden uiteindelijk een dag gevonden:
              maandag 19 december :)
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#34bdf7', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #34bdf7' }}
            date="19 december 2022"
            iconStyle={{ background: '#34bdf7', color: '#fff' }}
            icon={<CoffeeIcon />}
          >
            <h3 className="vertical-timeline-element-title">De eerste date</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">en temp</h4> */}
            <p>
              Rond 13:00 stond ik klaar bij perron 7 om jou op te halen van de trein, toen nog niet 
              wetende dat jij echt zenuwachtig was voor deze dag :). We geven elkaar een knuffel
              en lopen naar het News Café om te lunchen en even lekker bij te praten. Ik weet nog exact waar we 
              zaten en ik vond het oprecht direct al fijn gezellig kletsen. Na een uurtje lunchen lopen we 
              door naar het Forum, waar wij een mooi uitzicht over de stad hebben en waar ik wel wat 
              bij kon vertellen. We wandelen vervolgens een rondje door de stad via het Noorderplantsoen 
              en doen weer een koffietje/chocolademelkie bij Doppio. Alles voelde zo normaal en ik vond 
              het fijn om te zien dat jij het ook echt naar je zin had. Ik herinner me nog dat ik na 
              dit drankje echt niet meer wist waar we nog heen konden lopen, maar we deden maar nog eens 
              een rondje hahah. Ik wist ook niet zeker hoe laat jij de trein wilde pakken, maar we besloten 
              toch uit eten te gaan bij Happy Italy. We hebben nog de slappe lach gehad om mijn verhaal 
              over aardappels gooien, en alles was helemaal gezellieeeee :). Uiteindelijk hebben we nog
              een rondje gelopen (verrassend), en heb jij de laatste trein terug genomen richting Bunnik. 
              Deze keuze was misschien niet de beste, want je bleek uiteindelijk vertraging te hebben, 
              waardoor je je overstap miste en je moeder je op moest halen (sorry Maike :P). Maar ik hoop 
              dat het alles waard was :)
            </p>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/Schermafbeelding 2023-11-03 213448.png"} />
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#8578ff', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #8578ff' }}
            date="2 januari 2022"
            iconStyle={{ background: '#8578ff', color: '#fff' }}
            icon={<MessageIcon />}
          >
            <h3 className="vertical-timeline-element-title">Heeel lang appen</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">en temp</h4> */}
            <p>
               Helaas door Kerst, mijn werk en jouw trip naar Parijs was er geen moment om
               snel een tweede date te plannen. We kwamen uiteindelijk uit op 15 januari,
               bijna een maand later dan de eerste date, wat betekende dat we elkaar voornamelijk
               spraken via WhatsApp. Vlak na Nieuwjaar kwam er een avond waar we beide in bed lagen,
               en de tijd lekker vergaten. Praten over het weekend in Sofia, wat inmiddels al meer dan
               een maand geleden was en de wekker van Kasper die steeds maar af ging om stipt 2 uur 's nachts.
               Dit was het eerste nachtje waar we echt lang met elkaar kletsten zonder enige tijd tussen 
               de appjes :). Het werd uiteindelijk 10 voor 3, wat voor jouw doen echt een prestatie is. 
               Nu ik me dit achteraf zo bedenk, ik voel me vereerd dat je het zo leuk vond om op te blijven :).
               Ik zie nu ook dat we de volgende nacht weer tot 2 uur geappt hadden, en er ontstond zo 
               inmiddels al echt wel wat tussen ons :)
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#ff3860', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #ff3860' }}
            date="11 januari 2022"
            iconStyle={{ background: '#ff3860', color: '#fff' }}
            icon={<MessageOutlinedIcon />}
          >
            <h3 className="vertical-timeline-element-title">Alleen maar appen</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">en temp</h4> */}
            <p>
              In de dagen van 3 t/m 11 januari hebben we elke dag hele lange gesprekken gehad. 
              Ik bedenk me ineens dat ik tijdens het appen ook nog even een leuke hint 
              gooide die vervolgens compleet genegeerd werd:
              <div className={styles.one_image}>
                <img src={"/RoaJuul/images/Screenshot_20231106-155954_WhatsApp.jpg"} />
              </div>
              <div className={styles.one_image}>
                <img src={"/RoaJuul/images/Screenshot_20231106-155918_WhatsApp.jpg"} />
              </div>
              Ik vond het een goeie hahah. Bijna elke avond in deze week sliepen we pas na 12 uur, maar de nacht van 11 januari 
              blijft wel de langste nacht die wij samen op WhatsApp gespendeerd hebben. Lekker praten 
              over van alles en nog wat, en jij zelfs een idee hebben om de Tesla te pakken en 
              even op en neer naar Groningen te gaan midden in de nacht. En dat alles nadat we maar 
              een keer op date zijn geweest hahah. Maar dit alles voelde al zo veel meer dan gewoon 
              kletsen. Deze nacht zijn we opgebleven tot kwart over 4 's nachts, en dat op een dag 
              dat ik gewoon moest werken. Maar ook dit was het allemaal waard. Nu teruglezend, ook de drie nachten 
              daarna zijn we niet eerder gaan slapen dan 2 uur 's nachts :)
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#ff8138', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #ff8138' }}
            date="15 januari 2022"
            iconStyle={{ background: '#ff8138', color: '#fff' }}
            icon={<CoffeeOutlinedIcon />}
          >
            <h3 className="vertical-timeline-element-title">De tweede date</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">en temp</h4> */}
            <p>
              Deze keer was het mijn beurt om de trein te nemen, waar jij mij rond 12:15 
              stond op te wachten aan de centrum kant van het mooie Utrecht. Het mocht ons 
              geluk natuurlijk wezen dat het regende, wat in Groningen ook het geval was, maar 
              dat mocht de pret zeker niet derven. Samen gingen we weer lunchen, bij een gezellig 
              plekje genaamd de KEEK lunchroom. Daarna stond ons een dag te wachten van weer lekker 
              veel rondjes lopen en heel veel kletsen. Jij was deze keer de tourguide, en je hebt 
              me heel goed alle interessante plekjes in Utrecht laten zien :). We hebben Belle ook
              nog even opgebeld, om nou even een onenigheid recht te stellen (en natuurlijk had jij 
              gelijk hahah). Halverwege de dag hebben we ergens rust genomen op een bankje, waar we 
              gezellig met zijn tweeën gezeten hebben; iets dat we sinds Sofia niet meer gedaan hadden.
              Eenmaal weer opgestaan, gaan we hand in hand verder (wat ik al een hele spannende move 
              vond hahah). We hebben nog een drankje gedaan bij de PK & kitchen en zijn daarna 
              doorgelopen naar Spaghettaria Wittevrouwensingel, waar we heeerlijke ravioli gegeten 
              hebben. Hierna hebben we nog 2 uur de stad doorgelopen, om uiteindelijk nog een bankje 
              te bemachtigen vlakbij het station. Lekker dicht tegen elkaar zitten, en na een aantal relatief 
              hoge hartkloppingen toch de moed gekregen om voor onze eerste nuchtere zoen te gaan :)).
              Het was toen echt tijd om te gaan, dus ik ben vervolgens met een grote glimlach de trein
              ingestapt om weer richting Groningen te gaann.
            </p>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/Schermafbeelding 2023-11-03 224303.png"} />
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#ff3526', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #ff3526' }}
            date="16 januari 2022"
            iconStyle={{ background: '#ff3526', color: '#fff' }}
            icon={<FavoriteBorderIcon />}
          >
            <h3 className="vertical-timeline-element-title">Valentijnsdag?</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">en temp</h4> */}
            <p>
              De dag na de hele gezellige tweede date zat ik gewoon weer lekker op werk en 
              was ik een beetje aan het niksen, toen ik me bedacht dat er een bepaalde dag 
              aan zat te komen. Ik vond het zo goed gaan tussen ons en ik begon je steeds
              leuker en leuker te vinden, waardoor ik me bedacht jou het volgende te sturen:
            </p>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/Screenshot_20231103-232744_WhatsApp.jpg"} />
            </div>
            <p>
              Achteraf kreeg ik te horen dat je op dat precieze moment samen met Anne was, 
              die toevallig op dat moment jouw telefoon vast had. Ze zei dat je echt even mijn 
              berichtje moest lezen, omdat het toch niet even een normaal appje was van mij hahah.
              Ik vind het nog steeds heel grappig om dit voor me te zien en hier aan terug te denken :)
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#ff5eb7', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #ff5eb7' }}
            date="21 - 22 januari 2022"
            iconStyle={{ background: '#ff5eb7', color: '#fff' }}
            icon={<CoffeeRoundedIcon />}
          >
            <h3 className="vertical-timeline-element-title">De derde date</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">en temp</h4> */}
            <p>
              Na de erg geslaagde tweede date, hadden we besloten om elkaar maar snel weer te zien 
              want het was echt heel gezelligggg. Toevallig hadden we het weekend daarna beide genoeg 
              tijd, en hadden we besloten om deze keer weer in Groningen af te spreken. Jij zou dat 
              weekend langs je opa en oma gaan, dus kwam jij met het volgende voorstel:
            </p>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/Screenshot_20231104-215212_WhatsApp.jpg"} />
            </div>
            <p>
              Ik vond het eerlijk gezegd best spannend, maar ook echt heel leuk. Ik ben de 
              avond van te voren ook nog naar Sav geweest voor enige voorzorgsmaatregelen, want 
              ik wist nou niet helemaal hoe alles zou verlopen en je weet maar nooit hahah. Achteraf 
              heb ik begrepen dat Nina je hier ook bewust van had gemaakt. Je was 
              eerst van plan om met de Tesla te komen, maar dat werd uiteindelijk toch de trein en 
              rond half 3 kwam je aan op het mooie Groninger station :). Ik heb je daar opgehaald met 
              de fiets, en samen zijn we naar het mooie appartementje aan de Koeriersterweg gegaan. 
              We zijn vervolgens weer de stad in gegaan, en hebben eerst een lekker drankje gedaan 
              bij het Grand Café Time Out. Heel veel bijzonders hebben we overdag niet gedaan, maar we 
              hebben wel lekker samen gekookt (iets met aubergine toch?). In de avond hebben we nog een 
              drankje gedaan bij Het Zwarte Schaap, waarna we via het Noorderplantsoen weer richting 
              huis gingen om lekker het bed in te kruipen. Ik had die week ook mijn mooie dozenstapel opgezet en een chromecast gekocht, zodat we 
              ook gezellig samen een film konden gaan kijken. Dus lekker tegen elkaar aangekropen hebben 
              we een film aangezet en hebben we de film mooi uitgekeken (kuch kuch). En dat was 
              dan weer onze eerste keer samen slapen (en niet slapen), en volgens mij hebben we 
              ook nog een heel tijdje gekletst als ik me het goed herinner. We hebben die nacht 
              beide niet goed geslapen, maar dat mocht de pret van ons samen zijn niet derven.
              Je ging niet meer naar je opa en oma, en rond een uur of 12 ging jij weer richting
              Utrecht, want je had nog wel hockeywedstrijden te coachen. En dat was dan onze 
              derde date, maar het begon al minder te voelen als dates en meer als een opkomende 
              relatie (een prela if you will) :))
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#36b38d', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #36b38d' }}
            date="28 - 29 januari 2022"
            iconStyle={{ background: '#36b38d', color: '#fff' }}
            icon={<CoffeeIcon />}
          >
            <h3 className="vertical-timeline-element-title">De vierde date (?)</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">en temp</h4> */}
            <p>
              We hadden na de derde date al snel besloten dat ik weer richting Utrecht zou 
              komen, en deze keer bij jouw thuis een nachtje slapen. Dit vond ik natuurlijk 
              ook wel een nieuwe stap, want na alle verhalen over je gezin was ik wel erg
              benieuwd. Ik was ook heel erg benieuwd of ze mij wel goed zouden keuren hahah.
              Rond een uurtje of 3 kwam ik aan op station Bunnik en liepen we richting jullie 
              huis. Hier eenmaal aangekomen kom ik iedereen in je gezin te ontmoeten, en 
              hebben we even een small talk over koetjes en kalfjes. We gaan daarna Pien 
              uitlaten en drinken wat thee bij het Koetshuis Café. Terug in huize Bosch-Annee 
              was het tijd om te dineren: kaasfondue! Ik begreep dat het een hele grote red flag 
              was geweest als ik niet van kaas hield, dus gelukkig is dat niet het geval. Moet 
              wel eerlijk zeggen dat ik me niet helemaal kon vinden in al jullie gesprekken, want 
              het ging alleen maar over mensen en dingen waar ik niks van wist maar ik hoop niet 
              dat ik al te stil was. Ik weet niet helemaal meer wat we allemaal gedaan hebben de 
              rest van de dag, maar ik kan me alleen maar voorstellen dat het gewoon lekker gezellig 
              was allemaal :). De volgende dag hebben we gezamenlijk ontbeten (want dat is een ding 
              bij jullie op de zondag) met een lekker eitje en zijn we daarna richting een bos 
              gereden om een lekker stukje te wandelen. En hier hebben we een uitkijktoren beklommen,
              wat ook de eerste keer was dat wij weer een foto samen gemaakt hebben:
            </p>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/20230129_115133.jpg"} />
            </div>
            <p>
              Ik weet dat je deze foto niet zo heel mooi vindt, maar ik vind 'm eigenlijk best 
              wel schattig :).
              Rond een uur of 5 ben ik weer op de trein gestapt richting Groningen, en in de trein 
              kreeg ik confirmatie dat ik in ieder geval goedgekeurd was door Mille hahah.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#2ba7bd', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #2ba7bd' }}
            date="11 - 12 februari 2022"
            iconStyle={{ background: '#2ba7bd', color: '#fff' }}
            icon={<SportsBarIcon />}
          >
            <h3 className="vertical-timeline-element-title">Op stap in Utrecht!</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">en temp</h4> */}
            <p>
              Na de ontmoeting met je ouders, duurde het weer een hele twee weken 
              voordat we elkaar weer zagen. Ik ging namelijk een weekendje naar 
              Budapest met Sav, en doordeweeks kon natuurlijk niet door werk. Maar op 
              27 januari had je mij al gevraagd of ik het leuk zou vinden om op 11 
              februari met jou en wat vriendinnen op stap te gaan, dus onze volgende 
              keer afspreken stond al vast. Ik wist niet of jouw vriendinnen het goed vonden, 
              maar volgens mij was dat niet heel erg:
            </p>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/IMG-20230127-WA0020.jpg"} />
            </div>
            <p>
              Ik ben nu ook alle appjes aan het teruglezen, en het valt me gewoon op dat 
              wij soms niet tot het einde van de middag iets naar elkaar sturen. Dit kan ik me 
              dus nu echt helemaal niet meer voorstellen hahah. Maar terug naar het verhaal: Na 
              de nacht van tevoren weer tot vet laat (3 uur) geappt te hebben, neem ik 's ochtends
              de trein van 10:48 richting Bunnikkk. Eenmaal aangekomen, stappen we vrij snel de 
              auto in om samen met Pien en dat andere hondje een leuke wandeling te maken op het
              strand van Katwijk. Ik heb hier echt goeie herinneringen aan, zo samen over het strand 
              lopen en een beetje met die honden spelen :)
            </p>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/IMG-20230212-WA0032.jpg"} />
            </div>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/IMG-20230212-WA0024.jpg"} />
            </div>
            <p>
                We rijden na ongeveer twee en een half uur terug, om daarna naar Belle te gaan 
                en daar avond te eten. Samen met Noor en Belle, aten we een lekkere gevulde aubergine
                , waarna Anne en Nina ook nog kwamen aanschuiven. We hadden inmiddels al aardig wat 
                alcohol door ons systeem gegiet, dus ik hoop niet dat ik mezelf al te veel voor schut 
                had gezet. Maar volgens mij had jij ook al wel genoeg op hahah. Leuk dat we ook beide
                beige droegen, toen al een ANWB koppel :)
            </p>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/IMG-20230212-WA0026.jpg"} />
            </div>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/IMG-20230212-WA0031.jpg"} />
            </div>
            <p>
              Vervolgens zijn we doorgefietst naar een cafeetje, waar Suze er ook nog bij 
              kwam te zitten. Op dit punt zat er al echt veel in en heb ik volgens mij ook 
              eventjes niks gedronken, maar was wel een leuk plekje. Na het café zijn we 
              doorgefietst naar een bar/club, waar we toch nog wat meer vloeistof in ons
              systeem brachten. Ik kan me herinneren dat jij wel ineens heel schattig werd 
              en beetje hangerig bij mij was, wat ik helemaal leuk vind. Ik denk dat we beide niet super veel meer weten over de avond,
              maar het kan niet anders zijn dan gezellig zijn geweest :)
            </p>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/IMG-20230212-WA0029.jpg"} />
            </div>
            <p>
              Op de terugweg nog even heen en weer geslingerd op de fiets, en daarna lekker naast elkaar 
              in bedje gaan liggen. In de ochtend moesten we toch relatief op tijd weer het 
              bedje uit, want jij had een hockeywedstrijd te coachen. Dus ben ik weer op de trein 
              richting Groningen gestapt, om nog maar eventjes uit te brakken. Maar valentijnsdag zat er 
              al snel aan te komen, dus we hoefden niet lang meer te wachten om elkaar weer te zien :)
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#ff0084', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #ff0084' }}
            date="13 - 14 februari 2022"
            iconStyle={{ background: '#ff0084', color: '#fff' }}
            icon={<FavoriteIcon />}
          >
            <h3 className="vertical-timeline-element-title">Valentijnsdag :))</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">en temp</h4> */}
            <p>
              Een dag nadat ik weg ging uit Bunnik, kwam jij alweer naar Groningen toe. Overdag moest 
              je nog werken, dus rond 18:30 kwam jij weer naar het hoge noorden toe, maar 
              dit ging niet helemaal zo soepel als gehoopt hahah. Jouw trein reed sloom, en uiteindelijk lag 
              ook nog eens het hele traject tussen Zwolle en Groningen eruit. Dus heel omslachtig 
              moest je via Leeuwarden om uiteindelijk om 22:00 aan te komen op het station. We zijn 
              maar lekker snel naar mijn huis gegaan en tegen elkaar aangekropen, om het meeste uit 
              de komende dag te halen: Valentijnsdagggg :). 
            </p>
            <p>
              Ik moet je eerlijk bekennen dat ik de chronologische volgorde van deze dag even 
              helemaal kwijt ben, maar genoeggg wat ik me kan herinneren. In de ochtend hebben 
              we eerst even een lekker ontbijtje gehaald bij de Coop, om deze mooie super leuke dag 
              te beginnen :). Ik had niet heel veel voor deze dag voorbereid, maar het leek me 
              een goed idee om naar Kaap Hoorn te fietsen om daar een leuk wandelingetje te maken. 
              We hadden echt heel erg geluk met het weer, wat de dag nog perfecterder maakte dan perfect :).
              We claimden een bankje, waar jij mij heel lief een hartjes koek gaf en ik die oppeuzelde 
              terwijl we leuk gingen mensen kijken. Na een aantal minuutjes, voelde ik al wel snel een 
              klein probleempje vormen in mijn keel en wat bleek; er zaten walnoten in de koek :D. Ik heb 
              er wel eventjes een goede poos last van gehad, maar de gezelligheid overheersde genoeg dat 
              ik er niet al te veel van merkte. Na Kaap Hoorn, zijn we door gelopen en gefietst 
              om het Hoornsemeer heen, waar we eerst nog een bankje hadden geclaimd om over het meer uit te 
              kijken (en om misschien al wel een beetje klef te doen oepsiee). We fietsten door en zagen 
              best veel mensen op steigertjes zitten langs het water, en na enige momenten hadden we 
              ook onze eigen steiger gevonden. Heeerlijk vond ik dit, eventjes liggen in het zonnetje 
              met de meid waar ik nu wel echt heel verliefd op was. We hebben hier ook echt wel eventjes
              gezeten en gelegen, maar alles was gewoon perfectttt. Na het lekkere relaxen, was het nu ook 
              tijd om even competitief te zijn. We zijn doorgegaan naar het Poolcafé Streetlife, om te gaan 
              poolen. Helaasss werd het gelijkspel, maar we moeten ooit nog maar eens een rematch houden :)
            </p>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/20230214_164532.jpg"} />
            </div>
            <p>
              Hierna zijn we uit eten geweest bij Magoya, waar we nog even heerlijke Aziatische 
              gerechten gegeten hebben. De dag was alweer bijna voorbij, want jij moest ook nog 
              terug naar Bunnik. We zijn na het eten nog een uur gaan chillen op de bank thuis, 
              toen jij mij vertelde dat je nog iets voor me had: een wegwerpcamera en een heel lief 
              kaartje :). Na het kaartje gelezen te hebben, vroeg jij mij of jij mij nu ook officieel je
              vriend(je) mag noemen, waarop ik natuurlijk ja antwoordde :)). Ik heb je daarna naar 
              het station gebracht, waarna jij wederom richting Bunnik ging, maar deze keer met een relatie :)
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#ff5e94', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #ff5e94' }}
            date="16 februari 2022"
            iconStyle={{ background: '#ff5e94', color: '#fff' }}
            icon={<FavoriteBorderRoundedIcon />}
          >
            <h3 className="vertical-timeline-element-title">Allereerste hartje</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">en temp</h4> */}
            <p>
              Ik was de avond van de 15de naar mijn oma geweest, waarna ik 's avonds laat weer
              terug kwam en allemaal haren van jou in mijn bed zag liggen. Dit moest ik 
              natuurlijk even laten weten, nadat jij mij heel lief de reden vertelde wat resulteerde 
              in het allereerste hartje sinds onze ontmoeting:
            </p>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/Screenshot_20231106-181838_WhatsApp.jpg"} />
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#51508a', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #51508a' }}
            date="23 februari 2022"
            iconStyle={{ background: '#51508a', color: '#fff' }}
            icon={<Minimize />}
          >
            <h3 className="vertical-timeline-element-title">Een iets minder avondje (oeps)</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">en temp</h4> */}
            <p>
              Het weekend na Valentijnsdag hadden we beide al plannen, maar omdat ik die 
              week daarna weg ging op skivakantie was het leuk om elkaar nog even een keertje
              te zien. Dus jij kwam de donderdag weer naar Groningen toe, maar ik had nog iets 
              te veel te doen en was daarnaast ook heel erg moe. Ik had hierdoor misschien niet 
              heel veel aandacht aan jou besteed en ging ook relatief heel vroeg slapen. Was
              misschien niet de beste nacht samen, maar weet dat ik echt heel blij was dat je er
              was :))
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="27 februari 2022"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FavoriteBorderIcon />}
          >
            <h3 className="vertical-timeline-element-title">Temp</h3>
            <h4 className="vertical-timeline-element-subtitle">en temp</h4>
            <p>
              ondertekst
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="9 maart 2022"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FavoriteBorderIcon />}
          >
            <h3 className="vertical-timeline-element-title">Temp</h3>
            <h4 className="vertical-timeline-element-subtitle">en temp</h4>
            <p>
              ondertekst
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="11 maart 2022"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FavoriteBorderIcon />}
          >
            <h3 className="vertical-timeline-element-title">Temp</h3>
            <h4 className="vertical-timeline-element-subtitle">en temp</h4>
            <p>
              ondertekst
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="12 maart 2022"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FavoriteBorderIcon />}
          >
            <h3 className="vertical-timeline-element-title">Temp</h3>
            <h4 className="vertical-timeline-element-subtitle">en temp</h4>
            <p>
              ondertekst
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="18 maart 2022"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FavoriteBorderIcon />}
          >
            <h3 className="vertical-timeline-element-title">Temp</h3>
            <h4 className="vertical-timeline-element-subtitle">en temp</h4>
            <p>
              ondertekst
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="19 maart 2022"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FavoriteBorderIcon />}
          >
            <h3 className="vertical-timeline-element-title">Temp</h3>
            <h4 className="vertical-timeline-element-subtitle">en temp</h4>
            <p>
              ondertekst
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="24 maart 2022"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FavoriteBorderIcon />}
          >
            <h3 className="vertical-timeline-element-title">Julie jarig!</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">en temp</h4> */}
            <p>
              ondertekst
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="26 maart 2022"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FavoriteBorderIcon />}
          >
            <h3 className="vertical-timeline-element-title">Temp</h3>
            <h4 className="vertical-timeline-element-subtitle">en temp</h4>
            <p>
              ondertekst
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="31 maart 2022"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FavoriteBorderIcon />}
          >
            <h3 className="vertical-timeline-element-title">Temp</h3>
            <h4 className="vertical-timeline-element-subtitle">en temp</h4>
            <p>
              ondertekst
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2 april 2022"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FavoriteBorderIcon />}
          >
            <h3 className="vertical-timeline-element-title">Temp</h3>
            <h4 className="vertical-timeline-element-subtitle">en temp</h4>
            <p>
              ondertekst
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="8 april 2022"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FavoriteBorderIcon />}
          >
            <h3 className="vertical-timeline-element-title">Temp</h3>
            <h4 className="vertical-timeline-element-subtitle">en temp</h4>
            <p>
              ondertekst
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="9 april 2022"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FavoriteBorderIcon />}
          >
            <h3 className="vertical-timeline-element-title">Temp</h3>
            <h4 className="vertical-timeline-element-subtitle">en temp</h4>
            <p>
              ondertekst
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="27 april 2022"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FavoriteBorderIcon />}
          >
            <h3 className="vertical-timeline-element-title">Temp</h3>
            <h4 className="vertical-timeline-element-subtitle">en temp</h4>
            <p>
              ondertekst
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="5 mei 2022"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FavoriteBorderIcon />}
          >
            <h3 className="vertical-timeline-element-title">Temp</h3>
            <h4 className="vertical-timeline-element-subtitle">en temp</h4>
            <p>
              ondertekst
            </p>
          </VerticalTimelineElement>



          {/* :( */}
          


          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2 augustus 2022"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FavoriteBorderIcon />}
          >
            <h3 className="vertical-timeline-element-title">Temp</h3>
            <h4 className="vertical-timeline-element-subtitle">en temp</h4>
            <p>
              ondertekst
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="4 augustus 2022"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FavoriteBorderIcon />}
          >
            <h3 className="vertical-timeline-element-title">Temp</h3>
            <h4 className="vertical-timeline-element-subtitle">en temp</h4>
            <p>
              ondertekst
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="6 augustus 2022"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FavoriteBorderIcon />}
          >
            <h3 className="vertical-timeline-element-title">Temp</h3>
            <h4 className="vertical-timeline-element-subtitle">en temp</h4>
            <p>
              ondertekst
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="8 augustus 2022"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FavoriteBorderIcon />}
          >
            <h3 className="vertical-timeline-element-title">Temp</h3>
            <h4 className="vertical-timeline-element-subtitle">en temp</h4>
            <p>
              ondertekst
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="19 augustus 2022"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FavoriteBorderIcon />}
          >
            <h3 className="vertical-timeline-element-title">Temp</h3>
            <h4 className="vertical-timeline-element-subtitle">en temp</h4>
            <p>
              ondertekst
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="23 augustus 2022"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FavoriteBorderIcon />}
          >
            <h3 className="vertical-timeline-element-title">Temp</h3>
            <h4 className="vertical-timeline-element-subtitle">en temp</h4>
            <p>
              ondertekst
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="27 augustus 2022"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FavoriteBorderIcon />}
          >
            <h3 className="vertical-timeline-element-title">Temp</h3>
            <h4 className="vertical-timeline-element-subtitle">en temp</h4>
            <p>
              ondertekst
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="29 augustus 2022"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FavoriteBorderIcon />}
          >
            <h3 className="vertical-timeline-element-title">Temp</h3>
            <h4 className="vertical-timeline-element-subtitle">en temp</h4>
            <p>
              ondertekst
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="8 september 2022"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FavoriteBorderIcon />}
          >
            <h3 className="vertical-timeline-element-title">Temp</h3>
            <h4 className="vertical-timeline-element-subtitle">en temp</h4>
            <p>
              ondertekst
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="14 september 2022"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FavoriteBorderIcon />}
          >
            <h3 className="vertical-timeline-element-title">Temp</h3>
            <h4 className="vertical-timeline-element-subtitle">en temp</h4>
            <p>
              ondertekst
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="16 september 2022"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FavoriteBorderIcon />}
          >
            <h3 className="vertical-timeline-element-title">Temp</h3>
            <h4 className="vertical-timeline-element-subtitle">en temp</h4>
            <p>
              ondertekst
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="18 september 2022"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FavoriteBorderIcon />}
          >
            <h3 className="vertical-timeline-element-title">Temp</h3>
            <h4 className="vertical-timeline-element-subtitle">en temp</h4>
            <p>
              ondertekst
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="29 september 2022"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FavoriteBorderIcon />}
          >
            <h3 className="vertical-timeline-element-title">Temp</h3>
            <h4 className="vertical-timeline-element-subtitle">en temp</h4>
            <p>
              ondertekst
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="6 oktober 2022"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FavoriteBorderIcon />}
          >
            <h3 className="vertical-timeline-element-title">Temp</h3>
            <h4 className="vertical-timeline-element-subtitle">en temp</h4>
            <p>
              ondertekst
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="12 oktober 2022"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FavoriteBorderIcon />}
          >
            <h3 className="vertical-timeline-element-title">Temp</h3>
            <h4 className="vertical-timeline-element-subtitle">en temp</h4>
            <p>
              ondertekst
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="20 oktober 2022"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FavoriteBorderIcon />}
          >
            <h3 className="vertical-timeline-element-title">Temp</h3>
            <h4 className="vertical-timeline-element-subtitle">en temp</h4>
            <p>
              ondertekst
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="21 oktober 2022"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FavoriteBorderIcon />}
          >
            <h3 className="vertical-timeline-element-title">Temp</h3>
            <h4 className="vertical-timeline-element-subtitle">en temp</h4>
            <p>
              ondertekst
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="18 november 2022"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FavoriteBorderIcon />}
          >
            <h3 className="vertical-timeline-element-title">Temp</h3>
            <h4 className="vertical-timeline-element-subtitle">en temp</h4>
            <p>
              ondertekst
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default TimelinePage;
