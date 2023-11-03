import React from 'react';
import styles from './TimelinePage.module.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

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
            icon={<FavoriteBorderIcon />}
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
            icon={<FavoriteBorderIcon />}
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
            icon={<FavoriteBorderIcon />}
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
            icon={<FavoriteBorderIcon />}
          >
            <h3 className="vertical-timeline-element-title">Date?</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">en temp</h4> */}
            <p>
              ondertekst
            </p>
            <div className={styles.one_image}>
              <img src={"/images/Screenshot_20231103-013456_WhatsApp.jpg"} />
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="19 december 2022"
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
            date="2 januari 2022"
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
            date="11 januari 2022"
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
            date="15 januari 2022"
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
