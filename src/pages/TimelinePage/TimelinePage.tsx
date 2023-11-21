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
import { Abc, Apartment, BrunchDining, Cake, Celebration, Explore, FlightLand, Forest, Girl, GroupWork, LocalAirport, LocalBar, LocationCity, Luggage, Minimize, PersonPinCircle, PregnantWoman, Restaurant, Rowing, School } from '@mui/icons-material';

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
              meid bent, en het was echt leuk om te kletsen. We hebben daar een beste tijd gezeten met iedereen,
              maar omdat jullie op Belle gingen wachten, gingen jullie daarna niet mee uit eten met ons. Na ons diner 
              wilden de anderen graag richting een bar, maar ik besloot terug te gaan om
              met jullie te chillen (iee ik weet het, dit blijft echt heel cringe maar misschien was dit juist wel een 
              hele goeie move nu achteraf gezien). We doen wat shotjes en gaan richting de bar, waar de rest al
              lekker aan het dansen is.
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
              tot het personeel naar je toe komt. Jullie halen een lekker shotje voor iedereen en
              we drinken nog wat bier. We hebben ook nog wat leuke BeReals gemaakt.
            </p>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/Screenshot_20230812-120422_BeReal.jpg"} />
            </div>
            <p>  
              Maar alhoewel het heel
              gezellig was met iedereen, zijn wij met z'n vieren naar de Terminal 1 Club gegaan want we
              hadden wel zin in iets meer actie dan constant moeten wachten.
            </p>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/IMG-20221128-WA0023.jpg"} />
            </div>
            <p>
              De rij viel nog best mee in 
              vergelijking met wat Jessie mij gestuurd had, dus dat was helemaal top. Na eindelijk vooraan 
              te staan in de rij, krijgen we hier het leuke voorval dat jij als enige niet binnen komt,
              want de club is te vol. Ik heb daar nog op je staan wachten, want vond het toch wel zielig 
              dat je daar zo stond. Na even te hebben
              gewacht, kom je toch binnen en gaan we gezellig dansen met z'n vieren. Volgens mij nam ik jou 
              toen met de hand mee, zodat we gezamenlijk door de menigte konden komen. We halen ook samen 
              nog wat bier op voor ons 4 (ook met de hand meegenomen?). Op dit moment
              ben ik misschien wel best flirterig, en na een tijdje te hebben gedanst vraag ik je of je wilt zoenen (oeee).
              Je laat duidelijk
              merken dat je me niet verstaat (WAT?!), maar een seconde of twee later staan we daar
              dan toch dichterbij elkaar dan voorheen. Ik bedenk me nu dat dit ook gefilmd is en leuk
              om te bedenken dat er ons zo veel stond te wachten na dit moment :). Na alle gezelligheid
              in de club, zijn we naar buiten gegaan en zijn we daar nog even gebleven met die Bulgaar 
              van Noor en de Portugees van Belle. Wij zijn samen met Noor terug gegaan naar het hostel, terwijl 
              Belle met de Portugees mee ging. Aangekomen bij het hostel, zijn we op ons welbekende bankje
              gaan zitten. Voor mij is dit nog steeds een van de hoogtepunten van het hele
              weekend, en ik vond het echt heel leuk en fijn om gewoon lekker met jou te kletsen. Het voelt ook 
              een beetje als de start van onze connectie. Na best snel word jij opgebeld door Belle of we 
              haar op kunnen halen, want ze wilde toch niet mee met de Portugese gast. Dus wij lopen weer 
              richting de club en komen Belle onderweg tegen, om vervolgens weer terug te gaan naar 
              het hostel en ons bankje weer te claimen. Na hele leuke gesprekken, gaan we maar lekker slapen 
              want het was inmiddels al 5 uur geweest. Je bericht me nog op instagram met een 'slaap lekker :))', wat ik in de ochtend 
              met veel plezier las :). Toendertijd kende ik je natuurlijk nog helemaal niet en al je vrienden, maar je hebt 
              Morris nog een aantal leuke appjes gestuurd wat ik echt heel lief vind om dit achteraf 
              te lezen:
            </p>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/IMG-20230326-WA0033.jpg"} />
            </div>
            <p>
              De volgende dag (zelfde dag :P) ben ik de hele dag weg om lekker te hiken. Ik laat jou dit ook 
              weten via insta en vraag je of jullie het nog laten weten als jullie iets leuks gaan doen 
              in de avond. Rond een uurtje of half 7 zijn  wij weer terug, en ben jij daar spelletjes
              aan het spelen met Noor en Belle. Na gedoucht
              te hebben kom ik bij jullie zitten, maar veel contact hebben we niet in de eerste paar
              uurtjes. Ik wist niet helemaal zeker hoe jij je over de avond daarvoor voelde of dat je gewoon 
              een beetje nerveus was, maar ik
              probeerde het gewoon gezellig te houden. In de avond hebben we leuke spelletjes gespeeld
              met een aantal anderen, en toen vond ik het leuk dat je lekker mee dronk met de vodka
              zonder dat veel anderen dit ook deden (oeps voor later).
            </p>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/IMG-20221128-WA0025.jpg"} />
            </div>
            <p>
              Wij waren denk ik beide inmiddels 
              al wel aardig aangeschoten en het leek er niet op alsof de avond
              nog heel evenementvol zou worden, maar uiteindelijk zijn we toch naar een bar geweest. 
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
              Bij de eerste bar die we binnen gingen leek het heel dood en de sfeer zat er niet helemaal in, 
              dus zijn we verder gegaan op zoek naar een andere bar. We komen via een best wel random gangetje ergens 
              boven bij een soort bar, waar wel een paar mensen waren. Het plekje was best leuk en 
              we konden de plek wel een goede sfeer geven met het aantal mensen waarmee wij waren. 
              Ik herinner me niet heel veel meer op chronologische volgorde, maar ik was dan ook wel 
              best dronken. Ik weet nog dat ik met een Argentijnse gast aan het darten was en toen kwam 
              jij er bij staan. Dit vond ik al wel heel leuk, want het gaf me wel iets van een indicatie dat 
              je me op zocht. We hebben beide 3 darts gegooid en toen waren we er ook wel klaar mee 
              volgens mij hahah. Jij gooide 27 en ik 14 (heeel typisch wel). Vervolgens weet ik het niet 
              helemaal meer. Ik was best wel heel irritant en ik heb je heel vaak belachelijk gemaakt om je 'zeg maarrrrr',
              maar toch bleek er nog steeds ergens een vonk tussen ons te zitten :). Zonder mijn geweten hebben de 
              anderen een weddenschap gehouden hoe laat wij weer zouden gaan zoenen. Dit is mij helemaal voorbij 
              gegaan, maar jij wist dit wel. Je bent uiteindelijk naar mij toe gelopen en hebt mij letterlijk uitgelegd 
              wat er gaande was (en je liet me de lijst ook even zien). Je vroeg of we Tobi dan maar zullen laten winnen :D.
              Je bent ook nog even op een krukje gaan zitten omdat je te moe was om te blijven staan hahah. 
              We hebben daarna nog heerlijk genoten van Belle en Pim, terwijl we met een groepje hun twee aan 
              het insluiten waren met krukken. We zijn daarna weer terug gelopen om ons oud vertrouwde bankje weer in 
              te nemen. Hier hadden we ook nog even goed uitzicht op het andere kleffe tweetal (iew). Het was echt
              ijs ijs ijskoud, maar we hielden elkaar een beetje warm (oke en misschien 
              de dekens ook). We hebben weer leuuuuuk gekletst en daarna vroeg je mij om samen te gaan slapen, omdat 
              dat toch wel gezelliger was dan weer naar ons eigen bed gaan. Het plan was eerst om in mijn bed te gaan 
              liggen, maar jouw bedje had een gordijn dus was dat wel de betere keuze. 
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
              ik mijn spullen nog heb ingepakt, was het tijd om afscheid te nemen. Een goeie afscheidsknuffel,
              dat meer voelde als een 'tot later' dan een 'vaarwel' ;).

              Onderweg naar het vliegveld stuur jij mij nog het beruchte lijstje van de nacht daarvoor, wat blijkbaar 
              al de tweede iteratie was want het duurde te lang hahah. We praten nog eventjes over het feit dat ik
              misschien wel per ongeluk een sok van jou 
              heb meegenomen in mijn tas. Daarna vraag ik je heel subtiel of je me nog foto's/video's 
              wilt sturen van het weekend, en geef ik je mijn nummer zodat je dat via WhatsApp kunt doen :))
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
              Na het weekend hadden we op de dinsdag nog even geappt nadat jij me een leuke foto had gestuurd 
              van jullie in de sneeuw, waarna het gesprek relatief snel voorbij was 
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
              het station gebracht waarna jij wederom richting Bunnik ging, maar deze keer zonder single 
              te zijn :)
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
            contentStyle={{ background: '#3abd5f', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #3abd5f' }}
            date="27 februari 2022"
            iconStyle={{ background: '#3abd5f', color: '#fff' }}
            icon={<Cake />}
          >
            <h3 className="vertical-timeline-element-title">Jij bent jarig!!</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">en temp</h4> */}
            <p>
              In deze skivakantie week was jij ook jarig: alweer 19!! Volgend jaar moeten 
              we het maar even groots vieren, want ik ben er de volgende keer zekerrr bij :)
              En ik was ook vergeten een gefeliciteerd video te maken op de ski's wat ik
              je had gezegd te gaan doen, dus die heb je ook nog van me tegoed :D
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#eb9249', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #eb9249' }}
            date="9 maart 2022"
            iconStyle={{ background: '#eb9249', color: '#fff' }}
            icon={<Restaurant />}
          >
            <h3 className="vertical-timeline-element-title">Uiteten met mams</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">en temp</h4> */}
            <p>
              Na het weekje skivakantie, had ik de donderdag daarna afgesproken met 
              mijn moeder om even lekker uit eten te gaan. Hier heb ik ook het nieuws 
              gebracht dat ik een relatie heb met een hele leuke meid genaamd Julie, en ik 
              had mijn moeder in tijden niet zo nieuwsgierig gezien hahah. Ik denk dat ze 
              op dat moment jou ook zo snel mogelijk wilde ontmoeten, dus dat moest dan ook 
              maar een keertje :)
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#ff3d3d', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #ff3d3d' }}
            date="11 maart 2022"
            iconStyle={{ background: '#ff3d3d', color: '#fff' }}
            icon={<FavoriteBorderIcon />}
          >
            <h3 className="vertical-timeline-element-title">'I love you'</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">en temp</h4> */}
            <p>
              Wij waren weer eens een nachtje aan het appen en we gingen zo'n lange 
              couples vragenlijst af (dit vond ik toen trouwens echt heel leuk). En toen 
              kwam de volgende vraag:
            </p>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/Screenshot_20231108-181705_WhatsApp.jpg"} />
            </div>
            <p>
              Ik vind dat laatste berichtje van jou al helemaal leuk hahah, veel te 
              klef allemaal :))
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#5c69ff', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #5c69ff' }}
            date="12 maart 2022"
            iconStyle={{ background: '#5c69ff', color: '#fff' }}
            icon={<LocationCity />}
          >
            <h3 className="vertical-timeline-element-title">Dagje Zwolle Cityy</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">en temp</h4> */}
            <p>
              Op zondag 12 maart hadden we weer afgesproken elkaar te zien, en omdat 
              ik alleen op de zondag kon hadden we besloten om zo min mogelijk tijd 
              te verspillen aan treinen en een middenweg kozen in Zwolle. De dag bestond 
              voornamelijk weer uit heel veel lopen en lopen, maar dat blijf ik toch 
              wel heel leuk vinden. Ik kan me niet herinneren of we ook ergens geluncht
              hebben, maar volgens mij hebben we een broodje gehaald bij de supermarkt 
              en zijn we weer lekker parkjes op gaan zoeken. Je hebt me hier ook wat 
              mindere dingen verteld, maar ik vind het heel fijn dat je het mij hebt laten 
              weten en weet ook dat ik er altijd voor je ga zijn als je je niet zo goed voelt &lt;3.
              In de avond hadden we een goeie piekersessie over waar we nou wilden gaan eten, 
              maar we zijn uiteindelijk tot een besluit gekomen om lekkere Griekse streetfood te eten. 
              Na het avondeten, hebben we besloten om nog een parkje op te zoeken en het enige 
              parkje dat we nog niet gehad hadden was nogal ver weg, maar we besloten er toch 
              heen te lopen. Wat mij daar heel memorabel blijft is het bankje met het uitzicht op het basketbalveld 
              bovenop het dak bij de brandweerkazerne. Het blijft gewoon zo fijn om even samen 
              met elkaar te zijn en lekker te kletsen enzo :). Ik kan mijn stappenteller niet 
              meer zien van die dag, maar volgens mij liet jij me ooit zien dat dit de dag was 
              waar je bijna je record behaald had hahah. Vlak voor 11en stappen we beide op de 
              trein, elk richting ons eigen huis om elkaar daarna weer een week te moeten missen :(
            </p>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/Schermafbeelding 2023-11-08 183859.png"} />
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#338dc4', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #338dc4' }}
            date="18 maart 2022"
            iconStyle={{ background: '#338dc4', color: '#fff' }}
            icon={<BrunchDining />}
          >
            <h3 className="vertical-timeline-element-title">Leiden!</h3>
            <h4 className="vertical-timeline-element-subtitle">+ ontmoeting Sav en mam</h4>
            <p>
              De dag na Zwolle had ik aan je voorgesteld of je het leuk leek om de volgende zaterdag
              uit eten te gaan in Leiden, samen met mij, Sav en mijn moeder. Ik wist dat je die middag 
              in Delft zou zijn om samen met Sam te lunchen, en het dagje naar Leiden stond 
              al gepland dus was dit de perrrfecte kans om elkaar te ontmoeten. Na een rustige 
              werkweek was het alweer zaterdag, en maakte wij ons klaar voor een leuk dagje Leiden. 
              Na ons dagje met z'n drieën, kwam jij om 17:15 aan op station Leiden om ons te 
              vergezellen :). Ik haal jou op bij het station en samen lopen we richting Pavarotti 
              Dolce, waar Sav en mam al zitten te wachten op deze heeele speciale ontmoeting (ik weet 
              ook gewoon zeker dat mijn moeder het heel spannend vond hahah). Een klein probleempje 
              wat je al wel gemerkt hebt is dat ik, Sav en mam dus wel goed zijn in elkaar een beetje 
              plagen en vervolgens helemaal in de slappe lach raken. Ik hoop niet dat je je er een 
              beetje buitengesloten bij voelde, maar ik vond het wel een hele gezellige avond. 
              Inmiddels ken je ze ook al wel wat langer nu, maar leuk om terug te denken aan die 
              eerste ontmoeting hahah. Na het eten namen we afscheid van hun twee, en baanden wij 
              onze weg richting Bunnik. Tijdens het lopen begon het helaas wel te regenen, en raad 
              eens wie weer geen jas aan heeft (spoiler: ikke) dus hebben wij ons nog even verscholen 
              onder een afdakje. Ik weet nog dat jij echt heel happy en hyper was hahah, maar het was 
              ook gewoon (weer) heel leukkk :)
            </p>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/IMG-20230319-WA0021.jpg"} />
            </div>
            <p>
              Mijn moeder vond het trouwens ook heel leuk, ik kreeg nog het volgende appje toegestuurd:
            </p>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/Screenshot_20231108-224130_WhatsApp.jpg"} />
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#426cc7', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #426cc7' }}
            date="19 maart 2022"
            iconStyle={{ background: '#426cc7', color: '#fff' }}
            icon={<GroupWork />}
          >
            <h3 className="vertical-timeline-element-title">Boulderen en sushiii</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">en temp</h4> */}
            <p>
              Na een heerlijk nachtje in jouw bedje, stonden we de volgende ochtend weer 
              op met het goeie plan om te gaan boulderen! Ik had dit nog nooit gedaan, 
              maar het leek me wel heel leuk en een goeie eerste keer dat we samen iets 
              actiefs doen (oke als je al het lopen niet meetelt) :). Duss op de fiets 
              naar Utrecht en met de sportkleding mee gaan we richting de boulderhal. 
              Ik vond het heel leuk, maar mijn handen waren wel echt compleet vernaggeld 
              na al het geklauter hahah. 
            </p>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/20230319_120833.jpg"} />
            </div>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/20230319_122449.jpg"} />
            </div>
            <p>
              Na eenmaal terug te zijn en gedoucht te hebben, kom jij met het 
              idee om zelf sushi te gaan maken. Ook dit had ik nog nooit gedaan hahah, 
              maar sushi is natuurlijk wel heel lekker dus gooood plan. Wij gingen nog even 
              naar de winkel en waren daarna aan het eind van de middag begonnen aan 
              het sushi project. Ze waren echt goed gelukt en het was ook nog eens heel 
              lekker, dus een geslaagd idee :). Ik herinner me ook dat we nog een foto 
              hebben gemaakt op die wegwerpcamera, dus die moet ik maar eens vaker gaan 
              gebruiken zodat we die ooit eens kunnen zien.
            </p>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/20230319_184548.jpg"} />
            </div>
            <p>
              Het was wel weer een zondag, dus helaas kon ik niet nog een nachtje blijven 
              slapen. Dus moesten we weer een weekje wachten om elkaar weer te zien, maar 
              het volgende weekend was ook alweer vol gepland met een heel weekendje 
              naar Eindhoven :D.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#a86cd4', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #a86cd4' }}
            date="24 - 26 maart 2022"
            iconStyle={{ background: '#a86cd4', color: '#fff' }}
            icon={<Explore />}
          >
            <h3 className="vertical-timeline-element-title">Weekendje Eindhoven!</h3>
            <h4 className="vertical-timeline-element-subtitle">+ Den Bosch</h4>
            <p>
              Na een lang 5-daags werkweekje was het weer tijd om richting het zuiden 
              te gaann. Na werk op de vrijdag, nam ik de trein van 18:48 om vervolgens 
              rond 21:00 op Utrecht Centraal te arriveren. Hier sta jij mij al op te wachten met de auto,
              en we rijden gezamenlijk verder naar Eindhoven/Riethoven. 
              Na een uurtje rijden komen wij rond 22:00 aan bij het huis van Brenda en Armand.
              Hier ontmoet ik niet alleen je oom, tante, neefjes en nichtje, maar ook je opa en
              oma waren aanwezig. Het Nederlands elftal was aan het spelen, en na wat gekletst
              en wat thee/water gedronken te hebben gingen we lekker naar ons eigen plekje 
              in de tuin. Hier hebben we nog even lekker gelegen, bed BeReals gemaakt en daarna 
              zijn we maar lekker gaan slapen (en misschien niet slapen eerst nog :)).
            </p>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/IMG-20230326-WA0018.jpg"} />
            </div>
            <p>
              Na een lekker nachtje samen, zijn we 's ochtends best laat uit bed gegaan om maar 
              eens te gaan ontbijten. Ik herinner me niet helemaal meer wat we die ochtend en begin 
              van de middag gedaan hebben, maar volgens mij hebben we leuk op de trampoline gesprongen,
              frisbee over gegooid en overal het algemeen gewoon chillingss. In de middag zijn we 
              met de auto op pad gegaan om een goeie wandeling te maken. Maar voordat we dat deden,
              gingen we nog langs de Jumbo om wat drank en snackies te kopen (oee oee wat gaan wij 
              nou weer doen). We rijden door richting de grens van België, en maken een wandelingetje 
              door het bos. Wij lopen hier hand in hand en we komen een jongere jongen en meid tegen,
              en nadat zij ons passeren zien wij achter ons dat ze ook heel lief hun handen vastpakken. 
              Vond ik toch wel eventjes heel schattig, wat voor liefde wij uitstralen hahah :). We rijden 
              weer terug en gaan binnen gezellig doen. We gaan sjoelen en ik haal toch even het record
              van de dag (ja dat vind ik natuurlijk heel leuk).
            </p>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/Screenshot_20230325-200218_BeReal.jpg"} />
            </div>
            <p>
              Een uurtje later eten we samen met de
              hele groep heerlijke spaghetti bolognese, en ik herinner me nog dat jij (volgens jou) onbewust 
              een handje op mijn been legt (oeeoeee). We blijven nog tot een uurtje of 8/9 kletsen en 
              thee drinken, en verkassen daarna terug naar ons eigen stekje. Hier hadden we natuurlijk
              nog de drank en snackies liggen want (tromgeroffel) bodyshotsss. Ik vond dit zo leuk dat we dit
              hadden bedacht en ook gewoon leuk deden, lekker random maar vet grappig. Ook hebben we nog 
              geblinddoekt lichaamsdelen geraden en een spel waarbij er kleding verdween. Dit is daarna nog 
              wel wat verder geëscaleerd, en ik vond het echt heel heel gezellig. Nu ik dit ook aan het 
              typen ben vind ik het ook weer helemaal leuk hahah, we moeten maar eens weer een keertje zo'n 
              random leuk avondje doen. Na een goede workout hebben we weer wat selfies gemaakt en zijn 
              we lekker gaan slapen :)
            </p>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/Snapchat-1805541759.jpg"} />
            </div>
            <p>
              De volgende ochtend hebben we eerst rustig aan gedaan, een lekker ontbijtje 
              gegeten en bedacht wat ons volgende plan zou zijn. Rond 12 uur nemen we afscheid 
              van iedereen en vertrekken we richting Rosmalen. We stoppen onderweg nog om de 
              auto op te laden, dus we hadden tijd om nog wat leuke selfies te maken (daar kunnen 
              nooit genoeg van zijn).
            </p>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/IMG-20230326-WA0038.jpg"} />
            </div>
            <p>
              Eenmaal aangekomen in Rosmalen stapten we op de trein naar Den Bosch, om er nog 
              een leeeeuke dag van te maken. We haalden wat te lunchen bij de Jumbo en liepen door 
              richting het centrum. Ik was nog nooit in Den Bosch geweest en had ook echt geen 
              idee wat er allemaal te doen was, dus volgens mij hebben we even gegoogled wat onze 
              opties waren voor de dag. Het regende natuurlijk wel weer zoals altijd met ons hahah, 
              maar gelukkig hadden we capuchons :)
            </p>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/Snapchat-768988888.jpg"} />
            </div>
            <p>
              We zijn een kerk binnen geweest en hebben daarna een lekker drankje gedaan bij 
              Café In De Kleine Werelt. Toen kwam jij met een term waar ik nog nooit van gehoord 
              had: de Bossche Bol. Dit bleek de lokale specialiteit te zijn, dus moesten we die 
              natuurlijk nog wel even halen. Dus met zo min mogelijk proberen te knoeien
              snacken wij de bol op, maar dit ging niet helemaal zo soepel als gehoopt hahah. 
            </p>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/20230326_152824.jpg"} />
            </div>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/IMG-20230326-WA0035.jpg"} />
            </div>
            <p>
              Na het dagje in Den Bosch te zijn geweest, besloten we om de trein rond 18:15 
              terug te nemen naar Rosmalen om daar lekker gemakkelijk een pizzaatje af te halen.
              We hadden de auto geparkeerd op een een parkeerplaats, maar dat was nou niet de 
              leukste plek om te gaan eten dus zochten we nog een leuk bos dichtbij. Het was even 
              zoeken, maar we vonden een goed afgelegen plekje om lekker onze pizza's op te peuzelen.
              Ik denk dat de pizza's een soort speciaal ingrediënt hadden ofzo, want het werd daarna
              alleen maar gezelliger en gezelliger (woepsie) :). Om 21:00 hebben we het wel gezien in Rosmalen, 
              en rijden we weer richting Utrecht. Hier zet jij me af bij het station en moesten we er 
              weeeer aan geloven dat we elkaar de midweek niet gingen zien :((
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#fc287a', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #fc287a' }}
            date="27 maart 2022"
            iconStyle={{ background: '#fc287a', color: '#fff' }}
            icon={<PregnantWoman />}
          >
            <h3 className="vertical-timeline-element-title">De zwangerschapstest</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">en temp</h4> */}
            <p>
              Het was de maandag na het weekend en je had me verteld dat je al 
              6 dagen te laat was met je ongesteldheid, dus had je besloten toch maar 
              een zwangerschapstest te gaan doen. Ik zat mooi op werk terwijl jij de 
              test haalde bij de winkel. Jij zegt nog mooi even 'Ik ben altijd heel 
              regelmatig ongesteld dus het is wel vaag' om de druk nog even op te voeren hahah.
              Dus jij doet die test en toch wel een beetje stress schoot er in tijdens het 
              wachten. Jij had inmiddels al 2 minuten niet meer gereageerd, waarna je mij 
              een leuke foto stuurde van de uitslag:
            </p>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/IMG-20230327-WA0014.jpg"} />
            </div>
            <p>
              Pfieuwww, nog geen kleine Sofia :()
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#ed9940', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #ed9940' }}
            date="31 maart - 2 april 2022"
            iconStyle={{ background: '#ed9940', color: '#fff' }}
            icon={<LocalBar />}
          >
            <h3 className="vertical-timeline-element-title">Op stap in Groningen!!</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">en temp</h4> */}
            <p>
              Doordeweeks heb jij nog pull-ups gedaan met Mirre, heb ik eigenlijk 
              alleen maar gewerkt en had jij je laatste werkdag voor je reis! En toen 
              was het alweer weekend, waarin jij weer gezelligggg richting Groningen kwam.
              We hadden ergens in de afgelopen weken het eens gehad over op stap gaan in Groningen,
              en jij vroeg mij dus of je nog stapkleding mee moest nemen. Ik had nog niet helemaal 
              besloten wat de plannen zouden worden, maar toen ik had besloten om samen met Sav te 
              gaan eten zat het stappen er heel dik in hahah. Rond half 7 nam jij de trein en stond ik 
              je twee uurtjes later weer op te wachten in de regen :). Met jou achterop, fietsen we 
              weer richting huis waar de drankjes en snackies al klaar stonden. We hadden wat Amaretto 
              natuurlijk, en de Bacardi was ook zeker niet vol mee aan het einde van de avond. Perudo 
              kon ook zekerss niet missen op de avond (was dit de eerste keer dat we perudo speelden ???, 
              ik denk haast van wel).
            </p>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/bereal-2023-03-31-1200.jpeg"} />
            </div>
            <p>
              Samen met Sander en Sav werd het later en later, waarna we met z'n
              drieën ons klaar maakten om richting de clubs te gaan. Er zat oprecht al wel veel in geloof ik,
              want ik kan me echt niet meer veel herinneren. We zijn in ieder geval bij Shooters binnen geweest,
              waarschijnlijk Het Feest en Golden Fust ook sowieso wel en Klein Amsterdam herinner ik me ook nog 
              vaag. Op het moment dat Sav naar de wc ging, gingen wij nog eventjes los en daarna zijn we 
              ook weer rond kwart over 4 's nachts naar huis gegaan. Alhoewel ik me niet heel veel meer 
              herinner, heb ik wel in mijn hoofd dat het echt een hele gezellige avond was en we hadden 
              ook best laat gemaakt dus hebben we ook genoeg dingen gedaan. Toen we thuis aankwamen, herinner 
              ik me nog dat jij al helemaal in dromenland was toen ik terug kwam van het tandenpoetsen. 
              Ik vond dat wel heel schattig hahah. We hebben heel lang geslapen en waren ook wel een beetje 
              brak. Dit betekende dan ook dat we ons bed niet uit kwamen.
            </p>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/IMG-20230403-WA0000.jpg"} />
            </div>
            <p>
              We bleven niet zo maar eventjes in
              bed liggen, maar volgens mij kwam we er echt pas rond 16:00 uit. Heel veel geklets en geknuffel en 
              ge-, het was in ieder geval suuuper gezellig. Het was uiteindelijk wel tijd om het bed uit te gaan,
              maar veel hebben we niet gedaan. Het was dan ook alweer bijna etenstijd, dus zijn we boodschappen gaan 
              doen en hebben we samen wat lekkere pasta gekookt. 
            </p>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/bereal-2023-04-01-1200.jpeg"} />
            </div>
            <p>
              Geen idee meer wat we in de avond gedaan hebben, maar ik denk maar even een lekker rondje gelopen want 
              dat is natuurlijk altijd een goeie. De volgende dag hebben we maar wel even wat actiefs gedaan en 
              zijn we voor het eerst samen naar de sportschool geweest! Volgens mij hebben we besloten om die dag 
              de beentjes te gaan trainen, en dat ging best wel lekker. Ook dit moeten we binnenkort weer een keertje 
              doen, vind het wel een leuke activiteit om samen te doen. Thuis hebben we samen lekker gedoucht en daarna 
              zijn we weer wat gaan wandelen. Ook heb ik op deze dag dat armbandje aan de boom gehangen, want dat 
              was de bedoeling voor goed geluk. 's Avonds hebben we weer bij Magoya gegeten, maar ik denk dat we hier 
              oprecht de lelijkste foto's van elkaar hebben gemaakt:
            </p>
            <div className={styles.two_images}>
              <img src={"/RoaJuul/images/IMG-20230403-WA0004.jpg"} />
              <img src={"/RoaJuul/images/20230402_183222.jpg"} />
            </div>
            <p>
              Ik quote jou: 'Wat een afschuwelijke foto's. Die had je wel voor jezelf mogen houden.' hahah. Mijn moeder 
              vond het ook weer heel leuk trouwens:
            </p>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/Screenshot_20231108-224147_WhatsApp.jpg"} />
            </div>
            <p>
              Toen 
              kwam de vraag of jij naar huis wilde gaan, of nog een nachtje bleef slapen. Uiteindelijk ben je toch 
              nog een nachtje blijven slapen want ja, binnenkort kan dat allemaal 4 maanden lang niet meer. 's Ochtends 
              breng ik jou naar het station en fiets ik door naar werk, en was het nog een weekje tot het laatste weekend
              dat we elkaar konden zien voor jouw vertrek :'(
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#2da852', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #2da852' }}
            date="7 - 9 april 2022"
            iconStyle={{ background: '#2da852', color: '#fff' }}
            icon={<Luggage />}
          >
            <h3 className="vertical-timeline-element-title">Laatste weekendjeee :(</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">en temp</h4> */}
            <p>
              De week was voorbij, wat betekende dat ik voor de laatste keer in een langeeee tijd de trein 
              heb genomen van Groningen naar Bunnik. Mijn trein kwam om 21:21 aan in Bunnik, waar jij mij op zou staan
              te wachten. Je was alleen bijna te laat, dus moest je nog even een sprintje trekken om het te halen hahah. 
              Deze avond was ik namelijk niet de enige gast, ook Mirre, Anne, Frannie en Nina waren er. Ik had Mirre en
              Frannie nog niet ontmoet, dus dat was ook wel heel leuk. Ik moest nog raden welk uitgetrokken haar van jou 
              was en we hebben nog boom-it gedaan (oja en die vieze voeten die ik aan jou gaf was natuurlijk niet serieusss hahah). 
              Zo heel lang bleven ze allemaal niet, dus na ongeveer een uurtje zijn wij de auto ingestapt om 
              3 van de 4 meiden naar huis te brengen. We hebben nog wat Mooi Wark aangezet in de auto en jij hebt 
              afscheid genomen van iedereen, omdat ze jou natuurlijk niet meer gingen zien voor jouw vertrek. Eenmaal 
              terug thuis, zijn we lekker naar bedje gegaan. 
            </p>
            <p>
              In de ochtend hebben we eerst lekker gechilld en daarna zijn we met de fiets naar Mille's hockeywedstrijd 
              gegaan. Het was echt perfect weer, het zonnetje scheen met nog een beetje kou er af en toe bij. Ik vond dit ook 
              echt heel erg leuk, het deed me denken aan vroeger bij de voetbalwedstrijden van mij en vond het fijn om weer even 
              dat gezinsgevoel te hebben. Ze wisten helaas niet te winnen, maar wij konden daarna nog wel eventjes een balletje slaan. Ik 
              bakte er uiteraard niet heel veel van en jij moest even laten zien wat jij allemaal kon hahah. Ik vond dit echt 
              heel leuk, hoe weinig ik er ook van kon. Een kleine 10 minuten later zijn we weer terug gegaan, want in de middag 
              zouden we een high tea hebben die je moeder had gekregen voor haar verjaardag(?). Dus rond een uurtje of 14, zijn we met 
              z'n allen de auto ingestapt richting Kekerdom waar we de high tea zouden hebben. In de auto ben ik nog uitgelachen dat 
              ik niet snapte hoe ik een Rubiks cube moest oplossen (stom) en hebben we nog veel fotootjes gemaakt. Hier zaten ook heeele lelijke
              tussen maar ik ben bang dat je me gaat kietelen als ik die hier in stop hahah.
            </p>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/IMG-20230409-WA0021.jpg"} />
            </div>
            <p>
              De rit was wel anderhalf uur en toen realiseerden we in de auto alleen veel te laat dat het plekje aan de andere kant van de Waal was.
              Omrijden duurde nog minimaal een half uur, maar het zou ook 
              al gaan sluiten om 17. Het had dus weinig zin om nog heen te gaan, dus zijn we naar een ander plekje gegaan. 
              Bij de Bleekdalhoeve in Renkum hebben we heerlijk een borrelplankje gegeten en wat gedronken. Oooook hebben we 
              hier weer zo'n foto genomen met die wegwerpcamera. Ik moet dit nu echt vaker er bij pakken zodat we hem ook eens vol 
              maken, ik wil de foto's wel graag zien namelijk :)). Rond half 6 waren we weer terug in Bunnik en hebben we waarschijnlijk 
              wat later avond gegeten. Wij hebben ook nog een ijsje gehaald met z'n tweeën als ik het me goed herinner en daar heb je ook 
              de eigenaren(?) nog even gezien van de ijssalon. Ik denk niet dat we nog heel veel bijzonders gedaan hebben deze avond, misschien 
              dat we Codenames gespeeld hebben en gewoon gerelaxed hebben. Misschien hebben we wel heel veel geknuffeld nu het nog kon :). Rond half 
              12 gingen we naar bed en hebben we nog de welbekende spiegelselfies gemaakt. 
            </p>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/20230408_232523.jpg"} />
            </div>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/20230408_232501 (1).jpg"} />
            </div>
            <p>
              En dan was het alweer de volgende ochtend, de ochtend dat jij ging vertrekken richting Sri Lanka!
              Het was alleen ook Pasen, dus hadden we eerst een heerlijk paasontbijtje met jouw gezin.
            </p>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/IMG-20230409-WA0015.jpg"} />
            </div>
            <p>
              Jij hebt nog de laatste dingetje bij elkaar gepakt en we hebben nog even heel veel knuffeltjes gegeven. En toen was het 
              tijd om naar het station te lopen! Na eventjes wachten kwam ook Noor met haar gezin er aan. En wat bleek nou,
              jij was je paspoort vergeten hahaha. Echt heel heel dom als je dit te laat had herinnerd, maar het kwam wel goeed 
              want je moeder was nog heel snel op en neer gefietst. Hier hebben wij ook nog even een fotootje gemaakt, die je ook 
              op je insta gezet had (insta official!!! hahah).
            </p>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/IMG-20230411-WA0013.jpg"} />
            </div>
            <p>
              En toen kwam de trein, dus namen jullie afscheid van iedereen en gingen we onderweg naar Utrecht Centraal. Hier kwam Sam 
              ook nog even om je uit te zwaaien. Ik had Sam nog nooit eerder gezien, maar ik was op het moment ook niet helemaal 
              sociaal bezig dus voelde het een beetje kort en niet heel diepgaand. Die moet ik binnenkort ook nog maar eens een keertje 
              zien, lijkt me wel heel leuk. Ze ging weer door en het duurde inmiddels ook niet zo heel lang meer voordat jullie volgende trein ging. 
              Toen was het tijd voor de allerallerlaatste knuffels, en tijd om gedag te zeggen. Op het moment vond ik het ook nieteens 
              zo heel lastig ik had denk ik niet helemaal het besef dat het echt heel heel lang zou zijn, maar nu terugdenkend vind ik 
              het bijna emotioneler dan toen hahah (kleine traantjes hierooo oepsie). 4 maanden was ook wel echt heel lang en ik hoop niet dat 
              we ooit nog eens zo lang elkaar fysiek niet zien. 
            </p>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/20230409_111558.jpg"} />
            </div>
            <p>
              En daar gingen jullie dan, maar natuurlijk wel op een heeele gave reis :))
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#575757', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #575757' }}
            date=" "
            iconStyle={{ background: '#575757', color: '#fff' }}
            icon={<Abc />}
          >
            <h3 className="vertical-timeline-element-title">Intermezzo</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">en temp</h4> */}
            <p>
              We hebben in de tijd dat we op reis waren natuurlijk zooo veel geappt en ik denk dat ik alleen 
              maar verliefder ben geworden ookal zagen we elkaar niet. Ik heb niet de tijd om alles te researchen nu want tentamens en 
              we zijn ook veel te veel samen dat ik deze verhaaltjes amper af kan maken hahaha. Ik heb een paar highlights toegevoegd, 
              maar als je me later wilt helpen met de leuke videogesprekken en appjes die wij hebben gehad zou ik dat heel leuk vinden om 
              deze hier nog in te zetten :)
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#3189f5', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #3189f5' }}
            date="27 april 2022"
            iconStyle={{ background: '#3189f5', color: '#fff' }}
            icon={<School />}
          >
            <h3 className="vertical-timeline-element-title">Delft??</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">en temp</h4> */}
            <p>
              Jij had je natuurlijk ingeschreven voor de Universiteit van Twente en de TU Delft, maar het duurde even voordat 
              je de uitslag kreeg of je bij de studies binnen was. Je was al relatief snel binnen bij Twente, dus dat was al heel fijn 
              om in ieder geval al zeker te weten. En toen op 15 april kreeg jij het bericht dat je plek 117 had voor 
              KT in Delft, wat veel hoger was dan je had verwacht! Maarja je was natuurlijk nog niet binnen, want er mochten maar 
              100 mensen binnen. Dus na een kleine 2 weekjes waarin we hier niks over gehoord hebben, krijg ik ineens het volgende 
              toegestuurd gekregen:
            </p>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/Screenshot_20231116-112016_WhatsApp.jpg"} />
            </div>
            <p>
              Ik was mooi een vlaggenquiz aan het doen met Anne en Sander op de bank, en zag mijn telefoon niet over gaan. 
              3 minuutjes later zie ik ineens deze appjes en ik denk oh nee wat is er. Dus ik bel terug en daar kom je met het 
              nieuws dat je ook bij Delft binnen bent :)). Ik had de keuze al een tijd geleden gemaakt om naar Delft te gaan, wat 
              nu betekende dat we in dezelfde stad zouden gaan wonen en studeren :)). Helemaal happy happyyy
            </p>
            <p>
              Klein tussendoortje hahah. Ik maakte net tijdens het schrijven van dit verhaaltje per ongeluk een BeReal hiervan en jij 
              hebt je BeReal ook echt net gemaakt. Hoop niet dat je dit hebt gezien :)
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#e87838', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #e87838' }}
            date="5 mei 2022"
            iconStyle={{ background: '#e87838', color: '#fff' }}
            icon={<LocalAirport />}
          >
            <h3 className="vertical-timeline-element-title">Sharjah Airport knuffelssss</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">en temp</h4> */}
            <p>
              Op 4 mei was het zo ver: ik ging ook eindelijk op reisss! Mijn reis begon in Dubai en ik weet nou niet of 
              dit compleet geluk was, maar jullie overstap van Sri Lanka naar Kenya was op exact hetzelfde vliegveld en ook op exact dezelfde dag 
              dat ik aan zou komen. Dus na mijn overstap in Istanbul, kwam ik om 06:15 aan op Sharjah Airport, waar jij samen met 
              Noor al de nacht verbleef. We stonden natuurlijk beide te wachten op een heeeele lange knuffel. Jij stond helemaal in spanning te wachten 
              bij de verkeerde aankomstplek hahah, maar toen zagen we elkaar nadat jij mij verteld had dat je bij gate 5 stond. En daar was 
              dan ook de heeeeerlijke knuffel :)). We zijn even op stoeltjes gaan zitten, maar zijn al snel weer opgestaan 
              om naar jullie hotelkamer te gaan. Hier hebben we nog een half uur lekker samen kunnen liggen en knuffelen, wat toch weer 
              even heel heel erg fijn was. Nu was het dan echt het moment om elkaar 3 maanden niet te kunnen zien. Voordat we afscheid namen van elkaar,
              had je nog een kaartje in mijn tas gedaan die ik moest lezen nadat ik de douane door was. Mijn tas was al van de baggageband afgehaald, 
              maar lag er gelukkig nog wel en toen heb ik buiten het kaartje gelezen. We konden nog eventjes appen, waarna ik de bus nam en geen 
              internet meer had en jullie je overstap gingen halen. Je appte me nog dat het jou toch nog wel wat zwaarder viel dan je had 
              gedacht, want 3 maanden was echt wel heel langgg. Maar dit zou allemaal goed komen, en we hebben beide genoten van levenservaringen 
              die we niet gemist zouden willen hebben :)
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#32a88b', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #32a88b' }}
            date="2 - 3 augustus 2022"
            iconStyle={{ background: '#32a88b', color: '#fff' }}
            icon={<FlightLand />}
          >
            <h3 className="vertical-timeline-element-title">De terugkomst van Roan</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">en temp</h4> */}
            <p>
              Na een heeeeele lange 3 maanden zonder elkaar gezien te hebben (maar wel heeel veel geappt en gebeld),
              was daar het dan eindelijk het moment waar we zo lang op gewacht hadden: ik kwam terug van mijn reis :)). 
              Na een goede 7 uur van Bangkok naar Qatar, was daar dan uiteindelijk de allerlaatste vlucht richting Amsterdam. 
              Na weer 7 uurtjes gevlogen te hebben kom ik dan weer aan in Nederlanddd, waar jij samen met Sav en mijn vader 
              mij op staan te wachten bij de aankomsthal :)). Het was ook de eerste keer dat je mijn vader ontmoet had, wat 
              natuurlijk ook leuk was. Ik zag jullie al mooi door de raampjes gluren of jullie mij al konden zien, want jullie 
              stonden natuurlijk ook al bij de goeie bagageband. Ik spotte jullie wel al heel snel, dus ik vond het ook veel 
              te leuk om jullie eventjes te bespioneren hahah. Ik vond het ook niet leuk om een beetje bij het raam te gaan staan 
              als ik jullie niet kon spreken, dus verstopte me ik zo lang mogelijk zodat ik jullie wel kon zien (ik ben echt heel 
              kinderachtig hahah maar dit vind ik veel te leuk). Na een tijdje spotten jullie me dan eindelijkk.
            </p>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/20230802_150708.jpg"} />
            </div>
            <p>
              Ik moest nog eventjes wachten op mijn tas en toen die er aan kwam, was het tijd om richting jullie te lopen :). 
              Hier was dan ook de heeeele goeie en lang verwachte terugkomst knuffel :)) (en een llk'tje). Jullie hadden een Hello 
              Kitty helium ballon voor mij gekocht, dus die hebben jullie mooi aan mijn tas gestrikt en zo zijn we (hand in hand natuurlijkkk) 
              teruggelopen naar de auto. Ook de BeReal kwam echt op het perfecte moment.  
            </p>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/IMG-20230802-WA0139.jpg"} />
            </div>
            <p>
              Ik had wel een lange reis achter de boeg, dus heb tijdens het rijden lekker op je benen gelegen en ik kreeg 
              ook een heerlijke hoofdmassage (thankyouuu). Dit was ook je eerste keer in De Wilp, wat ik ook heel leuk vond 
              want dit was waar ik opgegroeid ben en om jou hier te hebben voelde dan ook heel speciaal. Ik heb echt oprecht geen idee 
              meer hoe de rest van die dag verliep. 's Avonds sliepen wij in de studio, waar we gewoon fijn met z'n tweetjes waren 
              en elkaar heel heel veel knuffels gaven (en andere dingetjes). Ook hebben we nog een paar bedselfies gemaakt want foto's 
              van ons samen waren wel echt weer nodig na al die maanden naar dezelfde foto's kijken :)
            </p>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/IMG-20230803-WA0046.jpg"} />
            </div>
            <p>
              Na een heerlijk nachtje slapen en weer lekker samen zijn worden we de volgende ochtend weer wakker, maar het 
              bed zijn we zeker niet snel uit gekomen (woepsieee). Ik durf niet te zeggen hoe lang we nog hebben gelegen, 
              maar toen we ons bed uitkwamen konden we haast al wel gaan lunchen volgens mij. Maar ook toen konden we ons natuurlijk 
              niet weerhouden van het maken van leuke fotootjesss :): 
            </p>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/20230803_113049.jpg"} />
            </div>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/20230803_113200.jpg"} />
            </div>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/IMG-20230803-WA0056.jpg"} />
            </div>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/IMG-20230803-WA0057.jpg"} />
            </div>
            <p>
              We gaan eindelijk de studio uit en nemen wat brood als ontbijt, waarna het tijd was voor mij 
              om jou een hele tour te geven door De Wilp :). De route was niet heel denderend op zichzelf, maar 
              ik vond het heel leuk om je alles te laten zien van mijn jeugd en alle goeie herinneringen die ik op 
              deze plekken heb overgehouden. 
            </p>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/Schermafbeelding 2023-11-20 000524.png"} />
            </div>
            <p>
              Eenmaal terug hebben we weer een spelletje gedaan (klootzakken denk ik), en hebben we een beetje op de 
              bank gehangen. Aan het einde van de middag hadden we het goede idee om nog langs mijn oma te gaan. Ik vond 
              het leuk dat je die ook gezien hebt, het voelt toch wel echt leuk dat je mijn familie beetje bij beetje 
              leert kennen :). Volgens mij hebben we een lekker pizzaatje gehaald en zijn we ook weer 's avonds een beetje 
              op tijd naar de studio gegaan. Dat was dan alweer ons tweede dagje weer lekker samen :)
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#248ad4', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #248ad4' }}
            date="4 - 5 augustus 2022"
            iconStyle={{ background: '#248ad4', color: '#fff' }}
            icon={<Apartment />}
          >
            <h3 className="vertical-timeline-element-title">Groningennn</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">en temp</h4> */}
            <p>
              Na het tweede nachtje in de studio, stond er vandaag op de planning dat we naar mijn moeder gaan :)). 
              Dus rond 11:30 werden wij naar Leek gebracht, waar mijn moeder ons al op zat te wachten in haar chalet. 
              Ik wee techt niet meer wat we gedaan hebben hahah, volgens mij zijn we naar de Jumbo geweest om even lunch 
              te halen. Rond een uurtje of 14 reden we door naar Groningen, waar we het nieuwe huisje van mijn moeder 
              kregen te zien (was ook nieuw voor mij). Sav kwam hier ook naartoe en volgens mij hebben we vooral even op de 
              bank gechilld. Ik geloof ook dat we weer spelletjes hebben gespeeld en ik was ook nog in slaap gevallen, 
              omdat ik toch best wel moe was hahah.
            </p>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/Screenshot_20230804-184320_BeReal.jpg"} />
            </div>
            <p>
              Rond half 5 zijn we ook nog eventjes de stad in geweest, maar hebben niet echt iets gekocht. Het kan ook haast niet anders 
              dat ik ook een eierbal heb gegeten hahah. 's Avonds hebben we een pizza gegeten (alweer haha) en hebben we nog een rondje gelopen, 
              waarna we rond half 9 weer teruggebracht werden naar De Wilp door mijn moeder. Hier zijn we snel weer naar de studio verkast en hebben 
              we wederom heel veel foto's gemaakt :)
            </p>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/IMG-20230805-WA0093.jpg"} />
            </div>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/IMG-20230805-WA0098.jpg"} />
            </div>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/IMG-20230805-WA0104.jpg"} />
            </div>
            <p>
              De volgende ochtend was het dan tijd om gedag te zeggen (voor 1 dagje haha), want mijn vader en ik waren 
              van plan om voor te bereiden voor het verhuizen van al mijn spullen naar Delft :). Dus rond een uurtje of 
              13 brachten wij jou naar het station, zodat je weer richting Bunnik kon treinen want ook jij ging je spulletje 
              verhuizen. De eerste dagjes na mijn terugkomst waren in ieder geval heel erg geslaagd :))
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#71bf0b', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #71bf0b' }}
            date="6 - 8 augustus 2022"
            iconStyle={{ background: '#71bf0b', color: '#fff' }}
            icon={<PersonPinCircle />}
          >
            <h3 className="vertical-timeline-element-title">En weer naar Bunnikkk</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">en temp</h4> */}
            <p>
              Op 6 augustus waren mijn vader en ik van plan naar Delft te gaan om al mijn spullen te verhuizen. Jij was op dat moment 
              ook in Delft om je kamer aan je gezin te laten zien en ook wat spulletjes te verhuizen, dus hadden we afgesproken dat jullie mij op zouden 
              halen zodat ik daarna mee kon gaan naar Bunnik. Dus na zo goed als klaar te zijn met het inrichten van mijn kamer, kom jij samen 
              met je ouders en Mille mij ophalen. Hier hebben we ook nog even de groene onderbroekdiscussie afgesloten (ik had gelijk hahah yesssss). 
              Mijn vader en jouw ouders ontmoeten elkaar ook voor het eerst, en daarna rijd ik gezellig 
              met jullie mee naar jullie huis. Ik heb geen flauw idee meer wat we gedaan hebben hahaha, ik kan hier ook niks van terugvinden. 
              Volgens mij wat spelletjes en daarna lekker naar bed, maar veel bijzonders is het niet geweest. Na een nachtje 
              slapen hadden we bedacht de volgende dag naar Utrecht te gaan voor een dagje. Het was best een goed dagje qua temperatuur en we hebben 
              gewoon lekker geshopt. Ik kan me niet herinneren dat we iets gekocht hebben, maar we hadden wel een leuke photobooth gevonden in de 
              Urban Outfitters, dus hebben we daar 3 hele leuke fotootjes geknipt :)
            </p>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/20230807_145157.jpg"} />
            </div>
            <p>
              Rond een uurtje of 16 waren we weer terug bij jou thuis. We zijn daarna met perudo naar de buren gegaan en hebben daar een spelletje 
              gedaan met Mille en haar vriendin. Toen kwam jouw buurvrouw met de mededeling dat ze wraps gingen eten en dit stond bij ons ook op de 
              planning, dus leek het een goed idee om samen te gaan eten. Wij zijn met z'n tweetjes naar de winkel gegaan om de benodigdheden te halen 
              en hebben daarna ons deel van het eten gekookt. We zijn daarna weer teruggegaan en hebben daar gezamenlijk gegeten. Ik heb ook nog een video 
              dat jij op de grond ligt als een baby hahah, en jullie wilden ook heel graag dat ik die evenwichtstest ging doen dat je op je knieën zit ofzo. 
              's Avonds hebben we nog een rondje gelopen en hebben we nog gekeken naar onze kampeerideetjes. En toen zijn we weer lekker gaan slapen :). Ik 
              heb wel het gevoel dat we inmiddels wel een beetje geïrriteerd aan elkaar raakten te worden en misschien waren we ook wel iets te veel samen 
              achter elkaar op dit moment hahah. De volgende dag gingen we nog eventjes leuk picknicken, want dat hadden we nog nooit gedaan en was wel 
              iets leuks om te gaan doen. Er scheen echt heerlijke zon, en we zijn nog eventjes klef geweest (iewww). Hier hebben we natuurlijk ook wat foto's 
              gemaakt, maar heel charmant kijken we ook niet hahah 
            </p>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/IMG-20230808-WA0025.jpg"} />
            </div>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/IMG-20230808-WA0026.jpg"} />
            </div>
            <p>
              Rond 13:15 was het dan tijd voor mij om weer naar huis te gaan, en je weer een tijd te moeten missen door de OWee en je EJW :(. Maar het volgende 
              op de planning was het kampeerweekendje dat je voor mijn verjaardag gaf :))
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#088c11', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #088c11' }}
            date="19 - 22 augustus 2022"
            iconStyle={{ background: '#088c11', color: '#fff' }}
            icon={<Forest />}
          >
            <h3 className="vertical-timeline-element-title">Kamperen in Wijchen</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">en temp</h4> */}
            <p>
              Om een uurtje of 12 nemen we de trein vanaf Delft naar Bunnik, waar de vouwwagen al deels geprepareerd 
              klaar staat. Na nog een paar laatste dingetjes te regelen en in te pakken, brengt jouw moeder ons naar 
              Boerderij-camping Bij De 3 Linden dichtbij Wijchen. Ook hadden we twee fietsen meegenomen zodat we wat mobieler waren ipv 
              alleen maar lopen. We checken in en zetten de vouwwagen op het hoekje van de 
              camping neer, waar we mooi ons weekendje gingen verblijven. Er werd ons nog gewaarschuwd dat er naast ons plekje 
              een of ander kinderspeelweek was ofzo, maar dit gaf juist alleen maar meer leuke sfeer rondom de camping :). 
              Samen hebben we de vouwwagen opgezet en hebben we even lekker gechilld aan ons campingtafeltje. Hier hebben we ook 
              eerst wat spelletjes gedaan, want we moest de echte campingervaring natuurlijk hebben.
            </p>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/20230819_162216.jpg"} />
            </div>
            <p>
              Voor onze 6 maanden had je mij een heel lief kaartje gegeven met een kado erbij: het sexy cowboy bever t-shirt :)). Ik vind 
              'm echt heel leuk, maar hij valt wel een beetje uit elkaar. Misschien moeten we deze ooit eens laten bedrukken want ik wil 
              'm wel vaker dragen eigk wanneer het weer wat zonniger wordt.
              Toen rond 16:30 zijn we naar de dichtstbijzijnde supermarkt gegaan om onze inkopen te doen voor de komende 
              4 daagjess. Hier besloten we ook dat we in de avond ravioli gingen maken :). Om 18u hebben we dan heerlijk gegeten 
              en daarna waren we ook al best wel uitgeput en hebben we even liggen zonnen. Jij bent best wel een sleeping beauty als 
              je slaapt hahah.
            </p>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/20230819_183527.jpg"} />
            </div>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/20230819_185507.jpg"} />
            </div>
            <p>
              Na uitgegeten te zijn (was echt heeel lekker), zijn we de omgeving gaan verkennen.
              We hebben een leuk klein rondje gemaakt tussen de weilandjes en bossen, waar jij ook helemaal in de slappe 
              lach was om hoe leuk je het vond :)).
            </p>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/20230819_191545.jpg"} />
            </div>
            <p>
              We zijn relatief snel terug gegaan want je had het best koud, dus heb jij 
              je leuke bruine trui aangetrokken en zijn we daarna weer verder gegaan, maar de andere kant op. We hebben echt een 
              lang rondje gemaakt en de omgeving was ook echt heel mooi. Je hebt nog een kikker geprobeerd te pakken en nog heeele 
              leuke foto's gemaakt bij het meertje in het bos :)
            </p>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/bereal-2023-08-19-0906.png"} />
            </div>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/IMG-20230822-WA0055.jpg"} />
            </div>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/IMG-20230822-WA0064.jpg"} />
            </div>
            <p>
              Toen we terug waren hebben we nog wat chippies gegeten en lekker gekletst en gezeten, waarna we rond een uurtje of 23 onze 
              tanden gingen poetsen en lekker ons eerste nachtje in de vouwwagen in gingen :).
            </p>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/bereal-2023-08-19-1013.png"} />
            </div>
            <p>
              De volgende ochtend hebben we lekker uitgeslapen, waarna we ons ontbijtje gegeten hebben en ik mijn sexy cowboy bever t-shirt 
              aan heb getrokken.
            </p>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/20230820_111340.jpg"} />
            </div>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/20230820_115646.jpg"} />
            </div>
            <p>
              We hadden vandaag het plan om een dagje Nijmegen te verkennen :). Om 12:00 stappen we op de fiets naar station Wijchen, om vanaf 
              daar de trein te nemen naar Nijmegen. We hadden wederom echt heel erg geluk met het weer, dus in het zonnetje liepen we naar het centrum 
              waar we een paar winkeltjes in zijn gegaan. We hebben hierna een lekkere banh mi gegeten (maar niet echte banh mi :( ), en zijn doorgelopen 
              richting de Waal, waar we eventjes gezeten hebben. Langs het stadsstrand zijn we richting de brug gelopen, waar een hele markt gaande was. Dit 
              was echt wel leuk, het sfeertje was perfect. Onder de brug door kwamen we uit bij een lekker plekje waar we in het gras konden liggen en 
              konden genieten van het weer (en elkaar :)). 
            </p>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/20230820_142511.jpg"} />
            </div>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/20230820_143219.jpg"} />
            </div>
            <p>
              We zijn na een goed tijdje gelegen te hebben, weer teruggelopen richting de stad waar jij mij had verteld dat er een lekkere ijssalon in de 
              buurt was. Dit moesten we natuurlijk uittesten :). Jij met je lekker bosbes-ijsje en ik weet eerlijk gezegd niet meer wat ik had gekozen (maar 
              ik neem aan dat het geen vanille was want dat was verboden hahah)
            </p>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/20230820_154952.jpg"} />
            </div>
            <p>
              Met ons ijsje zijn we richting het Kronenburgerpark gelopen, waar we genoten hebben van alle nieuwe studenten die in de stad liepen. Het was namelijk 
              de introweek van Radboud en daarom liepen er overal gekleurde shirtjes rond. Om 18:00 gaan we op zoek naar eten, want we begonnen toch 
              wel wat honger te krijgen. We hadden wel zin in wat lekkers, maar ook wel goedkoops en toen vonden we Nibbles. Het leek heel goedkoop op de 
              site, maar het idee van het restaurant was dat je telkens kleine hapjes bestelde en zo bleek het toch wel wat duurder te zijn dan gehoopt. Het eten 
              dat we kregen was wel heel lekker, dus klagen mochten we niet :). We keken naar welke trein we het beste konden nemen, en toen besloten we om 
              weer terug te gaan richting station Wijchen. Om 20:00 kwamen we aan en besloten we nog niet direct naar huis te gaan, maar nog een leuke fietsroute te vinden 
              langs een ander park. We vonden een leuk plekje met weer een meertje, en hebben daar in de buurt onze fiets neergezet om nog een stukje te lopen. We zijn op de 
              grond gaan zitten en hebben nog wat leuke fotootjes gemaakt :)
            </p>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/20230820_203444.jpg"} />
            </div>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/IMG-20230822-WA0069.jpg"} />
            </div>
            <p>
              We zijn daarna weer verder gefietst, waar we nog een bankje vinden om nog te chillen. Rond 21:30 arriveerden we weer terug bij de camping, om hier nog even te 
              relaxen om de gezellige en leuke tweede dag van ons kampeertripje af te ronden :).
            </p>
            <p>
              Op onze derde dag hebben we 's ochtends weer rustig aan gedaan met weer een lekker camping-ontbijtje.
            </p>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/20230821_102329.jpg"} />
            </div>
            <p>
              Rond half 1 zijn we de fiets weer opgestapt en zijn we naar de Action en Albert Heijn geweest in Wijchen om wat kaarten, eten en dingen voor de 
              proteus kmt te kopen voor ons dagje. Maar voordat we onze dag voortzetten, had ik nog een kapperafspraak bij Duo 4 You en hier gingen we samen heen 
              zodat jij ook kon beoordelen hoe het er uit zag hahah. Na mijn kapsel wat te hebben laten verkort, zijn we doorgefietst naar recreatiegebied Berendonck. 
              Ik had mijn handdoek mee (oja jij was die vergeten mee te nemen), en dus hebben we samen op mijn grote handdoek gelegen in het gras. Onze zwemkleding hadden we al aan, 
              dus zo konden we gelijk het water in. Jij had nog wel last van je oren, dus kon ik je helaas niet het water in gooien maar er was nog genoeg om je een beetje 
              mee te plagen :)). Ook waren er wat eenden in het water (jaa echt eenden) en ook was er een of ander feest gaande aan de andere kant van het gebied. 
              Ik had jou persoonlijke kaarten gegeven voor onze 6 maanden, dus hebben we ook nog wat shitheads/klootzakken gespeeld (ik kan heel goed tegen mijn verlies hoor) :). 
            </p>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/20230821_163509.jpg"} />
            </div>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/IMG-20230822-WA0080.jpg"} />
            </div>
            <p>
              Om half 6 zijn we weer op de fiets gestapt richting de camping. We hadden nog genoeg over voor nog een avondje ravioli eten, dus hebben we weer lekker champies 
              gesneden en de saus opgemaakt. Vond dit eten echt heel lekker, dit moeten we binnenkort nog maar een keertje maken. Na ons eten jij dat je nog even iets ging doen, en toen 
              ik zag welke richting jij op liep had ik al zo'n vermoeden dat je wat lekkere aardbeien op ging halen :). In combinatie met onze chocola hebben we een heerlijk 
              toetje gehad :).
            </p>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/20230821_190351.jpg"} />
            </div>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/IMG-20230822-WA0085.jpg"} />
            </div>
            <p>
              Na het eten hebben we Rummikub gespeeld en had ik het eindelijk een beetje onder de knie (3-2 gewonnen hihiii). Daarna hebben we een tijdje even niks gedaan om wat uit te rusten. 
              Om 21 uur besloten we nog een rondje te gaan lopen, om onze laatste avond nog even te genieten van de mooie natuur. Het begon al een beetje te schemeren en 
              we hadden ook een bepaald interessant idee in ons hoofd (hmmm). We gingen bij het water zitten op wat zand, waar we een leuk bankje aan de overkant zagen dus besloten 
              we om daarheen te lopen. Veel andere bankjes waren er ook niet in dit bos te vinden, en deze had ook een prachtig uitzicht over het meertje en het bos. Hier hebben we even 
              heel erg genoten van elkaar, iets wat ik wel heel leuk vind dat we dit gewoon gedaan hadden hahah (en werd toch beetje zenuwachtig van het risico dat er bij kwam haha). Je hebt hier 
              nog een hele lelijke foto van mij gemaakt (deze komt niet hierin haha), waarna we richting de camping terug liepen in het pikkedonker. Er kwamen ook nog twee vrouwen langsfietsen die 
              een beetje boos werden dat we geen lampjes hadden haha. Eenmaal terug, zijn we direct naar bed gegaan om ons laatste nachtje nog even lekker te slapen in de vouwwagen.
              In de ochtend hebben we direct de vouwwagen weer opgevouwen en de tafel nog even laten staan om nog lekker te kunnen zitten.
            </p>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/20230822_121959.jpg"} />
            </div>
            <p>
              Om 13:00 worden we opgehaald door je vader, waarna we gezamenlijk terugreden naar Bunnik :). Nu ik dit allemaal getypt heb, realiseer ik me dat dit weekend echt 
              heel erg geslaagd was en ik hoop dat we binnenkort nog zo'n weekend samen kunnen hebben.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#0d6cb5', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #0d6cb5' }}
            date="23 - 26 augustus 2022"
            iconStyle={{ background: '#0d6cb5', color: '#fff' }}
            icon={<Rowing />}
          >
            <h3 className="vertical-timeline-element-title">KMT Proteus</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">en temp</h4> */}
            <p>
              Tijdens de OWee waren we beide na de eerste nacht binnengekomen bij Proteus :)). Het was na ons weekendje samen dan ook tijd 
              om de kmt te hebben. We hebben elkaar niet veel gezien, maar vind het wel leuk dat we beide veel nieuwe leuke mensen ontmoet hebben 
              waar we de komende maanden echt goede vrienden mee zijn geworden. Veel over deze halve week heb ik niet te zeggen, want zo heel leuk was het nou ook weer niet maar ik vond het 
              wel leuk om je af en toe even in je zij te prikken.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#ff7700', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #ff7700' }}
            date="27 augustus 2022"
            iconStyle={{ background: '#ff7700', color: '#fff' }}
            icon={<Celebration />}
          >
            <h3 className="vertical-timeline-element-title">Mijn verjaardag vieren :)</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">en temp</h4> */}
            <p>
              Na het KMT, zijn we beide eerst eventjes lekker naar beide ons eigen huis gegaan om ons te verfrissen. Rond 17:30 hadden we afgesproken 
              bij Delft Campus, om ons te verkassen richting Leek. Op Rotterdam Centraal hebben we pasta gehaald bij Julia's, om daarna de lange zit naar 
              Groningen te overleven. Op station Groningen moesten we nog een tijdje wachten om uiteindelijk dan richting Leek te kunnen gaan. We wilden nog even langs 
              Simon en co, maar die reageerden niet dus stapten we maar op de bus. Hier kwamen nog iemand tegen van mijn middelbare, en uiteindelijk rond 20:30 komen we aan 
              in het chalet. Mijn moeder sliep in Groningen, dus konden wij lekker samen nog een avondje zijn (met Terry natuurlijk). 
            </p>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/Screenshot_20231121-155551_BeReal.jpg"} />
            </div>
            <p>
              In de ochtend hebben we wat boodschapjes gedaan, omdat er 's middags wat bezoek kwam voor mijn verjaardag. Mijn moeder kwam eerst aan en toen kwam Savannah ook 
              kort daarna. In de middag kwamen mijn oma en oom met zijn nieuwe vriendin ook nog leuk langs en samen hebben we Formule 1 gekeken. Ik heb het gevoel dat je niet per 
              se heel veel gesproken hebt met hun, maar ik vind het wel leuk dat je een deel al ontmoet hebt. Ooit kom je ook nog alle neefjes en nichtjes te zien, denk dat dat ook wel 
              heel leuk kan zijn.
            </p>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/Screenshot_20231121-160055_BeReal.jpg"} />
            </div>
            <p>
              Rond 19:00 zijn we weer richting Delft gegaan, om in de avond lekker samen te gaan slapen en te wachten tot het 00:00 was :)
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#f00010', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #f00010' }}
            date="28 augustus 2022"
            iconStyle={{ background: '#f00010', color: '#fff' }}
            icon={<Cake />}
          >
            <h3 className="vertical-timeline-element-title">Mijn verjaardaggg</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">en temp</h4> */}
            <p>
              Er stond niets op de planning voor mijn verjaardag, maar het was wel fijn om in de ochtend samen met jou wakker te worden :). We zijn de stad nog even in geweest 
              om bijvoorbeeld die prullenbak voor mij te kopen, en zijn daarna in de middag weer teruggegaan. We hadden als 
              idee om nog wel een lekker taart te bakken, dus hebben we dat gedaan :). De taart was echt goed gelukt en ik heb er misschien iets te veel van 
              gegeten hahah. Rond een uurtje of 16:00 ben jij volgens mij naar huis gegaan, omdat je iets anders op de planning had staan maar vond het wel 
              leuk dat je er overdag was geweest. Het was in ieder geval een leukere verjaardag dan de afgelopen jaren :)
            </p>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/20230828_153738.jpg"} />
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#ff6efd', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #ff6efd' }}
            date="29 augustus 2022"
            iconStyle={{ background: '#ff6efd', color: '#fff' }}
            icon={<Girl />}
          >
            <h3 className="vertical-timeline-element-title">Barbie film!</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">en temp</h4> */}
            <p>
              Voor mijn verjaardag had ik een 25 euro tegoedbon gekregen van jouw ouders. We hadden dus al het idee om naar de Barbie film te gaan en ik was misschien 
              wel meer excited dan jij hahah. We konden dus heel goed de bon gebruiken en we moesten natuurlijk wel in het roze! Dus hebben we beide ons meest roze kleding 
              uit de kast gepakt en hebben we de roze mascara van Els geleend om zo goed mogelijk in stijl heen te gaan. Jij hebt de leukste foto's hiervoor en ik heb deze volgens mij 
              niet, maar natuurlijk nog wel een fotootje gemaakt in de bioscoop :) 
            </p>
            <div className={styles.one_image}>
              <img src={"/RoaJuul/images/Screenshot_20231121-162512_BeReal.jpg"} />
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="8 september 2022"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FavoriteBorderIcon />}
          >
            <h3 className="vertical-timeline-element-title">Middagje Scheveningen</h3>
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
            <h3 className="vertical-timeline-element-title">Liquicity</h3>
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
            <h3 className="vertical-timeline-element-title">Ploegdate H29 x D11</h3>
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
            <h3 className="vertical-timeline-element-title">Trampolineparkkk</h3>
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
            <h3 className="vertical-timeline-element-title">Inauguratie Proteus</h3>
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
            <h3 className="vertical-timeline-element-title">Midsommar date</h3>
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
            <h3 className="vertical-timeline-element-title">Leuk dagje Groningen</h3>
            <h4 className="vertical-timeline-element-subtitle">en temp</h4>
            <p>
              ondertekst
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#ae00ff', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #ae00ff' }}
            date="18 november 2022"
            iconStyle={{ background: '#ae00ff', color: '#fff' }}
            icon={<NightlifeIcon />}
          >
            <h3 className="vertical-timeline-element-title">Galaaa</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">en temp</h4> */}
            <p>
              Ik had deze al klaar staan zodat ik later een tekstje erbij kon zetten, 
              maar laten we deze avond maar snel vergeten...
            </p>
            <p>
              Wel hebben we nog leuke fotootjes:
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#ff006f', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #ff006f' }}
            date="26 november 2022"
            iconStyle={{ background: '#ff006f', color: '#fff' }}
            icon={<FavoriteIcon />}
          >
            <h3 className="vertical-timeline-element-title">1 jaar :)</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">en temp</h4> */}
            <p>
              Je bent bij het einde gekomen van de veeeele leuke dingen die wij gedaan hebben in het eerste
              jaar dat we elkaar kennen :). Ik kan me alleen maar verheugen op wat we allemaal nog mee zullen 
              maken in de hopelijk heeel vele komende jaren :)). Ik zal vast nog heel veel momenten gemist hebben 
              van het afgelopen jaar, dus als je je nog iets herinnert kunnen we dat er nog in zetten :).
            </p>
            <p>
              Je bent het beste dat ik ooit in mijn leven ben tegengekomen en ik kan niet wachten op wat de 
              toekomst voor ons in petto heeft :). Je bent leuk, lief, knap, lekker en alle positieve woorden die 
              ik me maar kan bedenken, en ik hou heel heel heel heel veel van jouu &lt;3333333
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default TimelinePage;
