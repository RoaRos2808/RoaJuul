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
              <img src={"/images/20221126_194834.jpg"} />
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
              <img src={"/images/Screenshot_20230812-120422_BeReal.jpg"} />
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
              <img src={"/images/6695372.png"} />
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
              <img src={"/images/Screenshot_20231103-012103_WhatsApp.jpg"} />
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
              <img src={"/images/Screenshot_20231103-013456_WhatsApp.jpg"} />
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
              <img src={"/images/Schermafbeelding 2023-11-03 213448.png"} />
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
              Bijna elke avond in deze week sliepen we pas na 12 uur, maar de nacht van 11 januari 
              blijft wel de langste nacht die wij samen op WhatsApp gespendeerd hebben. Lekker praten 
              over van alles en nog wat, en jij zelfs een idee hebben om de Tesla te pakken en 
              even op en neer naar Groningen te gaan midden in de nacht. En dat alles nadat we maar 
              een keer op date zijn geweest hahah. Maar dit alles voelde al zo veel meer dan gewoon 
              kletsen. Deze nacht zijn we opgebleven to kwart over 4 's nachts, en dat op een dag 
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
              <img src={"/images/Schermafbeelding 2023-11-03 224303.png"} />
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="16 januari 2022"
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
            date="21 januari 2022"
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
            date="28 januari 2022"
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
            date="11 februari 2022"
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
            date="14 februari 2022"
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
            date="16 februari 2022"
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
            date="23 februari 2022"
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
