import '../styles/SectionScroller.css';
import useScrollPosition from '../hooks/useScrollPosition';
import { useState, useEffect } from 'react';

//? Maybe turn this into a parent component.
//? Then get the direct children and use
//? them as the sections? Also, use useRef().

//* Maybe make the SCROLL button fill with glowing
//* white as a progress bar so the user knows it.

function SectionScroller() {
  const [mainElementHeight, setMainElementHeight] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [isAtHomeSection, setIsAtHomeSection] = useState(true);
  const [isAtBaseSection, setIsAtBaseSection] = useState(false);
  const scrollPosition = useScrollPosition();

  useEffect(() => {
    const mainElement = document.getElementsByTagName('main').item(0);
    const newMainElementHeight = mainElement.clientHeight;
    const newWindowHeight = window.innerHeight;
    setMainElementHeight(newMainElementHeight);
    setWindowHeight(newWindowHeight);

    const sections = getSections();
    const newIsAtHomeSection = getIsAtHomeSection(sections);
    const newIsAtBaseSection = getIsAtBaseSection(sections);
    setIsAtHomeSection(newIsAtHomeSection);
    setIsAtBaseSection(newIsAtBaseSection);
  }, [scrollPosition]);

  const getIsAtHomeSection = () => {
    const newIsAtHomeSection = scrollPosition === 0;
    return newIsAtHomeSection;
  }

  const getIsAtBaseSection = sections => {
    const sectionsHeight = sections.reduce((accumulated, section) => {
      return accumulated + section.height;
    }, 0);

    const scrollPositionInt = Math.ceil(scrollPosition);
    const baseSection = getBaseSection(sections);
    const sectionsFinalHeight = sectionsHeight - baseSection.height;

    const newIsAtBaseSection = scrollPositionInt >= sectionsFinalHeight;
    return newIsAtBaseSection;
  }

  const getSections = () => {
    const sections = [];
    const sectionElements = document.getElementsByTagName('section');

    // Maybe replace this with ID to make sure it'll always be unique?
    for (const sectionElement of sectionElements) sections.push({
      name: sectionElement.className,
      height: sectionElement.clientHeight
    });

    return sections;
  }

  const getHomeSection = sections => {
    return sections[0];
  }

  const getBaseSection = sections => {
    return sections[sections.length - 1];
  }

  const getNextSection = sections => {
    let nextSection, accumulated = 0;
    const scrollPositionInt = Math.ceil(scrollPosition);

    for (let index in sections) {
      index = parseInt(index);
      accumulated += sections[index].height;

      if (scrollPositionInt < accumulated) {
        nextSection = sections[index + 1];
        break;
      }
    }

    nextSection ||= getHomeSection(sections);
    return nextSection;
  }

  const getPreviousSection = sections => {
    let previousSection, accumulated = 0;
    const scrollPositionInt = Math.floor(scrollPosition);

    for (let index in sections) {
      index = parseInt(index);

      if (scrollPositionInt <= accumulated) {
        previousSection = sections[index - 1];
        break;
      }

      accumulated += sections[index].height;
    }

    previousSection ||= getBaseSection(sections);
    return previousSection;
  }

  const scrollSectionIntoView = section => {
    const sectionElement = document
      .getElementsByClassName(section.name).item(0);

    sectionElement.scrollIntoView({ behavior: 'smooth' });
  }

  const handleClick = type => {
    const sections = getSections();
    let section;

    switch (type) {
      case 'NEXT': section = getNextSection(sections); break;
      case 'BACK': section = getPreviousSection(sections); break;
      case 'HOME': section = getHomeSection(sections); break;
      case 'BASE': section = getBaseSection(sections); break;
    }

    scrollSectionIntoView(section);
  }

  return <div className='scroll'>
    <button disabled={isAtHomeSection} onClick={() => handleClick('HOME')}>HOME</button>
    <button disabled={isAtHomeSection} onClick={() => handleClick('BACK')}>BACK</button>
    <progress value={scrollPosition} max={mainElementHeight - windowHeight}></progress>
    <button disabled={isAtBaseSection} onClick={() => handleClick('NEXT')}>NEXT</button>
    <button disabled={isAtBaseSection} onClick={() => handleClick('BASE')}>BASE</button>
  </div>
}

export default SectionScroller;